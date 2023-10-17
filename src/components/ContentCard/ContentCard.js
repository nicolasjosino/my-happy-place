import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ContentCard(props) {
  const [isFavorite, setFavorite] = useState(props.isFavorite);
  let icon = isFavorite ? "md-heart" : "md-heart-outline";

  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        src={props.imagePath}
      >
      </Image>
      <View style={styles.details}>
        <View>
          <Text style={styles.title}>{props.title}</Text>
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

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    width: 230,
  },
  poster: {
    width: 220,
    height: 330,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#BF244D'
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 5
  },
  title: {
    fontWeight: 'bold',
    color: 'white'
  },
  releaseYear: {
    fontWeight: '400',
    color: 'white'
  },
  button: {}
})