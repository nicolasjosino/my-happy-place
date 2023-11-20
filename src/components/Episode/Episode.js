import { Image, Modal, SafeAreaView, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";

export default function Episode(props) {
  const episode = props.episode;

  if (episode) return (
    <Modal
      animationType="slide"
      transparent
      visible={props.isVisible}
    >
      <SafeAreaView style={styles.container}>
        <Ionicons
          name="close-circle-outline"
          size={50}
          color={'white'}
          onPress={props.onClose}
          style={styles.closeButton}
        />

        <View style={styles.episodeContainer}>
          <Image
            src={`https://image.tmdb.org/t/p/original${episode.stillPath}`}
            resizeMode="stretch"
            style={styles.episodeImage}
          />

          <View style={styles.episodeDetails}>
            <Text style={styles.season}>Temporada {episode.seasonNumber}</Text>
            <Text
              style={styles.episodeName}
              numberOfLines={2}

            >
              {episode.episodeNumber} - {episode.name}
            </Text>
            <Text
              style={styles.text}
              numberOfLines={10}
            >
              {episode.overview}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </Modal >
  )
}