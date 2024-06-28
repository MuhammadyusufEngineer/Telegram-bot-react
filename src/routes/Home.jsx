import ProductsWrapper from '@/components/ProductsWrapper.jsx';
import Categories from '@/components/Categories.jsx';
import 'home.css'
const Home = ({data}) => {
  return (
    <>
      <Categories data={data} />
      <ProductsWrapper data={data} />
    </>
  );
}

export default Home;