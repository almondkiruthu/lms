import { getAdminMetrics } from '@/actions/get-admin-metrics'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import Navbar from '@/components/navbar'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MetricCard } from './_components/metric-card'

export default async function AdminPage() {
  const { userCount, newUsersThisWeek, activeUsers, users } =
    await getAdminMetrics()
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="flex flex-col items-center justify-center pb-16 pt-[80px] text-center">
        <div>
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
            <MetricCard label="Total Users" value={userCount} />
            <MetricCard label="New Users This Week" value={newUsersThisWeek} />
            <MetricCard label="Active Users" value={activeUsers} />
          </div>
        </div>
        <Link
          href="/admin/manage-users"
          className={cn(buttonVariants({ size: 'lg' }), 'bg-sky-700')}
        >
          Manage users
        </Link>
      </MaxWidthWrapper>
    </>
  )
}
