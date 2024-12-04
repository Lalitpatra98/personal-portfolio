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
            <h2 className='text-center m-20'>Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-10'>
                <div >
                <SiReact className='text-pink-600 text-7xl'/>
                </div>
                <div>
                <FaHtml5  className='text-red-600  text-7xl'/>
                </div>
                <div>
                <FaCss3  className='text-blue-700  text-7xl'/>
                </div>
                <div>
                <RiJavascriptFill  className='text-yellow-300  text-7xl'/>
                </div>
                <div>
                <FaBootstrap  className='text-[blue]  text-7xl'/>
                </div>
                <div>
                <RiTailwindCssFill  className='text-blue-200  text-7xl'/>
                </div>
                

                
            </div>
     </div>
   )
 }
 
 export default Technologies