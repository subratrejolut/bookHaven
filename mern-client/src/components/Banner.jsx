import React from "react";
import { Search } from "lucide-react";
import BannerCard from "./BannerCard/BannerCard";

const Banner = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-gradient-to-r from-purple-600 to-indigo-600  items-center justify-between">
      {/* {Left} */}
      <div className="w-full flex flex-col space-y-7 px-10">
        <h2 className="text-xl sm:text-3xl lg:text-5xl text-white font-bold font-poppins">
          Buy and Sell Your Books{" "}
          <span className="text-yellow-400">for the Best Price</span>
        </h2>
        <p className="text-white sm:text-sm text-[8px] font-poppins">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos
          quam tenetur obcaecati? Asperiores ullam sit vero ad exercitationem id
          omnis rerum quia dolores qui, sapiente numquam officiis reprehenderit
          nesciunt.
        </p>
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search books..."
            className="font-poppins w-full h-11 bg-indigo-500 text-white placeholder-indigo-200 rounded-md py-1 px-4 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-200" />
        </div>
      </div>
      {/* {Right} */}
      <div className="w-full">
        <BannerCard />
      </div>
    </div>
  );
};

export default Banner;
