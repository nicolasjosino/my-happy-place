import { SafeAreaView, ScrollView, Text, View } from "react-native";
import ContentRow from "../ContentRow/ContentRow";
import { styles } from "./styles";

export default function User(props) {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.welcome}>Olá, {props.name}!</Text>
        </View>
        <ContentRow rowName='Seus Favoritos' data={props.favorites} />
        <ContentRow rowName='Filmes em Alta' data={props.trendingMovies} />
        <ContentRow rowName='Séries em Alta' data={props.trendingTv} />
      </ScrollView>
    </SafeAreaView>
  )
}