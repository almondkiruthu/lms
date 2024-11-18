// app/auth-callback/page.tsx
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'
import SyncUserAndRedirect from './_components/sync-user-and-redirect'

export default function Page() {
  return (
    <div className="mt-24 flex w-full justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="text-xl font-semibold">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
      <Suspense>
        {/* SyncNewUser runs server-side without blocking initial UI */}
        <SyncUserAndRedirect />
      </Suspense>
    </div>
  )
}
