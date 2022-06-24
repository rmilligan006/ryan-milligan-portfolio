import React from "react";
import ME from "../assets/meagain.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#191919] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi i'm Ryan, nice to meet you. Please take a look around.</p>
            <div className=" w-[70%] ml-3">
              <img
                className="rounded-xl md:ml-24 sm:ml-9"
                src={ME}
                alt="Picture of Ryan Milligan"
              />
            </div>
          </div>
          <div>
            <p>
              I have spent the last fifteen years working in different jobs,
              such as a tire technician, custodian, mold remediator, and
              landscaper. In 2021 I started dabbling with web development during
              the pandemic. What I thought would be something that I would do
              during the pandemic turned into a love for programming. I then
              started taking part-time courses to get more experience under my
              belt. I am now spending my time building projects with React,
              Angular, and Firebase, and learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
