import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Pressable, ScrollView, Text, View } from "react-native";
import { List } from 'react-native-paper';
import { themes } from "../../theme/themes";
import ContentRow from "../ContentRow/ContentRow";
import Favorite from "../Favorite/Favorite";
import Season from '../Season/Season';
import { styles } from "./styles";

export default function ContentDetails() {

  const api = 'http://192.168.0.8:8080';
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({});
  const [seasons, setSeasons] = useState([]);
  const [currentSeason, setCurrentSeason] = useState({});
  const [providers, setProviders] = useState([]);
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

  const handlePress = () => setExpanded(!expanded);
  const handleSeasonPress = (index) => {
    setExpanded(!expanded);
    setCurrentSeason(seasons[index]);
  };

  async function fetchData() {
    const pathParam = media.mediaType == 'movie' ? 'movies' : 'series';
    const fetches = [
      fetch(`${api}/${pathParam}/${media.idTMDB}?idUser=1`)
        .then(response => response.json())
        .then(data => setContent(data)),

      media.mediaType === 'tv' &&
      fetch(`${api}/series/${media.idTMDB}/seasons?idUser=1`)
        .then(response => response.json())
        .then(data => {
          setSeasons(data)
          setCurrentSeason(data[0])
        }),

      fetch(`${api}/${pathParam}/${media.idTMDB}/recommendations?idUser=1&page=1`)
        .then(response => response.json())
        .then(data => setSimilar(data)),

      fetch(`${api}/${pathParam}/${media.idTMDB}/watchproviders`)
        .then(response => response.json())
        .then(data => setProviders(data.results?.BR?.flatrate))
    ]
    await Promise.all(fetches);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={styles.poster} src={`https://image.tmdb.org/t/p/original${content.backdropPath}`} />
          <View style={{ marginHorizontal: 15 }}>
            <Text style={[styles.title, styles.text]}>{content.name}</Text>

            <View style={styles.details}>
              <Text style={[styles.detailsText, styles.text]}>{content?.releaseDate.substring(0, 4)}</Text>
              {media.mediaType == 'movie' &&
                <Text style={[styles.detailsText, styles.text]}>{getRuntime(content.runtime)}</Text>}
              <Favorite
                isFavorite={content?.isFavorite}
                idTMDB={media.idTMDB}
                mediaType={media.mediaType}
              />
            </View>

            {media.mediaType == 'tv' &&
              <Pressable
                style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
              >
                <Text style={styles.buttonText}>Escolher Episódio</Text>
              </Pressable>
            }

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sinopse:</Text>
              <Text style={[styles.overview, styles.text]}>{content.overview}</Text>
            </View>

            {media.mediaType == 'tv' &&
              <View style={styles.section}>
                <List.Accordion
                  theme={{ colors: { background: themes.softBackground } }}
                  titleStyle={styles.accordionTitle}
                  title="Temporadas"
                  expanded={expanded}
                  onPress={handlePress}
                  left={props => <List.Icon {...props} color={themes.accent} icon="television" />}
                >
                  {seasons?.map((season, index) => {
                    return (
                      <List.Item
                        key={index}
                        title={`Temporada ${index + 1}`}
                        titleStyle={styles.text}
                        onPress={(pressed) => {pressed && handleSeasonPress(index)}}
                      />
                    )
                  })}
                </List.Accordion>
                <Season season={currentSeason} />
              </View>
            }

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Disponível em:</Text>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={providers}
                renderItem={({ item }) => {
                  return (
                    <Image
                      src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                      style={styles.providerLogo}
                    />
                  )
                }}
              />
            </View>

            <ContentRow
              rowName="Similares"
              fontSize={20}
              data={similar}
              details={handleOpenDetails}
            />
          </View>
        </ScrollView>
      )}
    </View>
  )
}