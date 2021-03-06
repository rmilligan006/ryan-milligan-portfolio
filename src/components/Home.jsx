import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#191919] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#F7CCAC]">Hi my name is: </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#FDF6EC]">
          Ryan Milligan
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#fbc471]">
          I'm a full stack developer
        </h2>
        <p className="text-white py-4 max-w-[700px]">
          I'm a front end web developer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently I'm
          focused on building responsive front-end web applications while
          continuing learning back-end technologies
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-500 hover:scale-125 hover:border-slate-600 ease-in-out duration-500">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
