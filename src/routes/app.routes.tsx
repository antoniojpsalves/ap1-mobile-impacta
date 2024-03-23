import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home'
import { PasswordGen } from '../screens/PasswordGenerator'
import { Imc } from '../screens/Imc'
import { Retirement } from '../screens/Retirement'
import { Group } from '../screens/Group'

type AppRoutes = {
  home: undefined
  passwordGen: undefined
  imc: undefined
  retirement: undefined
  group: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="passwordGen" component={PasswordGen} />
      <Screen name="imc" component={Imc} />
      <Screen name="retirement" component={Retirement} />
      <Screen name="group" component={Group} />
    </Navigator>
  )
}
