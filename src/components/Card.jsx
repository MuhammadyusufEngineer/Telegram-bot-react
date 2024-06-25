import { useState } from 'react'
import { Link } from 'react-router-dom'
import IconFavorite from '/src/components/icons/iconFavorite.jsx'
import IconAddtoCart from '/src/components/icons/iconAddtoCart.jsx'

const Card = ({ product }) => {
  const [favorite, setFavorite] = useState(false)

  const preventActions = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const toggleFavorite = (e) => {
    preventActions(e)
    setFavorite(prevState => !prevState)
  }
  const addToCart = (e) => {
    preventActions(e)
    setAddcart(prevState => !prevState)
  }

  return (
    <div className="h-[65vw]">

      <Link to={`/product/${product.id}`} className=" flex flex-col cursor-pointer">
        <div className="h-[45vw] overflow-hidden flex items-center bg-lowlight rounded-md relative">
          <img src={product.img} className="object-cover" alt="" />
          <button className="absolute top-[3vw] right-[3vw] z-40" onClick={toggleFavorite}>
            <IconFavorite isFavorite={favorite} />
          </button>
        </div>
        <div className="px-[1vw] flex-grow flex flex-col justify-between">
          <p className="text-[3vw] text-secondary leading-none mt-[3vw] line-clamp-2">{product.title}</p>
          <div className="flex items-center justify-between mt-[3vw]">
            <p className="text-[3vw] text-secondary font-semibold leading-none">{product.price} so'm</p>
            <button onClick={addToCart} className="relative z-40 size-[7vw] border border-blue rounded-full p-[1.5vw]">
              <IconAddtoCart className="fill-blue" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
