import { useParams } from "react-router-dom"
import Card from '@/components/Card'
const CategoryProducts = ({ data }) => {
  const { categoryName } = useParams()
  const categoryData = data.find(category => category.category === categoryName)
  const products = categoryData.products
  return (
    <div className="container">
      <h2 className="text-[5vw] text-blue font-tsb my-[3vw] capitalize">{categoryData.category}</h2>
      <div className="grid grid-cols-2 gap-[2vw]">
        {products.map(product => (
          <Card product={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}
export default CategoryProducts