import { db } from './db'

export async function validateTeacher(userId?: string) {
  const teacher = await db.user.findUnique({
    where: {
      clerkId: userId,
      isTeacher: true,
    },
  })

  if (teacher) {
    return true
  }

  return false
}
