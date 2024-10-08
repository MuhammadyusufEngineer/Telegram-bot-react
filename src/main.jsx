import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Catalog from './routes/Catalog'
import Cart from './routes/Cart'
import Checkout from './routes/Checkout'
import Favorite from './routes/Favorite'
import Profile from './routes/Profile'
import Root from './routes/root'
import './index.css'
import ErrorPage from './error-page'
import ProductDetails from './routes/ProductDetails'
import CategoryProducts from './routes/CategoryProducts'
import { FavoriteProvider } from '@/context/FavoriteContext'
import { CartProvider } from '@/context/CartContext'
import getData from '@/constants/db';

const telegram = window.Telegram.WebApp


async function initializeApp() {
  const data = await getData()
  
  const router = createBrowserRouter([
    {
      path: '/', element: <Root data={data} />, errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Navigate to="/home" />, errorElement: <ErrorPage /> },
        { path: '/home', element: <Home data={data} />, errorElement: <ErrorPage /> },
        { path: '/catalog', element: <Catalog data={data} />, errorElement: <ErrorPage /> },
        { path: '/product/:productID', element: <ProductDetails data={data} />, errorElement: <ErrorPage /> },
        { path: '/category/:categoryName', element: <CategoryProducts data={data} />, errorElement: <ErrorPage /> },
        { path: '/cart', element: <Cart />, errorElement: <ErrorPage /> },
        { path: '/checkout', element: <Checkout telegram={telegram} />, errorElement: <ErrorPage /> },
        { path: '/favorite', element: <Favorite />, errorElement: <ErrorPage /> },
        { path: '/profile', element: <Profile />, errorElement: <ErrorPage /> },
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
}

initializeApp()