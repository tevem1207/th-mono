import { Editor } from "../components";
import SignIn from "@/components/SignIn";

export default function Page() {
  return (
    <main className="flex items-center h-dvh justify-center px-6">
      <SignIn></SignIn>
      <Editor />
    </main>
  );
}
