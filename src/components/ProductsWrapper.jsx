import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom';
import IconChevronRight from '/src/components/icons/iconChevronRight'
import 'swiper/css'
import Card from './Card.jsx';

const ProductsWrapper = ({ data }) => {
  return (
    <>
      {data.map(item => (
        <div className="mt-[10vw]" key={item.name}>
          <div className="container">
            <Link to={`/category/${item.name}`} className="flex items-center gap-[5vw] mb-[5vw]">
              <h2 className="text-[7vw] text-primary font-tsb capitalize leading-none">{item.name}</h2>
              <div>
                <IconChevronRight />
              </div>
            </Link>
          </div>
          <Swiper
            className="px-[2.5vw]"
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
