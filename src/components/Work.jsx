import React from "react";
import myAngular from "../assets/myflix-angular.png";
import bookfinder from "../assets/bookfinder.png";
import Netflix from "../assets/Netflix.png";
import meet from "../assets/meet.png";
import recipeapp from "../assets/recipe-app.png";
import travel from "../assets/travel.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-full md:h-screen text-gray-100 bg-[#191919] pt-4"
    >
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-100 border-yellow-500 ">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(${bookfinder})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                <p className="mx-2 px-1 py-1 text-sm">InTime Photography</p>
                <p className=" mx-2 py-1 text-sm"> Next JS Application</p>
                <p className="text-xs mx-2 py-1">
                  InTime Photography is a simple single page Next Js
                  application. It uses the Image component that Next JS provides
                  as well the internal routing system. Allowing the images to
                  take advantage of lazy loading.
                </p>
              </span>
              <div className=" pb-2 text-center">
                <a href="https://intime-nextjs.vercel.app/">
                  <button className="text-center rounded-lg precipe-app px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/bookstore-finder">
                  <button className="text-center rounded-lg precipe-app px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                <p className="mx-2 py-1 text-sm">RMVGDB</p>
                <p className="mx-2 py-1 text-xs"> React JS Application</p>
                <p className="text-xs mx-2 py-1">
                  The Homepage Displays the latest, most popular, and new and
                  upcoming games. The website was created with React.js, Redux
                  for state management, axios, styled SASS components, and
                  animations from framer motion.
                </p>
              </span>
              <div className=" pb-2 text-center">
                <a href="https://rmvgdb-2-0.vercel.app/">
                  <button className="text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/RMVGDB-2.0">
                  <button className="text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${recipeapp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-xl font-bold text-white tracking-wider">
                <p className="mx-2 py-1 text-xs">Watch This</p>
                <p className="mx-2 py-1 text-xs">React Application</p>
                <p className="text-xs mx-2 py-1">
                  A Movie databse app built with React, and Material UI. This
                  application allows users to see the top trending movies and tv
                  shows. The hottest movies, and tv shows, and allows users to
                  search for a movie or tv show.
                </p>
              </span>
              <div className=" text-center">
                <a href="https://watch-this-two.vercel.app/">
                  <button className="text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/fancy-movie-db">
                  <button className="text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${travel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                <p className="mx-2 py-1 text-xs mb-1">Diamond Steel Roofing</p>
                <p className="mx-2 py-1 text-xs"> React JS Application</p>
                <p className="text-xs mx-2 py-1">
                  This website was built for "Diamond Steel Roofing Company",
                  out of Wingham Ont. The website was out dated and I was tasked
                  with making it modern. It uses ReactJs, Framer-motion,
                  React-Image-Lightbox, and swiper.
                </p>
              </span>
              <div className="pt-1 text-center">
                <a href="https://diamond-roof-website-tzuy.vercel.app/">
                  <button className="text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/diamond-roof-website">
                  <button className="text-center rounded-lg px-2 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
