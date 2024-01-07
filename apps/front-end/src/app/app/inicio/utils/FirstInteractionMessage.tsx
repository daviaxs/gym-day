'use client'

import { Text } from '@/shared/components/text/Text'
import { useEffect, useState } from 'react'

export function FirstInterationMessage() {
  const [firstInteraction, setFirstInteraction] = useState(false)

  useEffect(() => {
    const interactionCount = localStorage.getItem('interactionCount')

    if (!interactionCount) {
      localStorage.setItem('interactionCount', '1')
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
