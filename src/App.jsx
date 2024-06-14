import { getData } from './constants/db';
import CategoriesWrapper from './components/CategoriesWrapper.jsx';
import Search from './components/Search.jsx';
import Nav from './components/Nav.jsx';

function App() {
  const data = getData()[0]
  const categoryNames = Object.keys(data)
  return (
    <>
      <Search categories={categoryNames} />
      <Nav data={data} />
      <CategoriesWrapper data={data} />
    </>
  );
}

export default App;
