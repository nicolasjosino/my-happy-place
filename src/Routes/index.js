import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import TabRoutes from './tab.routes';

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <TabRoutes />
    </NavigationContainer>
  )
}

export default Routes;