import { Text } from '@/shared/components/text/Text'
import { UserFisrtName } from './utils/UserFirstName'
import { inter } from '@/shared/styles/theme/fonts'
import { HomeStyle } from './Home.style'

export default function Home() {
  return (
    <HomeStyle>
      <Text className={`${inter.className}`} size="3xl" $weight="800">
        Olá, <UserFisrtName />
      </Text>
    </HomeStyle>
  )
}
