import { Image, Text, View } from 'react-native';
import Favorite from '../Favorite/Favorite';
import { styles } from "./styles";

export default function ContentCard(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        src={props.posterPath}
      >
      </Image>
      <View style={styles.details}>
        <View style={styles.contentView}>
          <Text numberOfLines={1} style={styles.title}>{props.name}</Text>
          <Text style={styles.releaseYear}>{props.releaseDate.substring(0, 4)}</Text>
        </View>
        <Favorite 
          isFavorite={props.isFavorite}
          idTMDB={props.idTMDB}
          mediaType={props.mediaType}
        />
      </View>
    </View>
  )
}