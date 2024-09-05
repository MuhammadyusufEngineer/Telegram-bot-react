import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import 'swiper/css'
export default function Categories({ data }) {
  return (
    <>
      <nav className="py-[5vw]">
        <Swiper
          className="pl-[2.5vw]"
          spaceBetween={5}
          slidesPerView={4.7}>

          {data.map(item => (
            <SwiperSlide key={item.name}>
              <Link to={`/category/${item.name}`} className="w-[17vw]">
                <div className="size-[17vw] rounded-xl bg-lowlight p-[2vw]">
                  <img src={item.img} alt={item.name} />
                </div>
                <p className="text-primary text-[3.5vw] text-center font-tsb mt-[2vw] capitalize">{item.name}</p>
              </Link>
            </SwiperSlide>
          ))}

        </Swiper>
      </nav>
    </>
  )
}