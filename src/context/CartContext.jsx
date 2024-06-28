import React, {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addtoCart = (product) => {
    setCart(prevCart => [...prevCart, product])
  }
  
  const removefromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  return (
    <CartContext.Provider value={{cart, addtoCart, removefromCart}}>
      {children}
    </CartContext.Provider>
  )
}