import { auth } from "@/auth";

export const UserAvatar = async () => {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      {session.user.name}
      {/* <Image src={session.user.image} alt="User Avatar" /> */}
    </div>
  );
};
