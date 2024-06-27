import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import 'swiper/css'
export default function Categories({ data }) {
  return (
    <>
      <nav className="my-[5vw]">
        <Swiper
          className="pl-[2.5vw]"
          spaceBetween={5}
          slidesPerView={4.7}>

          {data.map(item => (
            <SwiperSlide key={item.category}>
              <Link to={`/category/${item.category}`} className="w-[17vw]">
                <div className="size-[17vw] rounded-xl bg-lowlight p-[2vw]">
                  <img src={item.img} alt={item.category} />
                </div>
                <p className="text-primary text-[3.5vw] text-center font-tsb mt-[2vw] capitalize">{item.category}</p>
              </Link>
            </SwiperSlide>
          ))}

        </Swiper>
      </nav>
    </>
  )
}