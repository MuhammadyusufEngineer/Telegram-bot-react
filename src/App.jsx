<<<<<<< HEAD
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
=======
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-center text-7xl text-blue-500 font-mono">Hello there!</h1>

    </>
  )
}

export default App
>>>>>>> 377ebb3babdc8dbf777847f792b2d93834a1a1ef
