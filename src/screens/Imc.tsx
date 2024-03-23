import { VStack } from '@gluestack-ui/themed'
import { ScreenHeader } from '../components/ScreenHeader'

export function Imc() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Calcule seu IMC" />
    </VStack>
  )
}
