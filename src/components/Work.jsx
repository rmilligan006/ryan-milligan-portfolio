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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${myAngular})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                <p className="px-2">My Flix</p>
                <p className="ml-1 px-1"> Angular Application</p>
                <p className="text-xs ml-2 mr-2 ">
                  The app displays a welcome view where users will be able to
                  either log in or register an account. Once authenticated, the
                  user should now view all movies. Upon clicking on a particular
                  movie, users will be taken to a single movie view, where
                  additional movie details will be displayed.
                </p>
              </span>
              <div className="pb-2 text-center">
                <a href="https://myflix-in-angular.vercel.app/welcome">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/myflix-in-angular">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bookfinder})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                <p className="mt-1 px-2">InTime Photography</p>
                <p className="ml-1 px-1"> Next JS Application</p>
                <p className="text-xs px-2">
                  InTime Photography is a simple single page Next Js
                  application. It uses the Image component that Next JS provides
                  as well the internal routing system. Allowing the images to
                  take advantage of lazy loading. With a image slider that also
                  lazily loads the images as well.
                </p>
              </span>
              <div className=" pb-2 text-center">
                <a href="https://book-finder-gules.vercel.app/">
                  <button className="text-center rounded-lg precipe-app px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/bookstore-finder">
                  <button className="text-center rounded-lg precipe-app px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
                <p className="mt-3 px-2">NetFlix Clone</p>
                <p className="ml-1 px-1"> React JS Application</p>
                <p className="text-xs px-2">
                  This is another version of the myFlix movie database that I
                  have created. Instead of using a user created database I've
                  taken the data from the TMDB api. Using Firebase
                  Authentication gives the application login functionality.
                  Allowing us to store user specific data with React front-end
                  and a Firebase styled back-end.
                </p>
              </span>
              <div className=" pb-2 text-center">
                <a href="https://netflix-app-phi.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/netflix-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${meet})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                <p className="ml-1 px-2">Meet</p>
                <p className="ml-1 px-1"> React JS Application</p>
                <p className="text-xs ml-1 mr-1  px-1">
                  Meet is a serverless, progressive web application(PWA) built
                  with React using a test-driven development(TDD) technique. The
                  application uses the Google Calendar API to fetch upcoming
                  events.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://rmilligan006.github.io/meet/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/meet">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${recipeapp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-100 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-xl font-bold text-white tracking-wider">
                <p className="px-2">Watch This</p>
                <p className="px-1">React Application</p>
                <p className="text-xs px-1">
                  A Movie databse app built with React, and Material UI. This
                  application allows users to see the top trending movies and tv
                  shows. The hottest movies, and tv shows, and allows users to
                  search for a movie or tv show. When a movie/show is selected a
                  modal will open up giving a brief description of the
                  movie/show, a carousel of the leading actors, and a button
                  that opens up a trailer for the movie on youtube.
                </p>
              </span>
              <div className=" text-center">
                <a href="https://watch-this-two.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/fancy-movie-db">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
                <p className="ml-1">Travel</p>
                <p className="ml-1"> React JS Application</p>
                <p className="text-xs ml-1 mr-1 ">
                  This app was built as a demo for a front-end travel website in
                  react JS. It is a fully animated website using custom CSS. The
                  Dependencies used were, "React-Icons", Smooth Scroll",
                  "React-responsive-Carousel".
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-travel-page.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/react-travel-page">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
