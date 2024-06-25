import { Link } from 'react-router-dom'
import IconChevronRight from '@/components/icons/iconChevronRight'
const Catalog = ({ data }) => {
  return (
    <div className="bg-lowlight min-h-screen pb-[20vw]">
      <div className="container">
        <div className="flex flex-col gap-[2vw]">
          <p className="text-[7vw] text-blue font-tm my-[5vw]">Kategoriyalar</p>
          {data.map(item => (
            <Link to={`/category/${item.category}`} className="flex items-center justify-between bg-white rounded-md pr-[5vw] border border-solid border-blue/30">
              <div className="flex items-center gap-[2vw]" key={item.category}>
                <div className="size-[17vw] rounded-xl p-[2vw]">
                  <img src={item.img} alt={item.category} />
                </div>
                <p className="text-primary text-[5vw] text-center leading-none capitalize">{item.category}</p>
              </div>
              <div>
                <IconChevronRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Catalog