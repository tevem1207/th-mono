import { Button } from "@repo/ui";

import { signIn } from "@/auth";

export const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  );
}
