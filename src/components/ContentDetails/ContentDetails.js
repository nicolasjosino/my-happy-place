import { Image, ScrollView, Text, View } from "react-native";
import ContentRow from "../ContentRow/ContentRow";
import Favorite from "../Favorite/Favorite";
import { styles } from "./styles";

export default function ContentDetails(props) {

  function getRuntime(runtime) {
    const hours = Math.floor(runtime / 60);
    const mins = runtime % 60;
    return `${hours}h ${mins}m`;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image style={styles.poster} src={`https://image.tmdb.org/t/p/original${props.content.backdrop_path}`} />
      <View style={{ marginHorizontal: 15 }}>
        <Text style={[styles.title, styles.text]}>{props.content.name}</Text>
        <View style={styles.details}>
          <Text style={[styles.detailsText, styles.text]}>{props.content.releaseYear}</Text>
          <Text style={[styles.detailsText, styles.text]}>{getRuntime(props.content.runtime)}</Text>
          <Favorite isFavorite={props.content.isFavorite} />
        </View>
        <View>
          <Text style={[styles.sectionTitle, styles.text]}>Sinopse:</Text>
          <Text style={[styles.overview, styles.text]}>{props.content.overview}</Text>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.whereToWatch}
        >
          <Text style={[styles.sectionTitle, styles.text]}>Disponível em:</Text>
        </ScrollView>
        <ContentRow rowName="Similares" data={props.content.recommendations} />
      </View>
    </ScrollView>
  )
}