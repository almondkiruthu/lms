import { db } from './db'

export async function validateAdmin(userId?: string) {
  if (!userId) {
    console.warn('validateAdmin called with undefined userId')
    return false
  }

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
