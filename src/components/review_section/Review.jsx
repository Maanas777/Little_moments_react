import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Review = () => {
  return (
    <div className="container mx-auto my-10">
      <section className="mb-4  border-b flex-row items-center relative">
  <h2 className="text-6xl font-extrabold mb-4 tracking-tighter">REVIEWS</h2>
  <button className="bg-blue-500 flex items-center gap-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute right-14">
          Write a Review
          <FaLongArrowAltRight />
        </button>
  <div className="flex items-center ml-4 gap-4">
    <span className="text-4xl font-extrabold mr-1 tracking-tighter">5.0</span>
    <div>
      <span className="text-yellow-500">★</span>
      <span className="text-yellow-500">★</span>
      <span className="text-yellow-500">★</span>
      <span className="text-yellow-500">★</span>
      <span className="text-yellow-500">★</span>
      <p className="font-bold text-gray-400">1,289 reviews</p>
    </div>
  
  </div>
</section>


      <section className="mb-4 border-b pb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold mb-2">LAILA JOHN <p className=" text-gray-400">
            Mumbai</p></h3>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold mb-2 flex gap-4 px-2">
              {" "}
              <div>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
              </div>
              The best out there!
            </h1>
            <p>
              Little Moments has been an absolute game-changer for me when it
              comes to finding unique events near me. I've always been a foodie
              and an avid traveler, and this platform has never failed to
              surprise me with its array of diverse events.
            </p>
          </div>
        </div>

        <div>
        <p className="font-bold text-gray-700">May 12, 2021</p>
        </div>
      </section>

      <section className="mb-4 border-b pb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold mb-2">MATT DAMON <p className=" text-gray-400">
            Delhi</p></h3>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold mb-2 flex gap-4">
              {" "}
              <div>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
              </div>
              A Must-Have for Event Enthusiasts !
            </h1>
            <p>
              Little Moments has been an absolute game-changer for me when it
              comes to finding unique events near me. I've always been a foodie
              and an avid traveler, and this platform has never failed to
              surprise me with its array of diverse events.
            </p>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">May 12, 2021</p>
        </div>
      </section>

  
      <section className="mb-4 border-b pb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold mb-2 text-zinc-900">MELISA DUNBAR <p className=" text-gray-400">
            Bangloore</p></h3>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold mb-2 flex gap-4">
              {" "}
              <div>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
                <span className="text-gray-950">★</span>
              </div>
              Local Events at Your Fingertips
            </h1>
            <p>
              Little Moments has been an absolute game-changer for me when it
              comes to finding unique events near me. I've always been a foodie
              and an avid traveler, and this platform has never failed to
              surprise me with its array of diverse events.
            </p>
          </div>
        </div>

        <div>
        <p className="font-bold text-gray-700">May 12, 2021</p>
        </div>
      </section>
      <section className="mt-4 flex justify-end">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mx-2">
        <IoIosArrowDropleftCircle />
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mx-2">
        <IoIosArrowDroprightCircle />
        </button>
       
      </section>

    </div>
  );
};

export default Review;
