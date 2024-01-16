'use client'

import { Light } from '@/shared/components/light/Light'
import { AuthContainer } from '../AuthPage.style'
import { Welcome } from '../utils/welcome'
import { Form } from '@/shared/components/form'
import { Button } from '@/shared/components/button/Button'
import { SubmitButton } from '@/shared/components/form/Form.style'
import { Text } from '@/shared/components/text/Text'
import { TextSpan } from '@/shared/components/text/TextSpan'
import Link from 'next/link'
import { FormProvider } from 'react-hook-form'
import { useSignInForm } from '@/shared/hooks/useSignInForm'
import { ErroMessage } from '@/shared/components/form/ErrorMenssage'
import { Loading } from '../utils/loading/Loading'
import { Check } from 'lucide-react'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { ForgotPassword } from '@/shared/pages/forgot-password/ForgotPassword'

export default function SignIn() {
  const { methods, signIn, errorMessage, successMessage, loading } =
    useSignInForm()

  return (
    <AuthContainer>
      <Welcome.Container>
        <Welcome.Title>
          Seu progresso começa com um simples clique!
        </Welcome.Title>
      </Welcome.Container>

      <FormProvider {...methods}>
        <Form.Container title="Entrar">
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
              <ForgotPassword />
            </SpanContainer>

            {errorMessage && (
              <Text size="md" color="red-400">
                {errorMessage}
              </Text>
            )}

            <SubmitButton>
              <Button
                type="submit"
                size="full"
                color={successMessage ? 'green' : 'blue'}
                disabled={
                  !methods.formState.isValid ||
                  methods.formState.isSubmitting ||
                  successMessage ||
                  loading
                }
              >
                {loading ? <Loading /> : successMessage ? <Check /> : 'Entrar'}
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
