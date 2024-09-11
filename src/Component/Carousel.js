import React, { useState, useEffect  } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Array de imágenes (puedes reemplazarlas con tus propias URLs o rutas locales)
  const images = [
    '/images/CarouselDiseños/producto2.jpeg',
    '/images/CarouselDiseños/producto16.jpeg',
    '/images/CarouselDiseños/producto19.jpeg',
    '/images/CarouselDiseños/producto37.jpeg',
    '/images/CarouselDiseños/producto44.jpeg',
    '/images/CarouselDiseños/producto48.jpeg',
    '/images/CarouselDiseños/producto57.jpeg',
    '/images/CarouselDiseños/producto67.jpeg',
    '/images/CarouselDiseños/producto69.jpeg',
    '/images/CarouselDiseños/producto15.jpeg',
    '/images/CarouselDiseños/producto31.jpeg',
    '/images/CarouselDiseños/producto35.jpeg',
    '/images/CarouselDiseños/producto42.jpeg',
    '/images/CarouselDiseños/producto49.jpeg',
    '/images/CarouselDiseños/producto51.jpeg'
  ];

  // Cambia automáticamente de imagen cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // 3000ms = 3 segundos

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  


  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
      setIsAnimating(false);
    }, 300); // Duration of animation (500ms)
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="carousel-container">
    {images.map((image, index) => (
      <div
        key={index}
        className={`carousel-image ${
          index === currentIndex
            ? "current"
            : index === (currentIndex + 1) % images.length
            ? "slide-right"
            : "slide-left"
        }`}
        style={{ backgroundImage: `url(${image})`, backgroundSize:"cover" }}
      />
    ))}

      {/* Botón Anterior */}
      <div className="buttonRight">
        <button onClick={handlePrev}>
          <ArrowBackIcon/>
        </button>

      </div>

      {/* Botón Siguiente */}
      <div className="buttonLeft">
        <button onClick={handleNext} style={{color: "rgba(182, 78, 165, 0.922)"}}>
          <ArrowForwardIcon/>
        </button>

      </div>
    </div>
  );
}

export default CustomCarousel;