import { StyleSheet, View } from 'react-native';

import { themes } from './src/theme/themes';
import ContentDetails from './src/components/ContentDetails/ContentDetails';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import User from './src/components/User/User';
import Home from './src/components/Home/Home'
import SearchContent from './src/components/SearchContent/SearchContent';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ExpoStatusBar style='light' /> */}
      {/* <Home></Home> */}
      {/* <User
        name='Nícolas'
        style={{ marginTop: 10 }}
      /> */}
      {/* <ContentDetails mediaType='tv' idTMDB='1399'/> */}
      <SearchContent />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.background,
  }
});
