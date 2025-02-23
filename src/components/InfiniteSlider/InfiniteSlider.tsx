import React from 'react';
import './InfiniteSlider.css';

interface InfiniteSliderProps {
  images: string[];
  speed?: number;
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ 
  images,
  speed = 20 // seconds for one complete slide
}) => {
  return (
    <div className="slider">
      <div 
        className="slide-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Double the images to create seamless loop */}
        {[...images, ...images].map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
