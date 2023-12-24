import { Light } from '@/shared/components/light/Light'
import { AuthContainer } from '../AuthPage.style'
import { Welcome } from '../utils/welcome'
import { Form } from '../utils/form'
import { Button } from '@/shared/components/button/Button'
import { SpanContainer, SubmitButton } from '../utils/form/Form.style'
import { Text } from '@/shared/components/text/Text'
import { TextSpan } from '@/shared/components/text/TextSpan'
import Link from 'next/link'

export default function SignIn() {
  return (
    <AuthContainer>
      <Welcome.Container>
        <Welcome.Title>
          Seu progresso começa com um simples clique!
        </Welcome.Title>
      </Welcome.Container>

      <Form.Container title="Criar conta">
        <Form.Content>
          <Form.Input name="email" type="email" placeholder="Email" />

          <SpanContainer className="passwordSpanContainer">
            <Form.Input name="password" type="password" placeholder="Senha" />
            <TextSpan color="blue-400">Esqueci minha senha</TextSpan>
          </SpanContainer>

          <SubmitButton>
            <Button type="submit" size="full">
              Entrar
            </Button>

            <Text size="lgSm" $textalign="center" $lineheight="110%">
              Não tem uma conta?{' '}
              <Link href="/auth/registrar">
                <TextSpan hoverUnderline>Registre-se</TextSpan>
              </Link>
            </Text>
          </SubmitButton>
        </Form.Content>
      </Form.Container>

      <Light color="grey-500" />
    </AuthContainer>
  )
}
