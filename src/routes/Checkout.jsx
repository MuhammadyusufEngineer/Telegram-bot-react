import { useContext, useCallback, useState } from "react"
import { CartContext } from "@/context/CartContext"
import Header from '@/components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Checkout = ({ telegram }) => {
  const [user, setUser] = useState({
    surname:'',
    name: '',
    phone: '',
    payment: ''
  })

  const handleInputChange = e => {
    const {name, value} = e.target
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(user)
  } 

  const { cart, sumTotal, formatPrice } = useContext(CartContext)

  const handleCheckout = useCallback(() => {
    const checkoutData = {
      user,
      cart
    }
    telegram.sendData(JSON.stringify(checkoutData))
  }, [cart, user])

  const payment = [
    { name: 'payment', id: 'naqd', label: 'Naqd pul' },
    { name: 'payment', id: 'karta', label: 'Karta orqali' },
  ]
  return (
    <>
      <Header child='Buyurtmani rasmiylashtirish' />
      <div className="pb-[40vw]">
        <Swiper
          className="pl-[2.5vw] py-[5vw]"
          spaceBetween={5}
          slidesPerView={4.7}>

          {cart.map(item => (
            <SwiperSlide key={item.name}>
              <div className="size-[17vw] rounded-xl bg-lowlight">
                <img src={item.img} alt={item.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="container">
          <p className="text-[5vw] font-tsb pt-[10vw]">Buyurtma qabul qiluvchi</p>
          <div className="flex flex-col gap-[3vw] my-[5vw]">
              <div className="p-[4vw] rounded-lg bg-lowlight text-[4vw] placeholder:text-lowdark">
                <input className="bg-lowlight w-full outline-none" 
                name="surname" 
                id="surname" 
                type="text" 
                placeholder="Familiya"
                value={user.surname}
                onChange={handleInputChange}
                required/>
              </div>
              <div className="p-[4vw] rounded-lg bg-lowlight text-[4vw] placeholder:text-lowdark">
                <input className="bg-lowlight w-full outline-none" 
                name="name" 
                id="name" 
                type="text" 
                placeholder="Ism"
                value={user.name}
                onChange={handleInputChange}
                required/>
              </div>
              <div className="p-[4vw] rounded-lg bg-lowlight text-[4vw] placeholder:text-lowdark">
                <input className="bg-lowlight w-full outline-none" 
                name="phone" 
                id="phone" 
                type="text" 
                placeholder="Telefon raqam"
                value={user.phone}
                onChange={handleInputChange}
                required/>
              </div>
          </div>

          <p className="text-[5vw] font-tsb pt-[10vw]">To'lov turi</p>
          <div className="flex flex-col gap-[3vw] my-[5vw]">
            {payment.map(item => (
              <label key={item.id} htmlFor={item.id} className="has-[input:checked]:border-blue border border-transparent flex gap-[2vw] bg-lowlight p-[4vw] rounded-lg">
                <input type="radio" 
                name={item.name} 
                id={item.id} 
                value={item.id} 
                onChange={handleInputChange}
                required/>
                <p className="text-[4vw] font-tsb">{item.label}</p>
              </label>
            ))}
          </div>
        </div>

        {/* price and order button */}
        <div className="fixed bottom-[15vw] left-0 w-full bg-lowlight py-[2vw]">
          <div className="container">
            <div className="">
              <div className="flex items-center justify-between py-[2vw]">
                <p className="text-[5vw] font-tr">
                  Jami
                </p>
                <p className="text-[5vw] font-tsb">
                  {formatPrice(sumTotal(cart))} so'm
                </p>
              </div>
              <button onClick={handleCheckout} className="w-full py-[3vw] text-[5vw] bg-blue text-white font-tr rounded-lg leading-none">
                Rasmiylashtirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout