import { auth } from "@/auth";
import { Editor, SignIn, SignOut } from "@/components";

export default function Page() {
  return (
    <>
      <header className="flex items-center justify-end px-6 py-4">
        <Authentication />
      </header>
      <main className="flex items-center h-dvh justify-center px-6">
        <Editor />
      </main>
    </>
  );
}

async function Authentication() {
  const session = await auth();

  return (
    <div className="flex items-center gap-4">
      {session?.user ? <SignOut /> : <SignIn />}
    </div>
  );
}
