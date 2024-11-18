import { getAdminMetrics } from '@/actions/get-admin-metrics'
import Navbar from '@/components/navbar'
import { columns } from './_components/columns'
import { DataTable } from './_components/data-table'

export default async function Page() {
  const { users } = await getAdminMetrics()

  return (
    <div>
      <Navbar />
      <DataTable columns={columns} data={users} users={users} />
    </div>
  )
}
