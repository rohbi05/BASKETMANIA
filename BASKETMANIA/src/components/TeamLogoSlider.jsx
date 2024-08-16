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
  const delay = 2500;

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((index1) => (index1 === images.length - 1 ? 0 : index1 + 1)),
      delay
    );

    return () => {};
  }, [index]);

  console.log(images);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img className="img" src={image} alt="" />
          </div>
        ))}
      </div>
      <div className="btns">
        {images.map((_, id) => (
          <div
            key={id}
            className={`btn${index === id ? "active" : ""}`}
            onClick={() => {
              setIndex(id);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TeamLogoSlider;
