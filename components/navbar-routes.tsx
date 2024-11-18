'use client'

import { UserButton } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { SearchInput } from './search-input'

export const NavbarRoutes = ({
  isTeacher,
  isAdmin,
}: {
  isTeacher?: boolean
  isAdmin?: boolean
}) => {
  const pathname = usePathname()

  const isTeacherPage = pathname?.startsWith('/dashboard/teacher')
  const isCoursePage = pathname?.includes('/courses')
  const isSearchPage = pathname === '/dashboard/search'

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="ml-auto flex gap-x-2">
        {isTeacherPage ||
          (isCoursePage && (
            <Link href="/dashboard">
              <Button size="sm" variant="ghost">
                <LogOut className="mr-2 h-4 w-4" />
                Exit
              </Button>
            </Link>
          ))}
        {isTeacher === true && (
          <Link href="/dashboard/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
        )}
        {isAdmin === true && (
          <Link href="/admin">
            <Button size="sm" variant="ghost">
              Admin
            </Button>
          </Link>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  )
}
