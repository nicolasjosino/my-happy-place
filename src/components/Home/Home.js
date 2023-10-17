import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Pressable, Text, View, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <ImageBackground
      source={require('../../assets/background-tv.jpg')}
      blurRadius={13}
      style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.titleView}>
        <Image style={{ width: 188, height: 188 }} source={require('../../assets/Logo_MHP.png')}></Image>
        <Text style={styles.title}>My Happy Place</Text>
        <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}>
          <Text style={styles.text}>Começar</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '35%'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#BF246D',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});