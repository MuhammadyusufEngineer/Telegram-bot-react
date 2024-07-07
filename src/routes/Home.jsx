import ProductsWrapper from '@/components/ProductsWrapper.jsx';
import Categories from '@/components/Categories.jsx';
const Home = ({data}) => {
  return (
    <div className="bg-white pb-[20vw]">
      <Categories data={data} />
      <ProductsWrapper data={data} />
    </div>
  );
}

export default Home;