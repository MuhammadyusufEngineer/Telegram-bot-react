import IconAdd from '@/components/icons/iconAdd'
import IconSubtract from '@/components/icons/iconSubtract'
import { useState } from "react"

const Quantity = () => {
  const [qnty, setQnty] = useState(1)

  const handleIncrease = () => {
    setQnty(prevQnty => prevQnty + 1)
  }

  const handleDecrease = () => {
    if (qnty > 1) setQnty(prevQnty => prevQnty - 1)
  }

  const handleOnchange = (e) => {
    const qnty = parseInt(e.target.value, 10)
    if (!isNaN(qnty) && qnty > 1) setQnty(qnty)
  }
  return (
    <div className="inline-flex items-center gap-[2vw] p-[2vw] rounded-xl bg-lowlight">
      <button className="size-[10vw] rounded-lg text-blue bg-white" onClick={handleDecrease}><IconSubtract className="p-[2vw]" /></button>
      <input type="number" className="text-[5vw] text-center border-b border-lowdark w-[10vw] bg-transparent" value={qnty} onChange={handleOnchange} />
      <button className="size-[10vw] rounded-lg bg-blue text-white" onClick={handleIncrease}><IconAdd className="p-[2vw]" /></button>
    </div>
  )
}

export default Quantity