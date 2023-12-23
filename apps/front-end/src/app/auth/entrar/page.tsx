import { Light } from '@/shared/components/light/Light'
import { Form } from '../utils/form/Form'
import { AuthContainer } from '../AuthPage.style'
import { Welcome } from '../utils/welcome'

export default function SignIn() {
  return (
    <AuthContainer>
      <Welcome.Container>
        <Welcome.Title>
          Seu progresso começa com um simples clique!
        </Welcome.Title>
      </Welcome.Container>

      <Form title="Entrar" />

      <Light color="grey-500" />
    </AuthContainer>
  )
}
