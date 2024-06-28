import React, { createContext, useState } from 'react'

export const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addtoFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product])
  }

  const removefromFavorites = (productId) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== productId))
  }

  return (
    <FavoriteContext.Provider value={{favorites, addtoFavorites, removefromFavorites}}>
      {children}
    </FavoriteContext.Provider>
  )
}