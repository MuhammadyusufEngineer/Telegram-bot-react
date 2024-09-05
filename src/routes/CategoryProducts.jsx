import { useParams } from "react-router-dom"
import Card from '@/components/Card'
import Header from "../components/Header"
const CategoryProducts = ({ data }) => {
  const { categoryName } = useParams()
  const categoryData = data.find(category => category.name === categoryName)
  const products = categoryData.products
  return (
    <div className="bg-white pb-[20vw]">
      <Header child={categoryData.name} />
      <div className="container">
        <div className="grid grid-cols-2 gap-[2vw] pt-[5vw]">
          {products.map(product => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default CategoryProducts