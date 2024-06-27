import React, { createContext, useState } from 'react'

export const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  // const [favorite, setFavorite] = useState(false)

  const addtoFavorites = (product) => {
    // setFavorite(favorites.filter(item => item.id !== product.id))
    setFavorites([...favorites, product])
    console.log('favorite: ', favorites)
  }

  const removefromFavorites = (productId) => {
    setFavorites(favorites.filter(item => item.id !== productId))
    console.log('not favorite: ', favorites)
  }

  return (
    <FavoriteContext.Provider value={{favorites, addtoFavorites, removefromFavorites}}>
      {children}
    </FavoriteContext.Provider>
  )
}