import { Text } from '@/shared/components/text/Text'
import { FormContainerStyle } from './Form.style'

interface FormProps {
  title: string
  children: React.ReactNode
}

export function FormContainer({ title, children }: FormProps) {
  return (
    <FormContainerStyle>
      <Text as="h2" size="xxl" color="white">
        {title}
      </Text>

      {children}
    </FormContainerStyle>
  )
}
