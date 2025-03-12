import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import "./cursol.css";

const flickityOptions = {
  wrapAround: true,        // Infinite loop
  autoPlay: 2000,          // Auto slide every 2s
  pauseAutoPlayOnHover: true,
  prevNextButtons: true,   // Show navigation buttons
  pageDots: true,          // Show dots for navigation
  freeScroll: false,       // Snaps to slides
  draggable: true,         // Allows swiping
};

const FlickityCarousel = () => {
    const images = [
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
        "https://static.vecteezy.com/ti/photos-gratuite/p1/29360891-une-petit-vert-lezard-seance-sur-haut-de-une-arbre-bifurquer-generatif-ai-gratuit-photo.jpg"
      ];
      
  return (
    <div className="carousel-container">
      <Flickity className="gallery" options={flickityOptions}>
       {images.map((i)=>(
        <div className="gallery-cell">
            <div className="gallery-card" style={{  backgroundImage:`url(${i})`}}>
            </div></div>
       ))}
      </Flickity>
    </div>
  );
};

export default FlickityCarousel;
