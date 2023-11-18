import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Season(props) {
  const season = props.season;

  if (season) return (
    <View style={styles.container}>
      <Text style={styles.title}>Temporada {season?.episodes[0].seasonNumber}</Text>
      <FlatList
        data={season?.episodes}
        renderItem={({ item: episode }) => {
          return (
            <View style={styles.episodeContainer}>
              <Image
                src={`https://image.tmdb.org/t/p/original${episode.stillPath}`}
                resizeMode="stretch"
                style={styles.episodeImage}
              />
              <View style={styles.episodeDetails}>
                <Text style={styles.episodeName}>{episode.episodeNumber} - {episode.name}</Text>
                <Text style={styles.text}>{episode.overview}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}