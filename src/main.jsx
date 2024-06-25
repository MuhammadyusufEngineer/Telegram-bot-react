import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Catalog from './routes/Catalog'
import Cart from './routes/Cart'
import Favorite from './routes/Favorite'
import Profile from './routes/Profile'
import Root from './routes/root'
import './index.css'
import ErrorPage from './error-page'
import { getData } from '@/constants/db';
import ProductDetails from './routes/ProductDetails'
import CategoryProducts from './routes/CategoryProducts'

const data = getData()
console.log('data: ', data)

const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <ErrorPage />,
  children: [
    { path: '/', element: <Navigate to="/home" />, errorElement: <ErrorPage /> },
    { path: '/home', element: <Home data={data} />, errorElement: <ErrorPage /> },
    { path: '/catalog', element: <Catalog data={data} />, errorElement: <ErrorPage /> },
    { path: '/product/:productID', element: <ProductDetails data={data} />, errorElement: <ErrorPage /> },
    { path: '/category/:categoryName', element: <CategoryProducts data={data} />, errorElement: <ErrorPage /> },
    { path: '/cart', element: <Cart />, errorElement: <ErrorPage /> },
    { path: '/favorite', element: <Favorite />, errorElement: <ErrorPage /> },
    { path: '/profile', element: <Profile />, errorElement: <ErrorPage /> },
  ] },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './routes/Home';
// import Catalog from './routes/Catalog';
// import Cart from './routes/Cart';
// import Favorite from './routes/Favorite';
// import Profile from './routes/Profile';
// import ProductDetails from './routes/ProductDetails';
// import Root from './routes/root';
// import ErrorPage from './error-page';
// import { getData } from '@/constants/db';

// const data = getData();
// console.log('data: ', data);

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Root />} />
//         <Route path="/home" element={<Home data={data} />} />
//         <Route path="/catalog" element={<Catalog data={data} />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/favorite" element={<Favorite />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/product/:productId" element={<ProductDetails data={data} />} />
//         <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for unknown paths */}
//       </Routes>
//     </Router>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
