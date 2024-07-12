import { useCallback, useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";
import Quantity from "@/components/Quantity";
import Header from "@/components/Header";

const Cart = ({ telegram }) => {
  const { cart, removefromCart, updateQuantity, formatPrice } = useContext(CartContext);
  const isEmpty = cart.length === 0;

  const sumTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = useCallback(() => {
    // const queryID = telegram.initDataUnsave?.query_id
    // if (queryID) {
    // fetch('http://localhost:8000/bot-data', {
    // method: 'POST',
    // headers: {
    // 'Content-Type': "application/json"
    // },
    // body: JSON.stringify(cart)
    // })
    // } else {
    telegram.sendData(JSON.stringify(cart))
    // }
  }, [cart])

  if (isEmpty) {
    return (<div className="min-h-[90vh] bg-white">
      <Header child="Ortga qaytish" />
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <img src="/not-found.png" alt="" />
        <p className="text-center text-[5vw] text-lowdark mt-20 font-tm">Savatda mahsulotlar yo'q</p>
      </div>
    </div>)
  }

  return (
    <div className="bg-white min-h-screen">
      <Header child={`${cart.length} ta Mahsulot${cart.length > 1 ? "lar" : ""} savatda`} />
      <div className="pb-[30vw]">
        {cart.map((product) => (
          <div key={product.id} className="py-[5vw] border-b border-lowdark">
            <div className="container">
              <div className="flex gap-[2vw]">
                <div className="w-[30%]  overflow-hidden">
                  <img src={product.img} className="rounded-lg bg-lowlight" alt="" />
                </div>
                <div className="w-[70%]">
                  <p className="text-[5vw] font-tb leading-none">
                    {formatPrice(product.price * product.quantity)} so'm
                  </p>
                  <p className="text-[4vw] font-tm">{product.title}</p>
                  <p className="text-[3vw] font-tm mt-[3vw] mb-[1vw]">
                    {formatPrice(product.price)} so'm/dona
                  </p>
                  <div className="flex items-center justify-between">
                    <Quantity initialQuantity={product.quantity} onUpdate={(quantity) => updateQuantity(product.id, quantity)} />
                    <div onClick={() => removefromCart(product.id)} className="bg-red-500 size-[7vw] p-[1vw] rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-white" viewBox="0 0 32 32"> <path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z" /> <path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="fixed bottom-[15vw] left-0 w-full bg-lowlight py-[2vw]">
          <div className="container">
            <div className="flex items-stretch">
              <div className="w-1/2">
                <p className="text-[5vw] font-tsb">
                  {formatPrice(sumTotal())} so'm
                </p>
                <p className="text-[4vw]">{cart.length} ta mahsulot</p>
              </div>
              <button className="w-1/2 text-[5vw] bg-blue text-white rounded-lg leading-none"
                onClick={handleCheckout}>
                Rasmiylashtirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
