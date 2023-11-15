import { Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";

export default function ContentPicker() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>O que você deseja assistir hoje?</Text>
      <View style={styles.buttonGroup}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        >
          <Text style={styles.text}>Filmes</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        >
          <Text style={styles.text}>Séries</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
        >
          <Text style={styles.text}>Todos</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}