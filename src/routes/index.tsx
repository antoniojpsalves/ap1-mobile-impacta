import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AppRoutes } from './app.routes'

import { config } from '@gluestack-ui/config'

export function Routes() {
  const theme = DefaultTheme
  theme.colors.background = config.tokens.colors.secondary900

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  )
}
