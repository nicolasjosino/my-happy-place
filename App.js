import { SafeAreaView, StyleSheet } from 'react-native';

import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import User from './src/components/User/User';
// import Home from './src/components/Home/Home'
import { themes } from './src/theme/themes';

export default function App() {
  const favorites = [
    {
      "overview": "Um homem deprimido que sofre de insônia conhece um estranho vendedor de sabonetes chamado Tyler Durden. Eles formam um clube clandestino com regras rígidas onde lutam com outros homens cansados de suas vidas mundanas. Mas sua parceria perfeita é comprometida quando Marla chama a atenção de Tyler.",
      "releaseYear": "1999",
      "idTMDB": 550,
      "name": "Clube da Luta",
      "runtime": 139,
      "mediaType": "movie",
      "posterPath": "/r3pPehX4ik8NLYPpbDRAh0YRtMb.jpg",
      "isFavorite": true
    },
    {
      "numberOfEpisodes": 73,
      "numberOfSeasons": 8,
      "overview": "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.",
      "releaseYear": "2011",
      "lastYear": "2019-05-19",
      "idTMDB": 1399,
      "name": "Game of Thrones",
      "mediaType": "tv",
      "posterPath": "/l2ezB41chGDjXcKo24lseuXYtKP.jpg",
      "isFavorite": true
    },
    {
      "overview": "Um homem deprimido que sofre de insônia conhece um estranho vendedor de sabonetes chamado Tyler Durden. Eles formam um clube clandestino com regras rígidas onde lutam com outros homens cansados de suas vidas mundanas. Mas sua parceria perfeita é comprometida quando Marla chama a atenção de Tyler.",
      "releaseYear": "1999",
      "idTMDB": 550,
      "name": "Clube da Luta",
      "runtime": 139,
      "mediaType": "movie",
      "posterPath": "/r3pPehX4ik8NLYPpbDRAh0YRtMb.jpg",
      "isFavorite": true
    },
    {
      "numberOfEpisodes": 73,
      "numberOfSeasons": 8,
      "overview": "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.",
      "releaseYear": "2011",
      "lastYear": "2019-05-19",
      "idTMDB": 1399,
      "name": "Game of Thrones",
      "mediaType": "tv",
      "posterPath": "/l2ezB41chGDjXcKo24lseuXYtKP.jpg",
      "isFavorite": true
    },
    {
      "overview": "Um homem deprimido que sofre de insônia conhece um estranho vendedor de sabonetes chamado Tyler Durden. Eles formam um clube clandestino com regras rígidas onde lutam com outros homens cansados de suas vidas mundanas. Mas sua parceria perfeita é comprometida quando Marla chama a atenção de Tyler.",
      "releaseYear": "1999",
      "idTMDB": 550,
      "name": "Clube da Luta",
      "runtime": 139,
      "mediaType": "movie",
      "posterPath": "/r3pPehX4ik8NLYPpbDRAh0YRtMb.jpg",
      "isFavorite": true
    },
    {
      "numberOfEpisodes": 73,
      "numberOfSeasons": 8,
      "overview": "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.",
      "releaseYear": "2011",
      "lastYear": "2019-05-19",
      "idTMDB": 1399,
      "name": "Game of Thrones",
      "mediaType": "tv",
      "posterPath": "/l2ezB41chGDjXcKo24lseuXYtKP.jpg",
      "isFavorite": true
    },
    {
      "overview": "Um homem deprimido que sofre de insônia conhece um estranho vendedor de sabonetes chamado Tyler Durden. Eles formam um clube clandestino com regras rígidas onde lutam com outros homens cansados de suas vidas mundanas. Mas sua parceria perfeita é comprometida quando Marla chama a atenção de Tyler.",
      "releaseYear": "1999",
      "idTMDB": 550,
      "name": "Clube da Luta",
      "runtime": 139,
      "mediaType": "movie",
      "posterPath": "/r3pPehX4ik8NLYPpbDRAh0YRtMb.jpg",
      "isFavorite": true
    },
    {
      "numberOfEpisodes": 73,
      "numberOfSeasons": 8,
      "overview": "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.",
      "releaseYear": "2011",
      "lastYear": "2019-05-19",
      "idTMDB": 1399,
      "name": "Game of Thrones",
      "mediaType": "tv",
      "posterPath": "/l2ezB41chGDjXcKo24lseuXYtKP.jpg",
      "isFavorite": true
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style='light' />
      <User name='Nícolas' favorites={favorites} style={{ marginTop: 10 }}></User>
      {/* <Home></Home> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.background
  }
});
