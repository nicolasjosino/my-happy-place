import { SafeAreaView, StyleSheet, View } from 'react-native';

import ContentCard from './src/components/ContentCard/ContentCard';
import Home from './src/components/Home/Home';

export default function App() {
  return (
    // <Home></Home>
    <SafeAreaView style={styles.container}>
      <ContentCard
        imagePath='https://www.themoviedb.org/t/p/w220_and_h330_face/2ziF8Q7zpT5YJYd2hNnYaYHrxfN.jpg'
        title='Fale Comigo'
        releaseYear='2023'
        isFavorite={false}
        styles={styles.container}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginVertical: '50%',
    backgroundColor: 'black'
  },
  contentCard: {
    
  }
});
