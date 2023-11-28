import React from "react";
import CardImage1 from "../../assets/card1.jpeg";
import CardImage2 from "../../assets/cae.jpeg";
import CardImage3 from "../../assets/caes.jpeg";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const RelatedActivities = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-7xl font-extrabold mb-4 tracking-tighter ">Related Activities</h2>

      <div className="flex justify-between">
        {/* Card 1 */}
        <div className="max-w-sm relative overflow-hidden rounded shadow-lg border-4 border-black">
        <img className="w-full" src={CardImage1} alt="Card 1" />

        <div className="bg-yellow-500 rounded-full px-4 py-2 absolute top-4 right-6">
          <p className="font-bold">Popular</p>
        </div>

        <div className="px-6 py-4 ">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-500 mr-1" />
              <p className="font-bold">4.9 stars</p>
            </div>
            <p className="font-bold">November 2, 2023</p>
          </div>
          <div className="mt-3">
            <p className="text-lg font-bold">Tsukishima Monja Street</p>
            <p className="font-bold">$22.00</p>
          </div>
          <div className="flex items-center pt-4 gap-1">
            <IoLocationSharp />
            <p className="font-bold">New York, United States</p>
          </div>
          <div className="flex items-center gap-1 mt-4">
            <FaPhoneAlt />
            <p className="font-bold">+216 1234 5655</p>
          </div>
        </div>
      </div>

        {/* Card 2 */}
        <div className="max-w-sm relative overflow-hidden rounded shadow-lg border-4 border-black">
        <img className="w-full" src={CardImage2} alt="Card 1" />

       

        <div className="px-6 py-4 ">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-500 mr-1" />
              <p className="font-bold">4.9 stars</p>
            </div>
            <p className="font-bold">November 2, 2023</p>
          </div>
          <div className="mt-3">
            <p className="text-lg font-bold">Big Bottom Boarders</p>
            <p className="font-bold">$$$</p>
          </div>
          <div className="flex items-center pt-4 gap-1">
            <IoLocationSharp />
            <p className="font-bold">New York, United States</p>
          </div>
          <div className="flex items-center gap-1 mt-4">
            <FaPhoneAlt />
            <p className="font-bold">+216 1234 5655</p>
          </div>
        </div>
      </div>

        {/* Card 3 */}
        <div className="max-w-sm relative overflow-hidden rounded shadow-lg border-4 border-black">
        <img className="w-full" src={CardImage3} alt="Card 1" />

      

        <div className="px-6 py-4 ">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-500 mr-1" />
              <p className="font-bold">5.0 stars</p>
            </div>
            <p className="font-bold">October 4, 2021</p>
          </div>
          <div className="mt-3">
            <p className="text-lg font-bold">Sea Monkeys</p>
            <p className="font-bold">$$$</p>
          </div>
          <div className="flex items-center pt-4 gap-1">
            <IoLocationSharp />
            <p className="font-bold">New York, United States</p>
          </div>
          <div className="flex items-center gap-1 mt-4">
            <FaPhoneAlt />
            <p className="font-bold">+216 1234 5655</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RelatedActivities;
