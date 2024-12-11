import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import logo from '../assets/lp.png'
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 ">
      <div className="bg-white rounded-full p-1">
        <img src={logo} alt="logo"  className="w-12"/>
      </div>
      <div className="flex items-center justify-between gap-2">
        <a href="">
          <FaLinkedinIn />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaXTwitter />
        </a>
        <a href="">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
