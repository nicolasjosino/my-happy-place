import { ScrollView, Text, View } from "react-native";
import ContentRow from "../ContentRow/ContentRow";
import { styles } from "./styles";

export default function User(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.welcome}>Olá, {props.name}!</Text>
      </View>
      <ContentRow rowName='Seus Favoritos' data={props.favorites}></ContentRow>
      <ContentRow rowName='Em Alta' data={props.favorites}></ContentRow>

    </ScrollView>
  )
}