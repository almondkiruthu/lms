import { db } from './db'

export async function validateAdmin(userId?: string) {
  const admin = await db.user.findUnique({
    where: {
      clerkId: userId,
      isAdmin: true,
    },
  })

  if (admin) {
    return true
  }

  return false
}
