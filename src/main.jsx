import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Catalog from './routes/Catalog'
import Cart from './routes/Cart'
import Favorite from './routes/Favorite'
import Profile from './routes/Auth/Profile'
import PhoneSignIn from './routes/Auth/PhoneSignIn'
import EmailSignIn from './routes/Auth/EmailSignIn'
import GoogleSignIn from './routes/Auth/GoogleSignIn'
import Root from './routes/root'
import './index.css'
import ErrorPage from './error-page'
import { getData } from '@/constants/db';
import ProductDetails from './routes/ProductDetails'
import CategoryProducts from './routes/CategoryProducts'
import { FavoriteProvider } from '@/context/FavoriteContext'
import { CartProvider } from '@/context/CartContext'

const data = getData()
const telegram = window.Telegram.WebApp

const router = createBrowserRouter([
  {
    path: '/', element: <Root data={data} />, errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Navigate to="/home" />, errorElement: <ErrorPage /> },
      { path: '/home', element: <Home data={data} />, errorElement: <ErrorPage /> },
      { path: '/catalog', element: <Catalog data={data} />, errorElement: <ErrorPage /> },
      { path: '/product/:productID', element: <ProductDetails data={data} />, errorElement: <ErrorPage /> },
      { path: '/category/:categoryName', element: <CategoryProducts data={data} />, errorElement: <ErrorPage /> },
      { path: '/cart', element: <Cart telegram={telegram} />, errorElement: <ErrorPage /> },
      { path: '/favorite', element: <Favorite />, errorElement: <ErrorPage /> },
      { path: '/profile', element: <Profile />, errorElement: <ErrorPage /> },
      { path: '/PhoneSignIn', element: <PhoneSignIn />, errorElement: <ErrorPage /> },
      { path: '/EmailSignIn', element: <EmailSignIn />, errorElement: <ErrorPage /> },
      { path: '/GoogleSigIn', element: <GoogleSignIn />, errorElement: <ErrorPage /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoriteProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </FavoriteProvider>
  </React.StrictMode>,
)