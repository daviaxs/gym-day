'use client'

import { Text } from '@/shared/components/text/Text'
import { useGetUserValues } from '@/shared/hooks/useGetUserValues'
import { inter } from '@/shared/styles/theme/fonts'

export function UserFisrtName() {
  const { userValues } = useGetUserValues()
  return userValues?.name.split(' ')[0]
}
