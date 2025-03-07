import { Dialog } from "@repo/ui";

export default function MemoLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main>
      <section>{children}</section>
      <Dialog>{modal}</Dialog>
    </main>
  );
}
