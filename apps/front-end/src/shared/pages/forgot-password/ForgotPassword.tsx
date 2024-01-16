import * as Dialog from '@radix-ui/react-dialog'
import {
  Content,
  ContentContainer,
  ContentForm,
  Overlay,
  Trigger,
} from './ForgotPassword.style'
import { Text } from '@/shared/components/text/Text'
import { GymDayLogoBLueLarge } from '@/shared/assets/gym-day-logos/gym-day-logo-blue-large'
import { Form } from '@/shared/components/form'
import { Button } from '@/shared/components/button/Button'
import { FormProvider } from 'react-hook-form'
import { useForgotPasswordForm } from '@/shared/hooks/useForgotPasswordForm'
import { SpanContainer } from '@/shared/components/spanContainer/SpanContainer.style'
import { ErroMessage } from '@/shared/components/form/ErrorMenssage'

export function ForgotPassword() {
  const { methods, sendEmail, successMessage, loading } =
    useForgotPasswordForm()

  return (
    <Dialog.Root>
      <Trigger>
        <Text size="lgSm" $weight="500" color="blue-400">
          Esqueci minha senha
        </Text>
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <GymDayLogoBLueLarge />

          <ContentContainer className="contentContainer">
            <div className="contentTexts">
              <Text size="2xl" $weight="800" color="grey-50">
                Esqueci minha senha
              </Text>
              <Text
                size="lg"
                $weight="500"
                color="grey-100"
                $textalign="center"
                $lineheight="110%"
              >
                Informe o e-mail associado à sua conta e enviaremos
                imediatamente um link para redefinir sua senha.
              </Text>
            </div>

            <FormProvider {...methods}>
              <ContentForm onSubmit={methods.handleSubmit(sendEmail)}>
                <SpanContainer>
                  <Form.Input
                    type="email"
                    placeholder="Email"
                    autoComplete="current-email"
                    register={methods.register('email')}
                  />
                  <ErroMessage name="email" />
                </SpanContainer>

                <Button
                  size="full"
                  type="submit"
                  disabled={
                    !methods.formState.isValid ||
                    methods.formState.isSubmitting ||
                    successMessage ||
                    loading
                  }
                >
                  Enviar
                </Button>
              </ContentForm>
            </FormProvider>
          </ContentContainer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
