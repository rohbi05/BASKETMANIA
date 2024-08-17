import React, { useEffect, useState } from "react";


const images = [
  "https://img.goodfon.com/original/3840x2400/4/c0/wallpaper-sport-logo-basketball-nba-cleveland-cavaliers-1.jpg",
  "https://img.goodfon.com/original/3840x2400/6/63/wallpaper-sport-logo-basketball-nba-new-orleans-pelicans-1.jpg",
  "https://wallpapers.com/images/hd/philadelphia-76ers-flag-zu8n2sqbern5peel.jpg",
  "https://images.alphacoders.com/971/971206.jpg",
  "https://wallpaper.forfun.com/fetch/dd/dde2a5dd12b621f2957c6588010919cd.jpeg",
  "https://wallpapers.com/images/hd/phoenix-suns-on-metal-screen-mesh-t7deflifg8y3uopp.jpg",
  "https://images8.alphacoders.com/971/971316.jpg",
  "https://images.alphacoders.com/971/971220.jpg",
  "https://wallpapers.com/images/hd/golden-state-warriors-logo-pqz9td3l5vcief7h.jpg",
];

const TeamLogoSlider = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const delay = 3000;

  useEffect(() => {
    if (isHovered) return;
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div 
      className="slideshow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        className="arrow left-arrow" 
        aria-label="Previous slide" 
        onClick={handlePrevClick}
      >
        &#10094;
      </button>
      <div
        className="slideshowSlider"
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {images.map((image, i) => (
          <div key={i} className="slide">
            <img className="img" src={image} alt={`Slide ${i}`} />
          </div>
        ))}
      </div>
      <button 
        className="arrow right-arrow" 
        aria-label="Next slide" 
        onClick={handleNextClick}
      >
        &#10095;
      </button>
      <div className="btns">
        {images.map((_, id) => (
          <div
            key={id}
            className={`btn${index === id ? " active" : ""}`}
            onClick={() => setIndex(id)}
            aria-label={`Slide ${id + 1}`}
            role="button"
            tabIndex={0}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TeamLogoSlider;
