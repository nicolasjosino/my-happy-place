import { Image, ScrollView, Text, View } from "react-native";
import ContentRow from "../ContentRow/ContentRow";
import Favorite from "../Favorite/Favorite";
import { styles } from "./styles";
import { useEffect, useState } from "react";

export default function ContentDetails(props) {
  const api = 'http://192.168.0.8:8080';
  const [content, setContent] = useState({})

  function getContent(mediaType, idTMDB) {
    const pathParam = mediaType == 'movie' ? 'movies' : 'series';
    fetch(`${api}/${pathParam}/${idTMDB}?idUser=1`)
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    getContent(props.mediaType, props.idTMDB);
  }, [])

  function getRuntime(runtime) {
    const hours = Math.floor(runtime / 60);
    const mins = runtime % 60;
    return `${hours}h ${mins}m`;
  }

  //TODO: Avaliar necessidade dessa função ao corrigir renderização do componente
  function getReleaseYear(releaseDate) {
    if (releaseDate && typeof releaseDate === 'string') return releaseDate.substring(0, 4);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image style={styles.poster} source={`https://image.tmdb.org/t/p/original${content.backdropPath}`} />
      <View style={{ marginHorizontal: 15 }}>
        <Text style={[styles.title, styles.text]}>{content.name}</Text>
        <View style={styles.details}>
          <Text style={[styles.detailsText, styles.text]}>{getReleaseYear(content.releaseDate)}</Text>
          {props.mediaType == 'movie' &&
           <Text style={[styles.detailsText, styles.text]}>{getRuntime(content.runtime)}</Text>}
          <Favorite isFavorite={content.isFavorite} />
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
        <ContentRow rowName="Similares" data={content.recommendations} />
      </View>
    </ScrollView>
  )
}