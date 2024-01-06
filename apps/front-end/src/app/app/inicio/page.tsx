'use client'

import { useGetUserValues } from '@/shared/hooks/useGetUserValues'

export default function HomePage() {
  const { userValues } = useGetUserValues()

  return <div>User: {userValues?.name}</div>
}
