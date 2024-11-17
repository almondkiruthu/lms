import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

const syncNewUser = async () => {
  const user = await currentUser();

  const existingUser = await db.user.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  });

  if (!existingUser) {
    await db.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
        firstName: user?.firstName as string,
        lastName: user?.lastName as string,
      },
    });
  }

  redirect("/");
};

export default async function page() {
  await syncNewUser();

  return (
    <div className="mt-24 flex w-full justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="text-xl font-semibold">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
}