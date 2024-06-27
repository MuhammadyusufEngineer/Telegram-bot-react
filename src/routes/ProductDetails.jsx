import { useParams } from "react-router-dom"
import AddtoCart from "@/components/AddtoCart"
import Goback from '@/components/Goback'
import IconFavorite from '@/components/icons/iconFavorite'

const ProductDetails = ({ data }) => {
  const { productID } = useParams()
  const product = data.flatMap(category => category.products).find(p => p.id === parseInt(productID))
  if (!product) <div className="text-[5vw] text-blue text-tb text-center">Product not found</div>

  return (
    <div className="container pb-[40vw]">
      <div className="relative flex items-center justify-end my-[3vw]">
        <Goback />
        <IconFavorite />
      </div>
      <img src={product.img} className="bg-lowlight rounded-lg mb-[5vw]" alt="" />
      <h2 className="text-[7vw] font-tsb leading-tight">{product.title}</h2>
      <p className="text-[5vw] text-blue my-[5vw] font-tm">{product.price} <span className="text-primary">so'm</span></p>
      <p className="text-[5vw]">{product.description}</p>
      <AddtoCart />
    </div>
  )
}
export default ProductDetails