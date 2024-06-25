import IconAddtoCart from '@/components/icons/iconAddtoCart'
import Quantity from '@/components/Quantity'

const AddtoCart = () => {
  return (
    <div className="fixed bottom-[15vw] left-0 w-full">
      <div className="container">
        <div className="flex gap-[2vw] justify-between">
          <Quantity />
          <button className="flex-shrink flex items-center gap-[2vw] bg-blue px-[3vw] rounded-xl">
            <div>
              <IconAddtoCart className="size-[5vw] fill-white" />
            </div>
            <p className="text-[5vw] text-white leading-none">Savatga qo'shish</p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default AddtoCart