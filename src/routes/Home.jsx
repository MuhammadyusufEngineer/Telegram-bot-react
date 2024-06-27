import ProductsWrapper from '@/components/ProductsWrapper.jsx';
import Categories from '@/components/Categories.jsx';
const Home = ({data}) => {
  return (
    <>
      <Categories data={data} />
      <ProductsWrapper data={data} />
    </>
  );
}

export default Home;