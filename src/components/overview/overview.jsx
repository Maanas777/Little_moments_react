import React from "react";
import MapImage from "../../assets/sakPM.png";
import { FaPlusCircle } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="container mx-auto flex">
      <div className="flex-1 pr-8">
        <section className="mb-8 border-b border-gray-950 pb-4 relative">
          <h2 className="text-2xl font-extrabold mb-4 tracking-tighter">OVERVIEW</h2>
          <p className="w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            quam in velit suscipit congue nec sit amet urna. Duis ut semper
            justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            quam in velit suscipit congue nec sit amet urna. Duis ut semper
            justo.
          </p>
          <div className="absolute top-0 right-0 mt-4">
            <FaPlusCircle />
          </div>
        </section>

        <section className="mb-8 flex border-b border-gray-950 pb-4 relative">
          <h2 className="text-2xl font-extrabold mb-4 tracking-tighter">FEATURES</h2>
          <div className="absolute top-0 right-0 mt-4">
            <FaPlusCircle />
          </div>
        </section>

        <section className="mb-8 flex border-b border-gray-950 pb-4 relative">
          <h2 className="text-2xl font-extrabold mb-4 tracking-tighter">LISTING VIDEOS</h2>
          <div className="absolute top-0 right-0 mt-4">
            <FaPlusCircle />
          </div>
        </section>
      </div>

      <div className="flex-1 w">
        <section className="mb-8">
          <h2 className="text-2xl font-extrabold tracking-tighter mb-4">LOCATION</h2>
          <img
            src={MapImage}
            alt="Map"
            className="w-4/5 h-64 rounded-lg shadow-md border border-gray-300"
          />
        </section>
      </div>
    </div>
  );
};

export default Overview;
