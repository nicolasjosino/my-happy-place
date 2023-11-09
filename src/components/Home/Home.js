import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Pressable, Text, View, StyleSheet } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <ImageBackground
      source={require('../../assets/background-tv.jpg')}
      blurRadius={13}
      style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={{ width: 188, height: 188 }}
        source={require('../../assets/Logo_MHP.png')}
      />
      <Text style={styles.title}>My Happy Place</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
      >
        <Text style={styles.text}>Começar</Text>
      </Pressable>
    </ImageBackground>
  )
}