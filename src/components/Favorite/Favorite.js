import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext, useState } from 'react';
import { Pressable } from 'react-native';
import { FavoritesContext } from '../../FavoritesContext';

export default function Favorite(props) {
  const api = 'http://192.168.0.11:8080';
  const [isFavorite, setFavorite] = useState(props.isFavorite);
  const { favorites, setFavorites } = useContext(FavoritesContext);
  let icon = isFavorite ? "md-heart" : "md-heart-outline";

  function getFavorites() {
    fetch(`${api}/users/1/findFavorites`)
      .then(response => response.json())
      .then(data => setFavorites(data))
      .catch(error => console.error(error));
  }

  async function changeFavoriteStatus() {
    let url = `${api}/${props.mediaType == 'tv' ? 'series' : 'movies'}`
    let body = {
      userList: [
        {
          id: 1,
        },
      ],
    };
    props.mediaType == 'tv' ? (body.serieId = props.idTMDB) : (body.movieId = props.idTMDB);

    await fetch(url, {
      headers: {
        'Accept': "application/json, text/plain, */*",
        'Content-Type': "application/json;charset=utf-8"
      },
      body: JSON.stringify(body),
      method: !isFavorite ? 'POST' : 'PUT'
    })
      .then(setFavorite(!isFavorite))
    getFavorites();
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