import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgTwitter } from "react-icons/cg";
import { Link } from "react-scroll";
import navLogo from "../assets/navLogo.png";
import CV from "../assets/Ryan-Milligan-Resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="sticky top-0 z-50 w-full h-[50px] flex justify-between items-center px-4 bg-[#1F4068] text-white">
      <div>
        <img src={navLogo} alt="logo" style={{ width: "120px" }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#147ca5] flex flex-col justify-center items-center"
        }
      >
        <div>
          <img src={navLogo} alt="logo" style={{ width: "120px" }} />
        </div>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={300}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={300}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={300}>
            Work
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={300}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/ryan-milligan-18815820b/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/rmilligan006"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#08211c]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://medium.com/@ryanmilligan006"
            >
              Medium <AiOutlineMedium size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={CV}
              download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1cc8f8bd]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/ryanmil93154449"
              download
            >
              Twitter <CgTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
