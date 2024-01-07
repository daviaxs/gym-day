'use client'

import { Text } from '@/shared/components/text/Text'
import { useEffect, useState } from 'react'

export function FirstInterationMessage() {
  const [firstInteraction, setFirstInteraction] = useState(false)

  useEffect(() => {
    const interactionCount = localStorage.getItem('GYM_DAY_FIRST_INTERACTION')

    if (!interactionCount) {
      localStorage.setItem('GYM_DAY_FIRST_INTERACTION', '1')
      setFirstInteraction(true)
    }
  }, [])

  return (
    <Text size="xl" $weight="700">
      {firstInteraction
        ? 'Seja bem vindo(a) ao Gym Day!'
        : 'Que bom ver você de novo!'}
    </Text>
  )
}
