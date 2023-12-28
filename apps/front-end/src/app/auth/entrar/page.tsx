'use client'

import { Light } from '@/shared/components/light/Light'
import { AuthContainer } from '../AuthPage.style'
import { Welcome } from '../utils/welcome'
import { Form } from '../utils/form'
import { Button } from '@/shared/components/button/Button'
import { SpanContainer, SubmitButton } from '../utils/form/Form.style'
import { Text } from '@/shared/components/text/Text'
import { TextSpan } from '@/shared/components/text/TextSpan'
import Link from 'next/link'
import { FormProvider } from 'react-hook-form'
import { useSignInForm } from '@/shared/hooks/useSignInForm'
import { ErroMessage } from '../utils/form/ErrorMenssage'

export default function SignIn() {
  const { methods, signIn } = useSignInForm()

  return (
    <AuthContainer>
      <Welcome.Container>
        <Welcome.Title>
          Seu progresso começa com um simples clique!
        </Welcome.Title>
      </Welcome.Container>

      <FormProvider {...methods}>
        <Form.Container title="Criar conta">
          <Form.Content onSubmit={methods.handleSubmit(signIn)}>
            <SpanContainer>
              <Form.Input
                type="email"
                placeholder="Email"
                autoComplete="current-email"
                register={methods.register('email')}
              />
              <ErroMessage name="email" />
            </SpanContainer>

            <SpanContainer className="passwordSpanContainer">
              <Form.Input
                type="password"
                placeholder="Senha"
                autoComplete="current-password"
                register={methods.register('password')}
              />
              <ErroMessage name="password" />
              <TextSpan color="blue-400">Esqueci minha senha</TextSpan>
            </SpanContainer>

            <SubmitButton>
              <Button
                type="submit"
                size="full"
                disabled={
                  !methods.formState.isValid || methods.formState.isSubmitting
                }
              >
                Entrar
              </Button>

              <Text size="lgSm" $textalign="center" $lineheight="110%">
                Não tem uma conta?{' '}
                <Link href="/auth/registrar">
                  <TextSpan $hoverUnderline>Registre-se</TextSpan>
                </Link>
              </Text>
            </SubmitButton>
          </Form.Content>
        </Form.Container>
      </FormProvider>

      <Light color="grey-500" />
    </AuthContainer>
  )
}
