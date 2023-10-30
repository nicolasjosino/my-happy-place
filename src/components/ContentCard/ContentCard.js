import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from "./styles";

export default function ContentCard(props) {
  const [isFavorite, setFavorite] = useState(props.isFavorite);
  let icon = isFavorite ? "md-heart" : "md-heart-outline";
  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        src={props.posterPath}
      >
      </Image>
      <View style={styles.details}>
        <View>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.releaseYear}>{props.releaseYear}</Text>
        </View>
        <Pressable
          onPress={(pressed) => setFavorite(!isFavorite)}
          style={styles.button}
        >
          <Ionicons
            name={icon}
            size={32}
            color="red"
          />
        </Pressable>
      </View>
    </View>
  )
}