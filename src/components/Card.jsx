import { useContext } from 'react'
import { Link } from 'react-router-dom'
import IconFavorite from '@/components/icons/iconFavorite.jsx'
import IconAddtoCart from '@/components/icons/iconAddtoCart.jsx'
import { CartContext } from '@/context/CartContext'
import { FavoriteContext } from '@/context/FavoriteContext'


const Card = ({ product }) => {
  const { cart, addtoCart, removefromCart, formatPrice } = useContext(CartContext)
  const { favorites, addtoFavorites, removefromFavorites } = useContext(FavoriteContext)

  const isFavorite = favorites.some(item => item.id === product.id)
  const isInCart = cart.some(item => item.id === product.id)

  const preventActions = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }


  const handleToggleFavorite = (e) => {
    preventActions(e)
    if (isFavorite) removefromFavorites(product.id)
    else addtoFavorites(product)
  }

  const handleAddCart = (e) => {
    preventActions(e)
    if (isInCart) removefromCart(product.id)
    else addtoCart({ ...product, quantity: 1 })
  }

  return (

    <Link to={`/product/${product.id}`} className="h-[72vw] flex flex-col cursor-pointer pb-[5vw]">
      <div key={product.id} className="h-[45vw] overflow-hidden flex items-center bg-lowlight rounded-md relative">
        <img src={product.img} className="object-cover" alt="" />
        <button className="absolute top-[3vw] right-[3vw] z-40" onClick={handleToggleFavorite}>
          <IconFavorite isFavorite={isFavorite} />
        </button>
      </div>
      <div className="px-[1vw] flex-grow flex flex-col justify-between">
        <p className="text-[3vw] text-secondary font-semibold  mt-[3vw] line-clamp-2">{product.title}</p>
        <div className="flex items-center justify-between mt-[3vw]">
          <p className="text-[3.3vw] text-secondary font-tsb leading-none">{formatPrice(product.price)} so'm</p>
          <button onClick={handleAddCart}>
            <IconAddtoCart isInCart={isInCart} />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
