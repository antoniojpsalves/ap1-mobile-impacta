import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed'

interface ComponentGroupCard {
  nome: string
  matricula: string
  imgSrc: string
}

export function ComponentGroupCard({
  nome,
  matricula,
  imgSrc,
}: ComponentGroupCard) {
  return (
    <HStack space="md">
      <Avatar>
        <AvatarFallbackText>{nome}</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: imgSrc,
          }}
          alt="foto do aluno"
        />
      </Avatar>
      <VStack>
        <Heading size="sm" color="$textDark400">
          {nome}
        </Heading>
        <Text size="sm">Matrícula: {matricula}</Text>
      </VStack>
    </HStack>
  )
}
