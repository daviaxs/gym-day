'use client'

import { AuthContainer } from '../AuthPage.style'
import { Light } from '@/shared/components/light/Light'
import { Welcome } from '../utils/welcome'
import { Form } from '../utils/form'
import { Button } from '@/shared/components/button/Button'
import { Text } from '@/shared/components/text/Text'
import { TextSpan } from '@/shared/components/text/TextSpan'
import { SubmitButton } from '../utils/form/Form.style'
import { useSignUpForm } from '@/shared/hooks/useSignUpForm'

export default function SignUp() {
  const { buttonDisabled, handleInputChange, handleSubmit } = useSignUpForm()

  return (
    <AuthContainer>
      <Welcome.Container backLink>
        <Welcome.Title>
          Seu progresso começa com um simples clique!
        </Welcome.Title>

        <Welcome.Description>
          Junte-se a nós hoje e dê o primeiro passo para alcançar seus objetivos
          de bem-estar e condicionamento físico.
        </Welcome.Description>
      </Welcome.Container>

      <Form.Container title="Criar conta">
        <Form.Content onSubmit={handleSubmit}>
          <Form.Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <Form.Input
            name="name"
            type="text"
            placeholder="Nome"
            autoComplete="name"
            onChange={handleInputChange}
          />

          <Form.Input
            name="password"
            type="password"
            placeholder="Senha"
            autoComplete="new-password"
            onChange={handleInputChange}
          />

          <Form.Input
            name="verifyPassword"
            type="password"
            placeholder="Confirmar senha"
            autoComplete="new-password"
            onChange={handleInputChange}
          />

          <SubmitButton>
            <Text size="lgSm" $textalign="center" $lineheight="110%">
              Ao se registrar, você aceita nossos{' '}
              <TextSpan $hoverUnderline>termos de uso</TextSpan> e a nossa
              <TextSpan $hoverUnderline> política de privacidade</TextSpan>.
            </Text>

            <Button type="submit" size="full" disabled={buttonDisabled}>
              Criar conta
            </Button>
          </SubmitButton>
        </Form.Content>
      </Form.Container>

      <Light color="grey-500" />
    </AuthContainer>
  )
}
