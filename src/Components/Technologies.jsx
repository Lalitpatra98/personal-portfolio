 import React from 'react'
 import { SiReact } from "react-icons/si";
 import { FaHtml5 } from "react-icons/fa6";
 import { FaCss3 } from "react-icons/fa6";
 import { RiJavascriptFill } from "react-icons/ri";
 import { FaBootstrap } from "react-icons/fa";
 import { RiTailwindCssFill } from "react-icons/ri";
 const Technologies = () => {
   return (
     <div className='pb-20'>
            <h2 className='text-center m-20  font-mono font-bold text-xl' data-aos="fade-up" data-aos-duration="1000">Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-10'>
                <div data-aos="zoom-in-right">
                <SiReact className='text-pink-600 text-7xl'/>
                </div>
                <div data-aos="zoom-in-right">
                <FaHtml5  className='text-red-600  text-7xl'/>
                </div>
                <div data-aos="zoom-in-right">
                <FaCss3  className='text-blue-700  text-7xl'/>
                </div>
                <div data-aos="zoom-in-left">
                <RiJavascriptFill  className='text-yellow-300  text-7xl'/>
                </div>
                <div data-aos="zoom-in-left">
                <FaBootstrap  className='text-[blue]  text-7xl'/>
                </div>
                <div data-aos="zoom-in-left">
                <RiTailwindCssFill  className='text-blue-200  text-7xl'/>
                </div>
                

                
            </div>
     </div>
   )
 }
 
 export default Technologies