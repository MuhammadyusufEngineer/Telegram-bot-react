import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Card from './Card.jsx';

const CategoriesWrapper = ({ data }) => {
  return (
    <>
      {Object.entries(data).map(([category, products]) => (
        <div key={category}>
          <h2 className="container text-[7vw] text-primary font-tsb capitalize">{category}</h2>
          <Swiper
            className="pl-[2.5vw]"
            spaceBetween={5}
            slidesPerView={2.5}>
            {products.map(product => (
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

export default CategoriesWrapper;
