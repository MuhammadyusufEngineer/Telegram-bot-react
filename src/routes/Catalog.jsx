import { Link } from 'react-router-dom'
import IconChevronRight from '@/components/icons/iconChevronRight'
import Header from '../components/Header'
const Catalog = ({ data }) => {
  return (
    <div className="bg-lowlight min-h-screen pb-[20vw]">
      <div className="flex flex-col gap-[2vw] ">
        <Header child="Katalog" />
        <div className="container border border-lowdark rounded-xl bg-white">
          {data.map((item, index) => (
            <Link to={`/category/${item.category}`} key={item.category} className={`flex items-center justify-between pr-[5vw] ${index !== data.length -1 ? 'border-b border-solid border-lowdark' : ''}`}>
              <div className="flex items-center gap-[2vw]" key={item.category}>
                <div className="size-[17vw] rounded-xl p-[2vw]">
                  <img src={item.img} alt={item.category} />
                </div>
                <p className="text-primary text-[5vw] text-center font-tm leading-none capitalize">{item.category}</p>
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