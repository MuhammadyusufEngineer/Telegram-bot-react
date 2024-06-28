import React, {useContext} from 'react'
import { FavoriteContext } from '@/context/FavoriteContext'
import Card from '@/components/Card'
import Header from '@/components/Header'

const Favorite = () => {
  const {favorites} = useContext(FavoriteContext)
  if(!Array.isArray(favorites)) {
    console.error('favorites is not an array', favorites)
    return null
  }
  return (
    <>
      <Header child="Favorites"/>
      <div className="container">
        <div className="grid grid-cols-2 gap-[2vw] pt-[5vw]">
          {favorites.map(product => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  )
}
export default Favorite