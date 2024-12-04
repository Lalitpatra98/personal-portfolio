import React from "react";
import image from "../assets/img.jpg";
const Hero = () => {
  return (
    <div className="flex flex-col items-center  md:flex-row-reverse  p-10   w-full mx-auto">
      <div className=" w-1/2  mb-10 ">
        <img
          src={image}
          alt="IMAGE"
          className="w-full sm:w-1/2  sm:h-64 lg:h-80 mx-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="   sm:w-1/2">
        <div className="text-center">
          <h1 className="pb-2 text-4xl tracking-tighter sm:text-5xl">
            LALIT PATRA
          </h1>
          <h3 className="tracking-tighter">FRONT-END DEVELOPER</h3>
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            asperiores eveniet sint quas expedita recusandae alias aperiam
            ducimus. Tenetur, repellat?
          </p>
          <a
            href=""
            className="bg-white p-3 rounded-xl text-stone-800  text-xs   "
          >
            Download resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
