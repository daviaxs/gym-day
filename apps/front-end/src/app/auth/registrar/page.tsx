import { AuthContainer } from '../AuthPage.style'
import { Form } from '../utils/form/Form'
import { Light } from '@/shared/components/light/Light'
import { Welcome } from '../utils/welcome'

export default function SignUp() {
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

      <Form title="Criar conta" />

      <Light color="grey-500" />
    </AuthContainer>
  )
}
