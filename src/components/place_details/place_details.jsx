import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaPhone, FaStar, FaHeart, FaShareAlt } from "react-icons/fa";

const PlaceDetails = () => {
  return (
    <div className="container mx-auto my-3 relative">
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden border border-black relative">
        <div className="px-6 py-4">
          <div className="flex items-center absolute top-0 right-0">
            <div className="flex items-center mr-4">
              <div className="border border-gray-950 rounded-md p-2">
                <FaHeart className="text-gray-950 mr-1" />
              </div>
            </div>
            <div className="border border-gray-950 rounded-md p-2 my-2 mx-2">
              <FaShareAlt className="mr-1 " />
            </div>
          </div>

          <div className="flex items-center absolute top-0 my-3 font-bold">
            <FaStar className="flex items-center" />
            <p className="flex items-center ml-2">4.9 stars&nbsp;&nbsp;&nbsp;<span className="text-slate-700">(251 reviews)</span></p>
          </div>

          <div className="font-bold text-3xl mb-2 tracking-tighter my-8">
            TSUKISHMA MONJA STREET
          </div>
          <p className="text-gray-950 text-base">
            <p className="font-bold">
              {" "}
              Users can easily find the perfect experiences to suit their
              interests, Users can easily find the perfect
            </p>
            <p className="font-bold text-gray-950">
              {" "}
              experiences to suit their interests.
            </p>
          </p>

          <div className="flex gap-8 items-center my-4">
            <p className="flex items-center">
              <MdLocationPin className="mr-2" />
              Texas, United States
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" />
              +216 1234 5655
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
