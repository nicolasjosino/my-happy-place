import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, Text } from 'react-native';

export default function Favorite(props) {
  const [isFavorite, setFavorite] = useState(props.isFavorite);
  let icon = isFavorite ? "md-heart" : "md-heart-outline";
  return (
    <Pressable
      onPress={(pressed) => setFavorite(!isFavorite)}
    >
      <Ionicons
        name={icon}
        size={32}
        color="red"
      />
    </Pressable>
  )

}