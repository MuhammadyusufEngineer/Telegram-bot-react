import React, { useContext } from 'react'
import { FavoriteContext } from '@/context/FavoriteContext'
import Card from '@/components/Card'
import Header from '@/components/Header'

const Favorite = () => {
  const { favorites } = useContext(FavoriteContext)

  if (!Array.isArray(favorites)) {
    console.error('favorites is not an array', favorites)
    return null
  }

  if (favorites.length === 0) return <div className="min-h-[90vh] bg-white">
    <Header child="Ortga qaytish" />
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <img src="/not-found.png" alt="" />
      <p className="text-center text-[5vw] text-lowdark mt-20 font-tm">Sevimli mahsulotlar yo'q</p>
    </div>
  </div>

  return (
    <div className="bg-white min-h-screen pb-[20vw]">
      <Header child="Favorites" />
      <div className="container">
        <div className="grid grid-cols-2 gap-[2vw] pt-[5vw]">
          {favorites.map(product => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Favorite