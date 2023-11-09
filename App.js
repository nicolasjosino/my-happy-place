import { StyleSheet, View } from 'react-native';

import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import User from './src/components/User/User';
import Home from './src/components/Home/Home'
import ContentDetails from './src/components/ContentDetails/ContentDetails';
import { themes } from './src/theme/themes';
import { useEffect, useState } from 'react';

export default function App() {
  const api = 'http://192.168.0.8:8080';

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
  }, []);


  return (
    <View style={styles.container}>
      {/* <ExpoStatusBar style='light' /> */}
      {/* <Home></Home> */}
      <User
        name='Nícolas'
        favorites={favorites}
        trendingTv={trendingTv}
        trendingMovies={trendingMovies}
        style={{ marginTop: 10 }}
      />
      {/* <ContentDetails mediaType='movie' idTMDB='545611'/> */}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.background,
  }
});
