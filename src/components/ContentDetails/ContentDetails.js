import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import ContentRow from "../ContentRow/ContentRow";
import Favorite from "../Favorite/Favorite";
import { styles } from "./styles";
import { themes } from "../../theme/themes";
import { Pressable } from "react-native";

export default function ContentDetails(props) {
  
  const api = 'http://192.168.1.8:8080';
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({});
  const [similar, setSimilar] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();
  const media = route.params.item;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleOpenDetails(item) {
    navigation.push('ContentDetails', { item });
  }


  function getContent(mediaType, idTMDB) {
    const pathParam = mediaType == 'movie' ? 'movies' : 'series';
    fetch(`${api}/${pathParam}/${idTMDB}?idUser=1`)
      .then(response => response.json())
      .then(data => {
        setContent(data);
        getSimilar(mediaType, idTMDB);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }

  function getSimilar(mediaType, idTMDB) {
    const pathParam = mediaType == 'movie' ? 'movies' : 'series';
    fetch(`${api}/${pathParam}/${idTMDB}/recommendations?idUser=1&page=1`)
      .then(response => response.json())
      .then(data => setSimilar(data))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    getContent(media.mediaType, media.idTMDB);
  }, [media])

  function getRuntime(runtime) {
    const hours = Math.floor(runtime / 60);
    const mins = runtime % 60;
    return `${hours}h ${mins}m`;
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          color={themes.accent}
          size={"large"}
          style={styles.spinner}
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} >
          <Image style={styles.poster} src={`https://image.tmdb.org/t/p/original${content.backdropPath}`} />
          <View style={{ marginHorizontal: 15 }}>
            <Text style={[styles.title, styles.text]}>{content.name}</Text>
            <View style={styles.details}>
              <Text style={[styles.detailsText, styles.text]}>{content?.releaseDate.substring(0, 4)}</Text>
              {media.mediaType == 'movie' &&
                <Text style={[styles.detailsText, styles.text]}>{getRuntime(content.runtime)}</Text>}
              {media.mediaType == 'tv' &&
                <Pressable
                  style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
                >
                  <Text style={styles.buttonText}>Escolher Episódio</Text>
                </Pressable>
              }
              <Favorite isFavorite={content?.isFavorite} />
            </View>
            <View>
              <Text style={[styles.sectionTitle, styles.text]}>Sinopse:</Text>
              <Text style={[styles.overview, styles.text]}>{content.overview}</Text>
            </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.whereToWatch}
            >
              <Text style={[styles.sectionTitle, styles.text]}>Disponível em:</Text>
            </ScrollView>
            <ContentRow rowName="Similares" data={similar} details={handleOpenDetails} />
          </View>
        </ScrollView>
      )}
    </View>
  )
}