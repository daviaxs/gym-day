import { Text } from '@/shared/components/text/Text'
import { FormContainer, FormContent } from './Form.style'

interface FormProps {
  title: string
}

export function Form({ title }: FormProps) {
  return (
    <FormContainer>
      <Text as="h2" size="xxl" color="white">
        {title}
      </Text>

      <FormContent></FormContent>
    </FormContainer>
  )
}
