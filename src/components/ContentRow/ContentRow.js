import { FlatList, Text, View } from "react-native";
import ContentCard from '../ContentCard/ContentCard';
import { styles } from "./styles";

export default function ContentRow(props) {
  return (
    <View style={styles.contentRow}>
      <Text style={styles.title}>{props.rowName}:</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={({ item }) => {
          return (
            <ContentCard
              idTMDB={item.idTMDB}
              posterPath={`https://image.tmdb.org/t/p/original${item.posterPath}`}
              name={item.name}
              mediaType={item.mediaType}
              releaseDate={item.releaseDate}
              isFavorite={item.isFavorite}
              getFavorites={props.getFavorites}
            />
          )
        }}
      />
    </View>
  )
}