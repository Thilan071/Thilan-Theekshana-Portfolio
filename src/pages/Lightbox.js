import React from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

// Lightbox component to display images in a modal with navigation
const Lightbox = ({ images, photoIndex, setPhotoIndex, onClose }) => {
  // Function to go to the next image
  const nextImage = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      {/* Close button */}
      <button 
        onClick={onClose} 
        className="absolute top-5 right-5 text-white text-3xl"
      >
        <FaTimes />
      </button>
      {/* Previous image button */}
      <button 
        onClick={prevImage} 
        className="absolute left-5 text-white text-3xl"
      >
        <FaArrowLeft />
      </button>
      {/* Display the current image */}
      <img 
        src={images[photoIndex]} 
        alt="" // Empty alt for decorative images
        className="max-w-full max-h-full" 
      />
      {/* Next image button */}
      <button 
        onClick={nextImage} 
        className="absolute right-5 text-white text-3xl"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Lightbox;
