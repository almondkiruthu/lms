import { Chapter, Course, UserProgress } from '@prisma/client'

import { NavbarRoutes } from '@/components/navbar-routes'

import { CourseMobileSidebar } from './course-mobile-sidebar'

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null
    })[]
  }
  progressCount: number
  isTeacher?: boolean
  isAdmin?: boolean
}

export const CourseNavbar = ({
  course,
  progressCount,
  isTeacher,
  isAdmin,
}: CourseNavbarProps) => {
  return (
    <div className="flex h-full items-center border-b bg-white p-4 shadow-sm">
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes isTeacher={isTeacher} isAdmin={isAdmin} />
    </div>
  )
}
