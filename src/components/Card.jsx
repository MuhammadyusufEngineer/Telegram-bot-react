import { useState } from 'react'
import Favorite from '/src/components/Icons/favorite.jsx'
import AddtoCart from '/src/components/Icons/addtoCart.jsx'
const Card = ({ product }) => {
  const [favorite, setFavorite] = useState(false)
  const [addcart, setAddcart] = useState(false)
  const toggleFavorite = () => {
    setFavorite(prevState => !prevState)
  }
  const addToCart = () => {
    setAddcart(prevState => !prevState)
  }
  return (
    <div className="h-[65vw] flex flex-col cursor-pointer">
      <div className="h-[45vw] overflow-hidden flex items-center bg-lowlight rounded-md relative">
        <img src={product.img} className="object-cover" alt="" />
        <div className="absolute top-[3vw] right-[3vw]" onClick={toggleFavorite}>
          <Favorite isFavorite={favorite} />
        </div>
      </div>
      <div className="px-[1vw] flex-grow flex flex-col justify-between">
        <p className="text-[3vw] text-secondary leading-none mt-[3vw] line-clamp-2">{product.title}</p>
        <div className="flex items-center justify-between mt-[3vw]">
          <p className="text-[3vw] text-secondary font-semibold leading-none">{product.price} so'm</p>
          <div onClick={addToCart}>
            <AddtoCart isAdded={addcart}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
