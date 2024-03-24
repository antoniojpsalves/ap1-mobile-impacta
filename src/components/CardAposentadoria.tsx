import { VStack, Text } from '@gluestack-ui/themed'

interface CardAposentadoriaProps {
  anoQueSeAposentariaPorIdade: number
  anoQueSeaposentadoriaPorContr: number
  quantoFaltaContribuir: number
  gender: string
}

export function CardAposentadoria({
  anoQueSeAposentariaPorIdade,
  anoQueSeaposentadoriaPorContr,
  quantoFaltaContribuir,
  gender,
}: CardAposentadoriaProps) {
  console.log(gender)

  return (
    <VStack
      bg={gender === 'man' ? '$blue300' : '$rose300'}
      paddingHorizontal={10}
      paddingVertical={20}
      rounded="$md"
    >
      <Text fontSize="$sm" mb={3}>
        🎂 No ano de: {anoQueSeAposentariaPorIdade}, se aposentaria por idade.
      </Text>
      <Text fontSize="$sm" mb={3}>
        💼 No ano de: {anoQueSeaposentadoriaPorContr}, se aposentaria por
        contribuição.
      </Text>
      <Text fontSize="$sm" mb={3}>
        😳 Faltam {quantoFaltaContribuir} anos para contribuir.
      </Text>
    </VStack>
  )
}
