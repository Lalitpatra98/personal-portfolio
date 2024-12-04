import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 ">
      <div>
        <img src="" alt="logo" />
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
