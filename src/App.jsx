// import { getData } from './constants/db';
// import ProductsWrapper from './components/ProductsWrapper.jsx';
import Search from './components/Search.jsx';
// import Nav from './components/Categories.jsx';
import Navigation from './components/Navigation';

function App() {
  // const data = getData()
  // const categoryNames = data.map(item => item.category)
  // console.log('title: ', categoryNames)
  return (
    <>
      <Search />
      <Navigation />  
    </>
  );
}

export default App;
