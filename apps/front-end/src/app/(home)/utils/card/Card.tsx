import { Text } from '@/shared/components/text/Text'
import { CardItem, CardItems, CardStyle, Separator } from './Card.style'
import Image from 'next/image'
import DumbbelImg from '@/shared/assets/imgs/dumbbell-cartoon.png'
import ManMeditatingImg from '@/shared/assets/imgs/man-meditating.png'
import WomanDoingCalisthenicsImg from '@/shared/assets/imgs/woman-doing-calisthenics.png'

export function Card() {
  return (
    <CardStyle>
      <Text
        as="h4"
        $textalign="center"
        size="xl"
        $weight="800"
        $lineheight="120%"
      >
        Além dos Limites <br />
        Os Alicerces do GymDay
      </Text>

      <CardItems>
        <CardItem>
          <Image src={DumbbelImg} alt="" className="image" />

          <Text $textalign="center" size="xl" $weight="800">
            Musculação
          </Text>
        </CardItem>

        <Separator />

        <CardItem>
          <Image src={WomanDoingCalisthenicsImg} alt="" className="image" />

          <Text $textalign="center" size="xl" $weight="800">
            Calistenia
          </Text>
        </CardItem>

        <Separator />

        <CardItem>
          <Image src={ManMeditatingImg} alt="" className="image" />

          <Text $textalign="center" size="xl" $weight="800">
            Bem-estar
          </Text>
        </CardItem>
      </CardItems>
    </CardStyle>
  )
}
