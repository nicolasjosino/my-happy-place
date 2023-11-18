import { useState } from 'react';
import Routes from './src/Routes';
import { FavoritesContext } from './src/FavoritesContext';

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const value = { favorites, setFavorites };

  return (
    <FavoritesContext.Provider value={value}>
      <Routes />
    </FavoritesContext.Provider>
  )
};
