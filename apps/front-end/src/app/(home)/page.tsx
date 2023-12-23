import { Header } from './utils/header/Header'
import {
  HomePageContainer,
  IntroductionBG,
  IntroductionContainer,
  IntroductionContent,
  ReasonsCards,
  ReasonsContainer,
  TheTriadContainer,
} from './HomePage.style'
import { Light } from '@/shared/components/light/Light'
import Image from 'next/image'
import homePageLine from '@/shared/assets/imgs/home-page-line.png'
import { GymDayLogoBLueLarge } from '@/shared/assets/gym-day-logos/gym-day-logo-blue-large'
import { Text } from '@/shared/components/text/Text'
import { inter } from '@/shared/styles/theme/fonts'
import { Button } from '@/shared/components/button/Button'
import Link from 'next/link'
import { ArrowDownCircle } from 'lucide-react'
import { themeColors } from '@/shared/styles/theme/palette'
import { Card } from './utils/card/Card'
import { Reasons } from './utils/reasonsCard'
import {
  HandStrong,
  AppleGradiant,
  DumbbellGradiant,
  HandStrongGradiant,
  MeditationGradiant,
  MoleculeGradiant,
  ShirtGradiant,
} from '@/shared/assets/icons'
import { TheTriadCard } from './utils/theTriadCard/TheTriadCard'
import { Constancy, Discipline, Focus } from '@/shared/assets/svgs'

export default function Home() {
  return (
    <HomePageContainer>
      <Header />
      <IntroductionContainer>
        <IntroductionContent>
          <div className="presentation">
            <Text
              as="h2"
              color="grey-50"
              size="2xl"
              $weight="700"
              className={inter.className}
            >
              Bem vindo(a) a
            </Text>

            <GymDayLogoBLueLarge />

            <Text color="grey-50" size="md" $weight="500" $textalign="center">
              Seja você um iniciante ou um entusiasta fitness, o GymDay é o seu
              parceiro <br /> virtual para explorar um mundo de saúde,
              vitalidade e evolução constante.
            </Text>
            <br />
            <Text color="grey-50" size="md" $weight="500" $textalign="center">
              Crie sua conta agora para ficar por dentro de tudo!
            </Text>
          </div>

          <div className="presentation2">
            <Link href="/auth/registrar">
              <Button size="normal" className="createAccountButton">
                <Text size="xlSm">Criar conta</Text>

                <HandStrong />
              </Button>
            </Link>

            <div className="knowMore">
              <Text
                color="white"
                size="md"
                $weight="700"
                className={inter.className}
              >
                Saiba mais
              </Text>

              <ArrowDownCircle size={30} color={themeColors['grey-50']} />
            </div>
          </div>
        </IntroductionContent>

        <IntroductionBG>
          <Image src={homePageLine} className="lines" alt="" priority />
          <Light color="blue-300" $intensity="medium" />
        </IntroductionBG>
      </IntroductionContainer>

      <Card />

      <ReasonsContainer>
        <Text as="h2" size="2xl" $weight="800">
          Motivos para Escolher o GymDay
        </Text>

        <ReasonsCards>
          <Reasons.Card>
            <Reasons.Icon>
              <DumbbellGradiant />
            </Reasons.Icon>

            <Reasons.Title>Explore a Musculação</Reasons.Title>

            <Reasons.Description>
              Aproveite guias especializados, dicas de treinamento e planos
              personalizados para atingir seus objetivos de construção muscular
              de maneira eficaz e segura.
            </Reasons.Description>
          </Reasons.Card>

          <Reasons.Card>
            <Reasons.Icon>
              <HandStrongGradiant />
            </Reasons.Icon>

            <Reasons.Title>Domine a Calistenia</Reasons.Title>

            <Reasons.Description>
              Aprenda a dominar seu próprio peso corporal com rotinas
              desafiadoras, exercícios progressivos e orientações práticas para
              aumentar sua força e flexibilidade.
            </Reasons.Description>
          </Reasons.Card>

          <Reasons.Card>
            <Reasons.Icon>
              <MeditationGradiant />
            </Reasons.Icon>

            <Reasons.Title>Nutra seu Bem-Estar</Reasons.Title>

            <Reasons.Description>
              Encontre dicas para relaxamento, meditação e equilíbrio saudável
              entre corpo e mente, para que você possa se sentir bem no dia a
              dia.
            </Reasons.Description>
          </Reasons.Card>

          <Reasons.Card>
            <Reasons.Icon>
              <AppleGradiant />
            </Reasons.Icon>

            <Reasons.Title>Aprimore sua Dieta</Reasons.Title>

            <Reasons.Description>
              Obtenha orientações sobre nutrição adequada, planos de refeições
              equilibrados e estratégias para alcançar seus objetivos
              alimentares, seja ganhar massa muscular ou perder peso.
            </Reasons.Description>
          </Reasons.Card>

          <Reasons.Card>
            <Reasons.Icon>
              <MoleculeGradiant />
            </Reasons.Icon>

            <Reasons.Title>Suplementos</Reasons.Title>

            <Reasons.Description>
              Explore informações sobre diferentes suplementos, seus benefícios
              e como eles podem complementar seu regime de treinamento e dieta
              de maneira informada e segura.
            </Reasons.Description>
          </Reasons.Card>

          <Reasons.Card>
            <Reasons.Icon>
              <ShirtGradiant />
            </Reasons.Icon>

            <Reasons.Title>Vestuário</Reasons.Title>

            <Reasons.Description>
              Explore uma variedade de roupas e equipamentos adequados para
              otimizar seu desempenho nos treinos, garantindo conforto, estilo e
              funcionalidade.
            </Reasons.Description>
          </Reasons.Card>
        </ReasonsCards>
      </ReasonsContainer>

      <TheTriadContainer>
        <div className="introduction">
          <Text as="h2" size="2xl">
            A Tríade da Realização
          </Text>

          <Text $weight="500" size="lg" $textalign="center">
            No caminho para alcançar seus objetivos, o Foco é sua bússola, a
            Disciplina é sua força e a Constância é seu combustível.
          </Text>
        </div>

        <div className="TheTriadCards">
          <TheTriadCard title="Foco">
            <Focus />
          </TheTriadCard>

          <TheTriadCard title="Disciplina">
            <Discipline />
          </TheTriadCard>

          <TheTriadCard title="Constância">
            <Constancy />
          </TheTriadCard>
        </div>
      </TheTriadContainer>
    </HomePageContainer>
  )
}
