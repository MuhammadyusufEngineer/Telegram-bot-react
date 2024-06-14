import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
export default function Nav({ data }) {
  return (
    <>
      <nav className="my-[5vw]">
        <Swiper
          className="pl-[2.5vw]"
          spaceBetween={5}
          slidesPerView={4.2}>
          {Object.entries(data).map(([category, products]) => (
            <SwiperSlide key={category}>
              <div className="w-[20vw]">
                <div className="size-[20vw] rounded-2xl bg-lowlight">
                  <img src={products[0].img} alt={products[0].description} />
                </div>
                <p className="text-primary text-[4vw] text-center mt-[2vw] capitalize">{category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>
    </>
  )
}