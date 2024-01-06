'use client'

import { useGetUserValues } from '@/shared/hooks/useGetUserValues'

export function UserFisrtName() {
  const { userValues } = useGetUserValues()
  return userValues?.name.split(' ')[0]
}
