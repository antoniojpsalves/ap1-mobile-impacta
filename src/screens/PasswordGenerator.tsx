import { Text, VStack } from '@gluestack-ui/themed'
import { ScreenHeader } from '../components/ScreenHeader'

export function PasswordGen() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Gerador de senhas" />
      <VStack>
        <Text color="$blueGray100">
          Aperte no botão a baixo para gerar uma senha:
        </Text>
      </VStack>
    </VStack>
  )
}
