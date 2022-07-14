import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import mongo from "../assets/mongo.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#191919] text-white">
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
            <img className="w-10 mx-auto" src={html} alt="HTML Icon" />
            <p className="my-4 ">HTML</p>
            <div className="pb-2">
              <p>Experience: Intermediate</p>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img className="w-10 mx-auto" src={css} alt="CSS Icon" />
            <p className="my-4 ">CSS</p>
            <div className="pb-2">
              <p>Experience: Intermediate</p>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img className="w-10 mx-auto" src={github} alt="Github Icon" />
            <p className="my-4 ">Github</p>
            <div className="pb-5">
              <p>Experience: Intermediate</p>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img className="w-10 mx-auto" src={mongo} alt="Node Icon" />
            <p className="my-4 ">MongoDB</p>
            <div className="pb-5">
              <p>Experience: Beginner</p>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img className="w-10 mx-auto" src={react} alt="React Icon" />
            <p className="my-4 ">React</p>
            <div className="pb-5">
              <p>Experience; Beginner</p>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#03568E] rounded-3xl pt-4">
            <img
              className="w-10 mx-auto"
              src={javascript}
              alt="Javascript Icon"
            />
            <p className="my-4 ">Javascript</p>
            <div className="pb-5">
              <p>Experience; Beginner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
