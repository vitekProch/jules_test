'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Základní styly

// Předpokládané cesty k obrázkům - uživatel je musí nahrát do public/uploads/reviews/
const reviewImages = [
  { id: 1, src: '/uploads/reviews/1.jpg', alt: 'Recenze 1' },
  { id: 2, src: '/uploads/reviews/2.jpg', alt: 'Recenze 2' },
  { id: 3, src: '/uploads/reviews/3.jpg', alt: 'Recenze 3' },
];

const ReviewsCarousel: React.FC = () => {
  if (reviewImages.length === 0) {
    return <p className="text-center text-gray-500">Žádné recenze k zobrazení.</p>;
  }

  }

  // Definice vlastních šipek
  const CustomArrow = ({ onClick, direction, disabled }: { onClick: () => void; direction: 'prev' | 'next'; disabled: boolean }) => {
    const isPrev = direction === 'prev';
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-label={isPrev ? 'Předchozí slide' : 'Následující slide'}
        className={`
          absolute top-1/2 -translate-y-1/2 z-10
          p-2 rounded-full shadow-md transition-all duration-300
          bg-black/30 hover:bg-black/50 text-white
          disabled:opacity-30 disabled:cursor-not-allowed
          ${isPrev ? 'left-2 md:left-4' : 'right-2 md:right-4'}
        `}
        // Pro zobrazení šipek pouze při hoveru na celém karuselu, pokud by to bylo žádoucí:
        // 'opacity-0 group-hover:opacity-100' (vyžaduje 'group' na rodiči karuselu)
      >
        {isPrev ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        )}
      </button>
    );
  };

  return (
    // Odstraněn vnější flex kontejner, který byl pro šipky vně. Vrátíme se k jednodušší struktuře.
    // 'group' class na tomto divu umožní skrývání/zobrazování šipek na hover, pokud se rozhodneme implementovat.
    <div className="w-full max-w-[730px] mx-auto overflow-hidden relative group">
      <Carousel
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false} // Tečky nebudou
        swipeable={true}
        emulateTouch={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <CustomArrow onClick={onClickHandler} direction="prev" disabled={!hasPrev} />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <CustomArrow onClick={onClickHandler} direction="next" disabled={!hasNext} />
          )
        }
      >
        {reviewImages.map((image) => (
          <div key={image.id} className="flex justify-center items-center h-[650px] bg-gray-100">
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewsCarousel;
