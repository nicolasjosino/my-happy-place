import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, Text } from 'react-native';

export default function Favorite(props) {
  const api = 'http://192.168.1.8:8080';
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

    fetch(url, {
      headers: {
        'Accept': "application/json, text/plain, */*",
        'Content-Type': "application/json;charset=utf-8"
      },
      body: JSON.stringify(body),
      method: !isFavorite ? 'POST' : 'PUT'
    })
      .then(setFavorite(!isFavorite))
      .then(props.getFavorites);
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