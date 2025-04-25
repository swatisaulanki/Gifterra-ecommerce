import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import swatis from "../assets/swati.png"

const products = [
  {
    id: 1,
    image: 'https://lovecraftgift.com/cdn/shop/files/1_18.jpg?v=1744092153',
    title: 'Blue Theme Personalized Kids School Combo',
    price: 'Rs. 299.00',
    original: 'Rs. 399.00',
    discount: '10% Off',
  },
  {
    id: 2,
    image: 'https://lovecraftgift.com/cdn/shop/files/Personalized_Ghibli_Art_Style_Frame_-_Custom_Ghibli_Artwork_for_Your_Photos.jpg?v=1743242509',
    title: 'Ghibli Polaroid Photo Set',
    price: 'Rs. 349.00',
    original: 'Rs. 399.00',
    discount: '13% Off',
  },
  {
    id: 3,
    image: swatis,
    title: 'Custom Table Stand - swatu',
    price: 'Rs. 349.00',
    original: 'Rs. 599.00',
    discount: '42% Off',
  },
  {
    id: 4,
    image: 'https://static.wixstatic.com/media/b2ac45_11a66cd852254c3cabbcc226383d6e48~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    title: 'Vertical Name Pendant Necklace',
    price: 'Rs. 219.00',
    original: 'Rs. 243.00',
    discount: '10% Off',
  },
  {
    id: 5,
    image: 'https://img.freepik.com/free-vector/watercolor-love-photo-frame-template_23-2149999000.jpg?semt=ais_hybrid&w=740',
    title: 'Couple Illustration Frame',
    price: 'Rs. 499.00',
    original: 'Rs. 699.00',
    discount: '28% Off',
  },
  {
    id: 6,
    image: 'https://m.media-amazon.com/images/I/81oDz3YKdbL._AC_UF1000,1000_QL80_.jpg',
    title: 'Personalized LED Photo Lamp',
    price: 'Rs. 799.00',
    original: 'Rs. 999.00',
    discount: '20% Off',
  },
  {
    id: 7,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61s1+3ZsFmL._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
    title: 'Customized Keychain',
    price: 'Rs. 149.00',
    original: 'Rs. 199.00',
    discount: '25% Off',
  },
  {
    id: 8,
    image: 'https://artfina.in/wp-content/uploads/2019/07/Digital-portrait-vector-illustraion-girl.jpg',
    title: 'Illustrated Portrait',
    price: 'Rs. 599.00',
    original: 'Rs. 799.00',
    discount: '30% Off',
  },
];

const GiftSlider = () => {
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState('forward');

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        const swiper = swiperRef.current.swiper;
        if (direction === 'forward') {
          if (swiper.isEnd) {
            setDirection('backward');
            swiper.slidePrev();
          } else {
            swiper.slideNext();
          }
        } else {
          if (swiper.isBeginning) {
            setDirection('forward');
            swiper.slideNext();
          } else {
            swiper.slidePrev();
          }
        }
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="w-full px-4 py-10 bg-pink-50">
      <h2 className="text-3xl font-bold mb-6">🎁 Gifts That You Like</h2>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        navigation={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-3 h-full">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
              </div>
              <div className="mt-3">
                <h3 className="text-base font-semibold line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm line-through">{product.original}</p>
                <p className="text-pink-600 font-bold">{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GiftSlider;
