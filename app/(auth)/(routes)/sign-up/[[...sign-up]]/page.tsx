import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <SignUp
      afterSignUpUrl={`${process.env.NEXT_PUBLIC_APP_URL + '/auth-callback'}`}
    />
  )
}
