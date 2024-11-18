import { validateAdmin } from '@/lib/admin'
import { validateTeacher } from '@/lib/teacher'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const TeacherLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth()

  const isTeacher = await validateTeacher(userId as string)
  const isAdmin = await validateAdmin(userId as string)

  if (!isTeacher || !isAdmin) {
    return redirect('/')
  }

  return <>{children}</>
}

export default TeacherLayout
