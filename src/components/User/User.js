import { ActivityIndicator, SafeAreaView, ScrollView, Text, View } from "react-native";
import ContentRow from "../ContentRow/ContentRow";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { themes } from "../../theme/themes";

export default function User(props) {
  const api = 'http://192.168.0.8:8080';

  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  function getFavorites() {
    fetch(`${api}/users/1/findFavorites`)
      .then(response => response.json())
      .then(data => setFavorites(data))
      .catch(error => console.error(error));
  }

  function getTrendingTv() {
    fetch(`${api}/all-types/trendingseries/1?timeWindow=week&page=1`)
      .then(response => response.json())
      .then(data => setTrendingTv(data))
      .catch(error => console.error(error));
  }

  function getTrendingMovies() {
    fetch(`${api}/movies/popular?idUser=1&page=1`)
      .then(response => response.json())
      .then(data => setTrendingMovies(data))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    getFavorites();
    getTrendingTv();
    getTrendingMovies();
    setLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          color={themes.accent}
          size={"large"}
          style={styles.spinner}
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.welcome}>Olá, {props.name}!</Text>
          </View>
          <ContentRow 
            rowName='Seus Favoritos' 
            data={favorites} 
            getFavorites={getFavorites}
          />
          <ContentRow 
            rowName='Filmes em Alta' 
            data={trendingMovies}
            getFavorites={getFavorites}
          />
          <ContentRow 
            rowName='Séries em Alta'
            data={trendingTv} 
            getFavorites={getFavorites}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  )
}