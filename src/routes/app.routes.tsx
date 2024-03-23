import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home'
import { PasswordGen } from '../screens/PasswordGenerator'
import { Imc } from '../screens/Imc'
import { Retirement } from '../screens/Retirement'
import { Group } from '../screens/Group'

import { SimpleLineIcons } from '@expo/vector-icons'
import { config } from '@gluestack-ui/config'

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
  const colors = config.tokens.colors

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary100,
        tabBarInactiveTintColor: colors.secondary300,
        tabBarActiveBackgroundColor: colors.indigo700,
        tabBarStyle: {
          backgroundColor: colors.secondary800,
          borderTopWidth: 0,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="passwordGen"
        component={PasswordGen}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="key" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="imc"
        component={Imc}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="heart" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="retirement"
        component={Retirement}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="plane" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="group"
        component={Group}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="people" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
