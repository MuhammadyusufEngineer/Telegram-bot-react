// export default ProductDetails
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { FavoriteContext } from "@/context/FavoriteContext";
import { Link } from "react-router-dom";
import Goback from "@/components/Goback";
import Quantity from "@/components/Quantity";
import IconAddtoCart from "@/components/icons/iconAddtoCart";
import IconFavorite from "@/components/icons/iconFavorite";



const ProductDetails = ({ data }) => {
  const { productID } = useParams();
  const { cart, addtoCart, formatPrice } = useContext(CartContext);
  const { favorites, addtoFavorites, removefromFavorites } = useContext(FavoriteContext)

  const product = data
    .flatMap((category) => category.products)
    .find((p) => p.id === parseInt(productID));

  const isFavorite = favorites.some(item => item.id === product.id)

  const handleToggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (isFavorite) removefromFavorites(product.id)
    else addtoFavorites(product)
  }

  const [quantity, setQuantity] = useState(() => {
    const cartItem = cart.find(item => item.id === product?.id)
    return cartItem ? cartItem.quantity : 1
  })

  const doesExists = cart.find(item => item.id === product?.id)

  if (!product) return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-[5vw]">
      <Goback />
      <div className="text-[5vw] text-blue text-tb text-center"> Product not found</div>
    </div>
  );

  const handleAddtoCart = () => {
    addtoCart({ ...product, quantity })
  }

  return (
    <div className="bg-white pb-[40vw]">
      <div className="container">
        <div className="relative flex items-center justify-end py-[3vw]">
          <Goback />
          <button onClick={handleToggleFavorite}>
            <IconFavorite isFavorite={isFavorite} />
          </button>
        </div>
        <img src={product.img} className="bg-lowlight rounded-lg mb-[5vw]" alt="" />
        <h2 className="text-[7vw] font-tsb leading-tight">{product.title}</h2>
        <p className="text-[5vw] text-blue my-[5vw] font-tm">
          {formatPrice(product.price)} <span className="text-primary">so'm</span>
        </p>
        <p className="text-[5vw]">{product.description}</p>

        <div className="fixed bottom-[15.5vw] left-0 w-full">
          {!doesExists ?
            (
              <div className="bg-white py-[3vw] border-t border-solid border-lowdark">
                <div className="container">
                  <div className="flex gap-[2vw] justify-between">
                    <Quantity initialQuantity={quantity} onUpdate={setQuantity} />
                    <button onClick={handleAddtoCart} className="flex-1 flex items-center justify-center gap-[2vw] px-[3vw] text-[5vw] text-white text-center leading-none bg-blue rounded-xl">
                      <IconAddtoCart className="size-[5vw] fill-white" />
                      Savatga qo'shish
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="container pb-[3vw]">
                <div className="w-full p-[2vw] rounded-md bg-blue text-center">
                  <Link to='/cart' className="text-white text-5vw">
                    Savatga o'tish
                  </Link>
                </div>
              </div>
            )}
        </div>
      </div>
    </div >
  );
};

export default ProductDetails;
