import { VStack } from '@gluestack-ui/themed'

// import { config } from '@gluestack-ui/config'
import { ScreenHeader } from '../components/ScreenHeader'

export function Home() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Home" />
    </VStack>
  )
}
