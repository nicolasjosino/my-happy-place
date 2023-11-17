import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import StackRoutes from './stack.routes';
import StackSearchRoutes from './stack.search.routes';
import User from '../components/User/User';
import ContentPicker from '../components/ContentPicker/ContentPicker';
import SearchContent from '../components/SearchContent/SearchContent';
import { Ionicons } from '@expo/vector-icons'
import { themes } from '../theme/themes';


const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: themes.accent,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#171626',
          borderTopWidth: 0,

        }
      }}
    >
      <Tab.Screen
        name="User"
        component={StackRoutes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />
            }

            return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="SearchContent"
        component={StackSearchRoutes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />
            }

            return <Ionicons name="search-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="ContentPicker"
        component={ContentPicker}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="tv" size={size} color={color} />
            }

            return <Ionicons name="tv-outline" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default TabRoutes;