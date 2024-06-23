import { Swiper, SwiperSlide } from 'swiper/react'
import ChevronRight from '/src/components/Icons/ChevronRight'
import 'swiper/css'
import Card from './Card.jsx';

const ProductsWrapper = ({ data }) => {
  return (
    <>
      {data.map(item => (
        <div className="mt-[10vw]" key={item.category}>
          <div className="container">
            <a className="flex items-center gap-[5vw] mb-[5vw]">
              <h2 className="text-[7vw] text-primary font-tsb capitalize leading-none">{item.category}</h2>
              <div>
                <ChevronRight />
              </div>
            </a>
          </div>
          <Swiper
            className="pl-[2.5vw]"
            spaceBetween={5}
            slidesPerView={2.5}>
            {item.products.map(product => (
              <SwiperSlide key={product.id}>
                <Card product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </>
  );
}

export default ProductsWrapper;
