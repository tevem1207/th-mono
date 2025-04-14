import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@repo/ui"; // @/components/ui에서 직접 불러올 수도 있어요
import { Button } from "@repo/ui";
import { MenuIcon } from "@repo/ui/icons";
import Link from "next/link";

import navigationItems from "@/data/navigation";

export const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <SheetTitle hidden>menu</SheetTitle>
          <nav className="mt-4 flex flex-col gap-4">
            {navigationItems.map((item) => (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
