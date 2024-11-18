import { NextResponse } from 'next/server'

import { validateAdmin } from '@/lib/admin'
import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'

export async function PATCH(
  req: Request,
  { params }: { params: { clerkId: string } },
) {
  try {
    const { userId } = auth()
    const { clerkId } = params
    const values = await req.json()
    const isAdmin = await validateAdmin(userId as string)

    if (!userId && !isAdmin) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const updatedUser = await db.user.update({
      where: { clerkId: clerkId },
      data: {
        ...values,
      },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.log(' ROLE_MANAGEMENT_USER_ID]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
