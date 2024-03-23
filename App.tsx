/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { Routes } from './src/routes'

import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </GluestackUIProvider>
  )
}
