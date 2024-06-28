import React, { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import Quantity from '@/components/Quantity'
import Header from '@/components/Header'

const Cart = () => {
  const {cart} = useContext(CartContext)
  console.log('cart: ',cart)
  if(!Array.isArray(cart)){
    console.error('cart is not an array', cart)
    return null
  }
  return (
    <>
      <Header child="10ta Mahsulotlar savatda" />
      <div className="pb-[30vw]">
            {cart.map(product => (
              <div key={product.id} className="py-[5vw] border-b border-lowdark">
                <div className="container">
                  <div className="flex gap-[2vw]">
                    <div className="w-[30%]  overflow-hidden">
                      <img src={product.img} className="rounded-lg bg-lowlight" alt="" />
                    </div>
                    <div className="w-[70%]">
                      <p className="text-[5vw] font-tb leading-none">{product.price} so'm</p>
                      <p className="text-[4vw] font-tm">{product.title}</p>
                      <p className="text-[3vw] font-tm mt-[3vw] mb-[1vw]">{product.price} so'm/dona</p>
                      <Quantity />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        <div className="fixed bottom-[15vw] left-0 w-full bg-lowlight py-[2vw]">
          <div className="container">
            <div className="flex items-stretch">
              <div className="w-1/2">
                <p className="text-[5vw] font-tsb">31 443 000 so'm</p>
                <p className="text-[4vw]">3 ta mahsulot</p>
              </div>
              <button className="w-1/2 bg-blue text-white rounded-lg leading-none ">Rasmiylashtirish</button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default Cart