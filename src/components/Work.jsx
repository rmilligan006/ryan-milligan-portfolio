import React from "react";
import myAngular from "../assets/myflix-angular.png";
import myFlix from "../assets/myflix.png";
import Netflix from "../assets/Netflix.png";
import meet from "../assets/meet.png";
import todolist from "../assets/todolist.png";
import travel from "../assets/travel.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#1594c7] ">
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${myAngular})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                <p className="mt-2 p-2">My Flix</p>
                <p className="ml-1"> Angular Application</p>
                <p className="text-xs ml-1 mr-1 ">
                  The app displays a welcome view where users will be able to
                  either log in or register an account. Once authenticated, the
                  user should now view all movies. Upon clicking on a particular
                  movie, users will be taken to a single movie view, where
                  additional movie details will be displayed.
                </p>
              </span>
              <div className="pt-2 text-center">
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
            style={{ backgroundImage: `url(${myFlix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                <p className="mt-1 p-2">My Flix</p>
                <p className="ml-1"> React JS Application</p>
                <p className="text-xs ml-1 mr-1 ">
                  myFlix is a single page app that uses state routing and a
                  responsive UI library for a smooth experience. This app
                  provides a list of movies from a dedicated API that was
                  created in a earlier project. The Api's database allows users
                  to view the information about the movies, Directors and Genres
                  within the movie cards.
                </p>
              </span>
              <div className="text-center">
                <a href="https://rmilligans-movie-app.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/myFlix-client">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 ease-in duration-300"
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
              <div className="pt-2 text-center">
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
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 ease-in duration-300"
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
            style={{ backgroundImage: `url(${todolist})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 ease-in duration-300"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                <p className="ml-1">To Do List</p>
                <p className="ml-1">Javascript Application</p>
                <p className="text-xs ml-1 mr-1 ">
                  A simple project built with jQuery it allows the user to Add
                  and remove a item from the list. Mark existing item on the
                  list as done. Change the items list order
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="https://rmilligan006.github.io/To-do-list/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/rmilligan006/To-do-list">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${travel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 ease-in duration-300"
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
