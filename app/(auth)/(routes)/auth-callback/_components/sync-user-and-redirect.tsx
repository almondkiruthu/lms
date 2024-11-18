import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const syncNewUser = async () => {
  const user = await currentUser()

  const existingUser = await db.user.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  })

  if (!existingUser) {
    await db.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
        firstName: user?.firstName as string,
        lastName: user?.lastName as string,
      },
    })
  }

  // Redirect after syncing
  redirect('/dashboard')
}

export default async function SyncUserAndRedirect() {
  await syncNewUser()

  // Since this component is async, nothing is rendered
  return null
}
