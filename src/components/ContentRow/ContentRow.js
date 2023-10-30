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
              posterPath={`https://image.tmdb.org/t/p/w220_and_h330_face${item.posterPath}`}
              name={item.name}
              releaseYear={item.releaseYear}
              isFavorite={item.isFavorite}
            />
          )
        }}
      />
    </View>
  )
}