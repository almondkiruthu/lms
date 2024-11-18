import { db } from '@/lib/db'

export async function getAdminMetrics() {
  // total users
  const userCount = await db.user.count()
  // new users this week
  const newUsersThisWeek = await db.user.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
  })
  const activeUsers = await db.user.count()
  const users = await db.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return { userCount, newUsersThisWeek, activeUsers, users }
}
