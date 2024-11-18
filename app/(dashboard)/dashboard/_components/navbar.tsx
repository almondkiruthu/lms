import { NavbarRoutes } from '@/components/navbar-routes'

import { validateTeacher } from '@/lib/teacher'
import { auth } from '@clerk/nextjs'
import { MobileSidebar } from './mobile-sidebar'

export const Navbar = async () => {
  const { userId } = auth()
  const isTeacher = await validateTeacher(userId as string)
  return (
    <div className="flex h-full items-center border-b bg-white p-4 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes isTeacher={isTeacher} />
    </div>
  )
}
