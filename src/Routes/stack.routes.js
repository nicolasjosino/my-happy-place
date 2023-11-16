import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UserStack from '../components/User/User';
import ContentDetails from '../components/ContentDetails/ContentDetails';
import { themes } from '../theme/themes';


const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="UserStack"
        component={UserStack}
        options={{
          gestureEnabled: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: null,
        }}
      />

    <Stack.Screen
        name="ContentDetails"
        component={ContentDetails}
        options={{
          gestureEnabled: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: null,
          headerTintColor: themes.accent,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes;