'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import Swiper core and required modules
import { Navigation } from 'swiper/modules';

// Data pro karusel - UŽIVATEL MUSÍ NAHRÁT OBRÁZKY DO public/uploads/categories/
const portfolioItems = [
  { id: 1, src: '/uploads/categories/pary.jpg', category: 'Páry' },
  { id: 2, src: '/uploads/categories/mazlicci.jpg', category: 'Mazlíčci' },
  { id: 3, src: '/uploads/categories/svatby.jpg', category: 'Svatby' },
  { id: 4, src: '/uploads/categories/glamour.jpg', category: 'Glamour/Akty' },
  { id: 5, src: '/uploads/categories/tehotenske.jpg', category: 'Těhotenské' },
  // Přidávám šestou položku pro lepší funkčnost loopu, pokud by bylo málo slidů
  { id: 6, src: '/uploads/categories/rodinne.jpg', category: 'Rodinné' },
];

const PortfolioCarousel: React.FC = () => {
  if (portfolioItems.length === 0) {
    return <p className="text-center text-gray-500">Žádné portfolio k zobrazení.</p>;
  }

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation]}
        modules={[Navigation]}
        navigation={true}
        loop={portfolioItems.length >= 8} // Potřebujeme alespoň 2x max slidesPerView pro plynulý loop
        slidesPerView={1} // Výchozí pro šířky < 550px
        spaceBetween={10}  // Menší mezera pro jeden slide
        breakpoints={{
          // od 550px do 799px
          550: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // od 800px do 1029px
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // od 1030px a více
          1030: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="portfolio-swiper"
      >
        {portfolioItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative aspect-square bg-gray-200">
              <img
                src={item.src}
                alt={`Portfolio fotografie - ${item.category}`}
                className="w-full h-full object-cover" // object-cover vyplní čtverec
              />
              <div
                className="absolute bottom-[15px] left-[15px] right-[15px] bg-white text-black text-center py-2 px-3 rounded-[10px] shadow-md"
              >
                {item.category}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Zde můžeme přidat kontejnery pro vlastní šipky, pokud by výchozí nevyhovovaly */}
      {/* Např. <div className="swiper-button-prev"></div> <div className="swiper-button-next"></div> */}
    </div>
  );
};

export default PortfolioCarousel;
