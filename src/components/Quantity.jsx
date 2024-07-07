// import { useState } from "react"

// const Quantity = () => {
//   const [qnty, setQnty] = useState(1)

//   const handleIncrease = () => {
//     setQnty(prevQnty => prevQnty + 1)
//   }

//   const handleDecrease = () => {
//     if (qnty > 1) setQnty(prevQnty => prevQnty - 1)
//   }

//   const handleOnchange = (e) => {
//     const qnty = parseInt(e.target.value || 1, 10)
//     if (!isNaN(qnty) && qnty > 0) setQnty(qnty)
//   }
//   return (
//     <div className="inline-flex items-center gap-[2vw] p-[1vw] rounded-xl bg-lowlight">
//       <button className="size-[6vw] rounded-lg text-blue bg-white" onClick={handleDecrease}>
//       <input type="number" className="text-[4vw] text-center  w-[10vw] bg-transparent" value={qnty} onChange={handleOnchange} />
//       <button className="size-[6vw] rounded-lg bg-blue text-white" onClick={handleIncrease}>
//     </div>
//   )
// }

// export default 
import { useState } from "react";
import IconAdd from '@/components/icons/iconAdd'
import IconSubtract from '@/components/icons/iconSubtract'

const Quantity = ({ initialQuantity = 1, onUpdate }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdate(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdate(newQuantity);
    }
  };

  const handleOnChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
      onUpdate(newQuantity);
    }
  };

  return (
    <div className="inline-flex items-center gap-[2vw] p-[1vw] rounded-xl bg-lowlight">
      <button className="size-[7vw] rounded-lg text-blue bg-white" onClick={handleDecrease}>
        <IconSubtract className="p-[1vw]" />
      </button>
      <input
        type="number"
        className="text-[4vw] text-center w-[10vw] bg-transparent"
        value={quantity}
        onChange={handleOnChange}
      />
      <button className="size-[7vw] rounded-lg bg-blue text-white" onClick={handleIncrease}>
        <IconAdd className="p-[1vw]" />
      </button>
    </div>
  );
};

export default Quantity;
