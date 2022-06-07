import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import * as Scroll from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1594c7] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#F7CCAC]">Hi my name is: </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#FDF6EC]">
          Ryan Milligan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#E3CAA5]">
          I'm a full stack developer
        </h2>
        <p className="text-[#F8ECD1] py-4 max-w-[700px]">
          I'm a front end web developer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently I'm
          focused on building responsive front-end web applications while
          continuing learning back-end technologies
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-slate-600 hover:border-slate-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
