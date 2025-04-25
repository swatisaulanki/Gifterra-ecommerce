import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const banners = [
  {
    image:
      'https://t4.ftcdn.net/jpg/07/51/66/05/360_F_751660549_sbBTsejzwpjXlmuoCk66VTQZGO3hztjy.jpg',
    title: 'Unbeatable Summer Deals',
    subtitle: 'Grab up to 50% off on your favorite products!',
  },
  {
    image:
      'https://cdn.vectorstock.com/i/500p/57/56/template-banner-for-online-store-with-shopping-vector-42935756.jpg',
    title: 'Your One-Stop Shop',
    subtitle: 'Latest arrivals just a click away!',
  },
  {
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/006/633/040/small/online-shopping-spring-on-phone-flower-pink-big-sale-banner-marketing-poster-fashion-vector.jpg',
    title: 'Spring Collection 2025',
    subtitle: 'Feel fresh with our new arrivals.',
  },
  {
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf8c5599420499.5f09d760d115b.jpg',
    title: 'Style. Comfort. You.',
    subtitle: 'Trendy fashion at unbeatable prices.',
  },
];

const Slider = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-[400px] md:h-[500px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={banner.image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                <h2 className="text-2xl md:text-5xl font-bold mb-2 animate-fadeIn">
                  {banner.title}
                </h2>
                <p className="text-sm md:text-lg animate-fadeIn delay-200">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
