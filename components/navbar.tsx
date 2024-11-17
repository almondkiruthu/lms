import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { auth, UserButton } from '@clerk/nextjs'
import MaxWidthWrapper from './max-width-wrapper'
import MobileNav from './mobile-nav'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  const { userId } = auth()

  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 flex font-semibold">
            <span>LMS</span>
          </Link>

          <MobileNav userId={userId} />

          <div className="hidden items-center space-x-4 sm:flex">
            {!userId ? (
              <>
                <Link
                  href={'/sign-in'}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Sign in
                </Link>
                <Link
                  href={'/sign-up'}
                  className={buttonVariants({
                    size: 'sm',
                  })}
                >
                  Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
