import { LinearGradient } from "expo-linear-gradient";
import { useContext, useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { FavoritesContext } from "../../FavoritesContext";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import background from '../../assets/background-tv.jpg';

export default function ContentPicker() {
  const { favorites } = useContext(FavoritesContext);

  function pickContent(mediaType) {
    let range = favorites

    if (mediaType !== 'all') {
      range = favorites.filter((item) => item.mediaType === mediaType);
    }

    const chosenContent = (range[Math.floor(Math.random() * range.length)]);
    handleOpenDetails({ idTMDB: chosenContent.idTMDB, mediaType: chosenContent.mediaType });
  }

  const navigation = useNavigation();

  function handleOpenDetails(item) {
    navigation.navigate('ContentDetails', { item });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        blurRadius={13}
        style={styles.background}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'transparent']}
        >
          <Text style={styles.header}>O que você deseja assistir hoje?</Text>
          <View style={styles.buttonGroup}>
            <Pressable
              style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
              onPress={(pressed) => pickContent('movie')}
            >
              <Text style={styles.text}>Filmes</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
              onPress={(pressed) => pickContent('tv')}
            >
              <Text style={styles.text}>Séries</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
              onPress={(pressed) => pickContent('all')}
            >
              <Text style={styles.text}>Todos</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}