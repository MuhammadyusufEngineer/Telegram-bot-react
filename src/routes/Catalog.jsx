import { Link } from 'react-router-dom'
import IconChevronRight from '@/components/icons/iconChevronRight'
import Header from '@/components/Header'
const Catalog = ({ data }) => {
  return (
    <div className="bg-lowlight min-h-screen pb-[20vw]">
      <div className="flex flex-col gap-[2vw] ">
        <Header child="Katalog" />
        <div className="container pt-[5vw]">
          <div className="border border-lowdark rounded-xl bg-white">
            {data.map((item, index) => (
              <Link to={`/category/${item.name}`} key={item.name} className={`flex items-center justify-between gap-[2vw] p-[3vw] ${index !== data.length - 1 ? 'border-b border-solid border-lowdark' : ''}`}>
                <div>
                  <img className="w-[7vw]" src={item.img} alt={item.name} />
                </div>
                <p className="text-primary text-[4vw] font-tm flex-1 leading-none capitalize">{item.name}</p>
                <div className="w-[7vw]">
                  <IconChevronRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Catalog