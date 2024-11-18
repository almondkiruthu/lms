import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

import { validateAdmin } from '@/lib/admin'
import { db } from '@/lib/db'
import { validateTeacher } from '@/lib/teacher'

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const { title } = await req.json()

    const isTeacher = await validateTeacher(userId as string)
    const isAdmin = await validateAdmin(userId as string)

    if (!userId || !isTeacher || !isAdmin) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    })

    return NextResponse.json(course)
  } catch (error) {
    console.log('[COURSES]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
