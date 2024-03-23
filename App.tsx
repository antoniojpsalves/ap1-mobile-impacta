import { StatusBar } from 'react-native'
import { Routes } from './src/routes'

import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config' // Optional if you want to use default theme

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </GluestackUIProvider>
  )
}
