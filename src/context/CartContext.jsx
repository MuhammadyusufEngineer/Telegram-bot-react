import React, {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addtoCart = (product) => {
    setCart([...cart, product])
    console.log('add: ', cart)
  }
  
  const removefromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
    console.log('remove: ', cart)
  }

  return (
    <CartContext.Provider value={{cart, addtoCart, removefromCart}}>
      {children}
    </CartContext.Provider>
  )
}