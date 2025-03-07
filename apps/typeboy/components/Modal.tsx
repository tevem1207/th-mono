"use client";

import { Dialog, DialogContent, DialogTitle } from "@repo/ui";
import { useRouter } from "next/navigation";

export function Modal({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogContent className="overflow-y-hidden">
        <DialogTitle hidden>{title}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
}
