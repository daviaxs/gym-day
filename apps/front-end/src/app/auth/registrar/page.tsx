'use client'

import { AuthContainer } from '../AuthPage.style'
import { Light } from '@/shared/components/light/Light'
import { Welcome } from '../utils/welcome'
import { Form } from '../utils/form'
import { Button } from '@/shared/components/button/Button'
import { Text } from '@/shared/components/text/Text'
import { TextSpan } from '@/shared/components/text/TextSpan'
import { SpanContainer, SubmitButton } from '../utils/form/Form.style'
import { useSignUpForm } from '@/shared/hooks/useSignUpForm'
import { FormProvider } from 'react-hook-form'
import { ErroMessage } from '../utils/form/ErrorMenssage'
import ReCAPTCHA from 'react-google-recaptcha'
import { Check } from 'lucide-react'
import { Loading } from '../utils/loading/Loading'

export default function SignUp() {
  const {
    createUSer,
    methods,
    onCaptchaChange,
    errorMessage,
    successCreateUser,
    loading,
  } = useSignUpForm()

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

      <FormProvider {...methods}>
        <Form.Container title="Criar conta">
          <Form.Content onSubmit={methods.handleSubmit(createUSer)}>
            <SpanContainer>
              <Form.Input
                type="email"
                placeholder="Email"
                register={methods.register('email')}
              />
              <ErroMessage name="email" />
            </SpanContainer>

            <SpanContainer>
              <Form.Input
                type="text"
                placeholder="Nome"
                autoComplete="name"
                register={methods.register('name')}
              />
              <ErroMessage name="name" />
            </SpanContainer>

            <SpanContainer>
              <Form.Input
                type="password"
                placeholder="Senha"
                autoComplete="new-password"
                register={methods.register('password')}
              />
              <ErroMessage name="password" />
            </SpanContainer>

            <SpanContainer>
              <Form.Input
                type="password"
                placeholder="Confirmar senha"
                autoComplete="new-password"
                register={methods.register('verifyPassword')}
              />
              <ErroMessage name="verifyPassword" />
            </SpanContainer>

            <SpanContainer $align="center">
              <ReCAPTCHA
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={onCaptchaChange}
                theme="dark"
              />
              <ErroMessage name="captcha" />
            </SpanContainer>

            {errorMessage && (
              <Text size="md" color="red-400">
                {errorMessage}
              </Text>
            )}

            <SubmitButton>
              <Text size="lgSm" $textalign="center" $lineheight="110%">
                Ao se registrar, você aceita nossos{' '}
                <TextSpan $hoverUnderline>termos de uso</TextSpan> e a nossa
                <TextSpan $hoverUnderline> política de privacidade</TextSpan>.
              </Text>

              <Button
                type="submit"
                size="full"
                color={successCreateUser ? 'green' : 'blue'}
                disabled={
                  !methods.formState.isValid ||
                  methods.formState.isSubmitting ||
                  successCreateUser ||
                  loading
                }
              >
                {loading ? (
                  <Loading />
                ) : successCreateUser ? (
                  <Check />
                ) : (
                  'Criar conta'
                )}
              </Button>
            </SubmitButton>
          </Form.Content>
        </Form.Container>
      </FormProvider>

      <Light color="grey-500" />
    </AuthContainer>
  )
}
