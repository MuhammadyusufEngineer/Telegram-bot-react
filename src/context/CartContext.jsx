import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addtoCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id)
      if (existingProduct) {
        return prevCart.map(item => {
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        })
      } else {
        return [...prevCart, { ...product, quantity: product.quantity }]
      }
    })
  }

  const updateQuantity = (productId, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item))
  }

  const removefromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const formatPrice = price => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price).replace(/,/g, ' ')
  }

  return (
    <CartContext.Provider value={{ cart, addtoCart, removefromCart, updateQuantity, formatPrice }}>
      {children}
    </CartContext.Provider>
  )
}