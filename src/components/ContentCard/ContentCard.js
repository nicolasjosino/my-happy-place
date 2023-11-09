import { Image, Text, View } from 'react-native';
import Favorite from '../Favorite/Favorite';
import { styles } from "./styles";

export default function ContentCard(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        source={props.posterPath}
      >
      </Image>
      <View style={styles.details}>
        <View style={styles.contentView}>
          <Text numberOfLines={1} style={styles.title}>{props.name}</Text>
          <Text style={styles.releaseYear}>{props.releaseDate}</Text>
        </View>
        <Favorite isFavorite={props.isFavorite} />
      </View>
    </View>
  )
}