import type { RoomData } from "../types/room";

type RoomPhotoGalleryProps = {
  room: RoomData;
  photoIndex: number;
  onPreviousPhoto: () => void;
  onNextPhoto: () => void;
  onSelectPhoto: (index: number) => void;
};

export const RoomPhotoGallery = ({ room, photoIndex, onPreviousPhoto, onNextPhoto, onSelectPhoto }: RoomPhotoGalleryProps) => {
  const sidePhotos = room.photos.filter((_, index) => index !== photoIndex).slice(0, 4);

  return (
    <section className="space-y-3">
      <div className="relative overflow-hidden rounded-2xl bg-zinc-100 md:hidden">
        <img
          src={room.photos[photoIndex]}
          alt={`${room.title} photo ${photoIndex + 1}`}
          className="h-[300px] w-full object-cover"
          onError={(event) => {
            const image = event.currentTarget;
            if (!image.src.includes("room-placeholder.svg")) {
              image.src = "/room-placeholder.svg";
            }
          }}
        />
        <button
          onClick={onPreviousPhoto}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow"
          aria-label="Previous photo"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          onClick={onNextPhoto}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow"
          aria-label="Next photo"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="hidden h-[430px] grid-cols-[2fr_1fr] gap-2 overflow-hidden rounded-2xl md:grid">
        <button onClick={() => onSelectPhoto(photoIndex)} className="overflow-hidden bg-zinc-100" aria-label="Main photo">
          <img
            src={room.photos[photoIndex]}
            alt={`${room.title} photo ${photoIndex + 1}`}
            className="h-full w-full object-cover"
            onError={(event) => {
              const image = event.currentTarget;
              if (!image.src.includes("room-placeholder.svg")) {
                image.src = "/room-placeholder.svg";
              }
            }}
          />
        </button>

        <div className="grid grid-cols-2 gap-2">
          {sidePhotos.map((photo, index) => {
            const originalIndex = room.photos.findIndex((value) => value === photo);

            return (
              <button
                key={`${photo}-${index}`}
                onClick={() => onSelectPhoto(originalIndex)}
                className="overflow-hidden bg-zinc-100"
                aria-label={`Show photo ${originalIndex + 1}`}
              >
                <img
                  src={photo}
                  alt={`${room.title} side photo ${index + 1}`}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (!image.src.includes("room-placeholder.svg")) {
                      image.src = "/room-placeholder.svg";
                    }
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
