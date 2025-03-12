export default function MemoLayout({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main>
      <section>{children}</section>
    </main>
  );
}
