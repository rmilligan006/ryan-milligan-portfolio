import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#0A455C] text-white">
      {/* Container */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500 ">
            Skills
          </p>
          <p className="py-4 ">
            // These are some of the technologies i've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 pb-2">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img className="w-20 mx-auto" src={html} alt="HTML Icon" />
            <p className="my-4 ">HTML</p>
            <p className="pb-2">Intermediate</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img className="w-20 mx-auto" src={css} alt="CSS Icon" />
            <p className="my-4 ">CSS</p>
            <p className="pb-2">Intermediate</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img className="w-20 mx-auto" src={github} alt="Github Icon" />
            <p className="my-4 ">Github</p>
            <p className="pb-2">Intermediate</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img className="w-20 mx-auto" src={node} alt="Node Icon" />
            <p className="my-4 ">Node</p>
            <p className="pb-2">Intermediate</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img className="w-20 mx-auto" src={react} alt="React Icon" />
            <p className="my-4 ">React</p>
            <p className="pb-2">Beginner </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img
              className="w-20 mx-auto"
              src={javascript}
              alt="Javascript Icon"
            />
            <p className="my-4 ">Javascript</p>
            <p className="pb-2">Beginner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
