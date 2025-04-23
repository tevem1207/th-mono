import { Button } from "@repo/ui";

import { signOut } from "@/auth";

export const SignOut = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
};
