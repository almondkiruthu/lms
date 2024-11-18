import { NavbarRoutes } from '@/components/navbar-routes'

import { validateAdmin } from '@/lib/admin'
import { validateTeacher } from '@/lib/teacher'
import { auth } from '@clerk/nextjs'
import { MobileSidebar } from './mobile-sidebar'

export const Navbar = async () => {
  const { userId } = auth()
  const isTeacher = await validateTeacher(userId as string)
  const isAdmin = await validateAdmin(userId as string)
  return (
    <div className="flex h-full items-center border-b bg-white p-4 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes isTeacher={isTeacher} isAdmin={isAdmin} />
    </div>
  )
}
