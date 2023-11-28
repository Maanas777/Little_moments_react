// src/components/Images.js

import React from "react";

// Importing dummy images from Lorem Picsum

import Image1 from "../../assets/monja.jpeg";
import Image2 from "../../assets/monja2.jpeg";
import Image3 from "../../assets/monja5.jpeg";
import Image4 from "../../assets/monja3.jpeg";
import MainImage from "../../assets/aflo_RVEA004907.jpg";
import "./images.css";

const Images = () => {
  return (
    <div className="flex container mx-auto my-3 ">
      {/* Main Image */}
      <div className="flex-1 relative">
  <img
    src={MainImage}
    alt="Main Image"
    className="h-full object-cover mr-8 rounded-lg custom-main-image"
  />

  {/* Popular text in the top right */}
  <div className="absolute top-4 right-4 bg-yellow-500 rounded-full p-2">
    <p className="text-gray-900 font-bold">Popular</p>
  </div>

  {/* Place text in the bottom left */}
  <div className="absolute bottom-3 left-6">
    <p className="text-white font-bold text-3xl tracking-tighter">PLACE</p>
  </div>
</div>


      {/* Grid of four images */}
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-4 h-full">
          <img
            src={Image1}
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg overflow-hidden"
          />
          <img
            src={Image2}
            alt="Image 2"
            className="w-full h-full object-cover rounded-lg overflow-hidden"
          />
          <img
            src={Image3}
            alt="Image 3"
            className="w-full h-full object-cover rounded-lg overflow-hidden"
          />
          <img
            src={Image4}
            alt="Image 4"
            className="w-full h-full object-cover rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
