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
import { useForm } from 'react-hook-form'
import { createUserData, signUpSchema } from '@/shared/schemas/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export default function SignUp() {
  const { createUSer } = useSignUpForm()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm<createUserData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  })

  console.log(errors)

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
        <Form.Content onSubmit={handleSubmit(createUSer)}>
          <Form.Input
            type="email"
            placeholder="Email"
            register={register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <Form.Input
            type="text"
            placeholder="Nome"
            autoComplete="name"
            register={register('name')}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <Form.Input
            type="password"
            placeholder="Senha"
            autoComplete="new-password"
            register={register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <Form.Input
            type="password"
            placeholder="Confirmar senha"
            autoComplete="new-password"
            register={register('verifyPassword')}
          />
          {errors.verifyPassword && (
            <span>{errors.verifyPassword.message}</span>
          )}

          <SubmitButton>
            <Text size="lgSm" $textalign="center" $lineheight="110%">
              Ao se registrar, você aceita nossos{' '}
              <TextSpan $hoverUnderline>termos de uso</TextSpan> e a nossa
              <TextSpan $hoverUnderline> política de privacidade</TextSpan>.
            </Text>

            <Button type="submit" size="full" disabled={!isValid}>
              Criar conta
            </Button>
          </SubmitButton>
        </Form.Content>
      </Form.Container>

      <Light color="grey-500" />
    </AuthContainer>
  )
}
