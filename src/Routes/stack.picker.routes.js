import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ContentDetails from '../components/ContentDetails/ContentDetails';
import ContentPicker from '../components/ContentPicker/ContentPicker';

import { themes } from '../theme/themes';


const Stack = createNativeStackNavigator();

function StackPickerRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
    >

      <Stack.Screen
        name="ContentPickerStack"
        component={ContentPicker}
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

export default StackPickerRoutes;