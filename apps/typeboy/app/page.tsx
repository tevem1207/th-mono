import { auth } from "@/auth";
import { SignIn, SignOut } from "@/components/auth";

import { MemoEditor } from "./MemoEditor";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <MemoEditor />
      </main>
    </>
  );
}

const Header = () => {
  return (
    <header className="flex items-center justify-end px-6 py-4">
      <Authentication />
    </header>
  );
};

async function Authentication() {
  const session = await auth();

  return (
    <div className="flex items-center gap-4">
      {session?.user ? <SignOut /> : <SignIn />}
    </div>
  );
}
