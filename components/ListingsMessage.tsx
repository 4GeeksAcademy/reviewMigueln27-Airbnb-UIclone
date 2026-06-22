type ListingsMessageProps = {
  message: string;
};

export const ListingsMessage = ({ message }: ListingsMessageProps) => {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-12 text-center text-sm font-medium text-zinc-500">
      {message}
    </section>
  );
};
