import { FlatList, Text, View, TouchableOpacity } from "react-native";
import ContentCard from '../ContentCard/ContentCard';
import { styles } from "./styles";

export default function ContentRow(props) {
  return (
    
      <View style={styles.contentRow}>
        <Text style={[styles.title, {fontSize: props.fontSize}]}>{props.rowName}:</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={props.data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => props.details(item)}
              >
                <ContentCard
                  idTMDB={item.idTMDB}
                  posterPath={`https://image.tmdb.org/t/p/original${item.posterPath}`}
                  name={item.name}
                  mediaType={item.mediaType}
                  releaseDate={item.releaseDate}
                  isFavorite={item.isFavorite}
                />
              </TouchableOpacity>
            )
          }}
        />
      </View>
  )
}