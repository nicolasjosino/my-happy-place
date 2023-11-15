import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, Text } from 'react-native';

export default function Favorite(props) {
  const api = 'http://192.168.0.8:8080';
  const [isFavorite, setFavorite] = useState(props.isFavorite);
  let icon = isFavorite ? "md-heart" : "md-heart-outline";

  function changeFavoriteStatus() {
    let url = `${api}/${props.mediaType == 'tv' ? 'series' : 'movies'}`
    let body = {
      userList: [
        {
          id: 1,
        },
      ],  
    };
    props.mediaType == 'tv' ? (body.serieId = props.idTMDB) : (body.movieId = props.idTMDB);

    console.log(JSON.stringify(body));
    fetch(url, {
      method: !isFavorite ? 'POST' : 'PUT',
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(setFavorite(!isFavorite));
  }

  return (
    <Pressable
      onPress={(pressed) => changeFavoriteStatus()}
    >
      <Ionicons
        name={icon}
        size={32}
        color="red"
      />
    </Pressable>
  )

}