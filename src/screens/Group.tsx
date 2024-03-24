import { Center, Heading, VStack } from '@gluestack-ui/themed'
import { ScreenHeader } from '../components/ScreenHeader'
import { ComponentGroupCard } from '../components/ComponentGroupCard'
import { ClassInfo } from '../components/ClassInfo'

export function Group() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Grupo" />
      <Center>
        <Heading color="$white" mt={10}>
          Integrantes do grupo
        </Heading>
      </Center>
      <VStack
        space="2xl"
        paddingHorizontal={20}
        mt={15}
        justifyContent="center"
      >
        <ComponentGroupCard
          nome="Antônio Alves"
          matricula="1701557"
          imgSrc="https://storage.prompt-hunt.workers.dev/clhs4uvra000fjr0802x39dnx_1"
          key="1"
        />
        <ComponentGroupCard
          nome="Danilo Henrique"
          matricula="2301921"
          imgSrc="https://images-ext-1.discordapp.net/external/KmRC1N8D938kAFspZvShrxXdTMaoWBp1yrPYHF0KdYw/%3Fq%3Dtbn%3AANd9GcTgkfDYliDU9HRbhXIvMThKD1sR4TCw3sqfHQ%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images?format=webp&width=375&height=210"
          key="2"
        />
        <ComponentGroupCard
          nome="Thiago Reis"
          matricula="2300657"
          imgSrc="https://pbs.twimg.com/profile_images/1711708027395416064/tJga2pos_400x400.jpg"
          key="3"
        />
        <ComponentGroupCard
          nome="Walter Vitor Filho"
          matricula="2300567"
          imgSrc="https://media.discordapp.net/attachments/1203279555448541185/1221530839196631050/vitornerd.png?ex=6612ea3f&is=6600753f&hm=85767abaccfed895d8e4c164ae3c5a2e5eb8071332a1b0e904b9d8646f28e9b0&=&format=webp&quality=lossless&width=320&height=320"
          key="4"
        />
      </VStack>
      <VStack flex={1} alignItems="center" justifyContent="flex-end" w="$full">
        <ClassInfo />
      </VStack>
    </VStack>
  )
}
