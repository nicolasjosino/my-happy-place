import Ionicons from '@expo/vector-icons/Ionicons';
import { Divider } from '@rneui/themed';
import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SearchContent() {
  const api = 'http://192.168.0.11:8080';
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getResults(searchText);
  }, [searchText])

  const navigation = useNavigation();

  function handleOpenDetails(item) {
    navigation.navigate('ContentDetails', { item });
  }

  function getResults(search) {
    fetch(`${api}/all-types/multisearch/1?descricao='${search}'&page=1`)
      .then(response => response.json())
      .then(data => setSearchResults(data))
      .catch(error => console.error(error));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.input}
          placeholder="Busque por filmes e séries..."
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity style={styles.boxButtonSearch} onPress={(pressed) => getResults(searchText)}>
            <Ionicons name="search" size={20} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <FlatList 
        data={searchResults}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleOpenDetails(item)}>
              <View>
                <View style={styles.resultItem}>
                  <Image
                    style={styles.poster}
                    src={`https://image.tmdb.org/t/p/original${item.posterPath}`}
                  />
                  <View>
                    <Text
                      style={styles.title}
                      numberOfLines={1}
                    >
                      {item.name}
                    </Text>
                    <View style={styles.boxDescription}>
                    <Text
                      style={styles.description}
                      numberOfLines={25}
                    >
                      {item.overview}
                    </Text>
                    </View>
                  </View>
                </View>
                <Divider color='white' style={styles.divider} />
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  );
}