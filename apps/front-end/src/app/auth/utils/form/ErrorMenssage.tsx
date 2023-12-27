import { Text } from '@/shared/components/text/Text'
import { createUserData } from '@/shared/schemas/signUpSchema'
import { useFormContext } from 'react-hook-form'

export function ErroMessage({ name }: { name: keyof createUserData }) {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <Text size="md" color="red-400">
      {errors[name] ? <>{errors[name]?.message}</> : null}
    </Text>
  )
}
