import Ionicons from '@expo/vector-icons/Ionicons';
import { Divider } from '@rneui/themed';
import { useState } from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function SearchContent() {
  const api = 'http://192.168.0.8:8080';
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, onChangeText] = useState('');


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
          onChangeText={onChangeText}
        />
        <Pressable onPress={(pressed) => getResults(searchText)}>
          <Ionicons name="search" size={20} style={styles.searchIcon} />
        </Pressable>
      </View>
      <FlatList 
        data={searchResults}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.resultItem}>
                <Image
                  style={styles.poster}
                  src={`https://image.tmdb.org/t/p/original${item.posterPath}`}
                />
                <Text
                  style={styles.title}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
              </View>
              <Divider color='white' style={styles.divider} />
            </View>
          )
        }}
      />
    </SafeAreaView>
  );
}