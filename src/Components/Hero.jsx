import React from "react";
import image from "../assets/picture.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center  md:flex-row-reverse  p-10   w-full mx-auto">
      <div className=" image-center w-1/2  mb-10  " data-aos="fade-left" data-aos-duration="1500">
        <img
          src={image}
          alt="IMAGE"
          className="w-full sm:w-1/2  sm:h-64 lg:h-80 mx-auto rounded-lg shadow-lg"
        />
      </div>

      <div className=" sm:w-1/2">
        <div className="text-pretty ">
          <h1 className="pb-2 text-xl font-semibold tracking-tighter sm:text-2xl text-center  " data-aos="fade-right" data-aos-duration="1500">
            LALIT PATRA
          </h1>
          <h3 className="tracking-tighter text-center" data-aos="fade-right" data-aos-duration="1500">FRONT-END DEVELOPER</h3>
          <p className="p-4 text-xs "data-aos="fade-right" data-aos-duration="1500">
          I am a beginner web developer passionate about creating user-friendly and visually appealing websites. With a growing skill set in HTML, CSS, JavaScript, and modern web development frameworks, I am eager to learn and contribute to exciting projects
            <h3 className="font-semibold my-3  text-xs ">Why Choose Me?</h3>
          I am looking for opportunities to work with innovative companies where I can apply my skills, learn from experienced professionals, and help deliver impactful solutions. My commitment to learning and problem-solving ensures I bring value to every project I contribute to.
            <h3 className="font-semibold my-3  text-xs ">Let’s Work Together!</h3>
            I am enthusiastic about joining a team where I can contribute to meaningful projects while developing my expertise as a web developer. If you’re looking for a motivated individual to help build your next project, I’d love to hear from you!
          </p>
          <a
            href="https://drive.google.com/file/d/1zYoxmVWa6vFLeP-FgvlD4Py9iJcG1Nhq/view?usp=drive_link"
            className="bg-white p-3 rounded-xl text-stone-800  text-xs relative left-4 "
            data-aos="fade-right" 
            data-aos-duration="1500"
          >
            Download resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
