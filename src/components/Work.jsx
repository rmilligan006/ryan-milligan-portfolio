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
                <p className="p-2">My Flix</p>
                <p className="ml-1"> Angular Application</p>
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
                <p className="mt-1 p-2">Book finder</p>
                <p className="ml-1"> React JS Application</p>
                <p className="text-xs  ">
                  Bookstore finder is a single page React app, that uses the
                  google books api. it allows users to search for books, either
                  by the title of the book, or by the author.
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
                <p className="mt-3 pl-1">NetFlix Clone</p>
                <p className="ml-1"> React JS Application</p>
                <p className="text-xs ml-1 mr-1 ">
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
                <p className="ml-1">Meet</p>
                <p className="ml-1"> React JS Application</p>
                <p className="text-xs ml-1 mr-1 ">
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
              <span className="text-2xl font-bold text-white tracking-wider">
                <p className="ml-1">Recipe Buddy</p>
                <p className="ml-1">React Application</p>
                <p className="text-xs ml-1 mr-1 ">
                  A simple Food Recipe app using React. This application uses
                  functional react components, and react-router-dom. Users can
                  search from TheMealDB api to find their next craving.
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://recipe-buddy.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/react-recipeApp">
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
