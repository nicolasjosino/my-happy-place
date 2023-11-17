import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ContentDetails from '../components/ContentDetails/ContentDetails';
import SearchContent from '../components/SearchContent/SearchContent';

import { themes } from '../theme/themes';


const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
    >

      <Stack.Screen
        name="SearchStack"
        component={SearchContent}
        options={{
          gestureEnabled: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: null,
          headerTintColor: themes.accent,
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