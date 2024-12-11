import React from 'react'
import img1 from '../assets/thumnail/img1.png'
import img2 from '../assets/thumnail/img2.png'

const Project = () => {
  return (
    <div className=''>
    <div className=' flex flex-col justify-center items-center w-72 mx-auto'>

        <h1 className=' font-mono font-bold text-xl' data-aos="fade-up " data-aos-duration="1000">My projects</h1>
        <div className='w-[350px] md:w-[450px] flex items-center gap-8 m-10 pl-7' data-aos="zoom-in-up">
            <a href="https://react-ecommmerce.vercel.app/" target="_blank" className='w-[620px]'><img src={img1} alt="img1" /> </a>
           <div>
            <h1 className='font-bold'>E-commerce Website</h1>
                <p className='text-xs'>The e-commerce website is a modern, fully responsive platform built using React.js and styled with Tailwind CSS along with the Tailwind UI library for animation i used aos animate library.</p>
                <p className='text-xs'>Key features :-Responsive , Darkmode </p>

           </div>
        </div>
        <div className='w-[350px] md:w-[450px] flex items-center gap-8 m-10' data-aos="zoom-in-up">
            <a href="https://restaurant-site-lac.vercel.app/" target='_blank' className='w-96'><img src={img2} alt="img1" /> </a>
            <div >
                <h1 className='font-bold'>Restaurant website</h1>
                <p className='text-xs'> Modern Restaurant website , fully responsive platform built react.js  for style i used tailwind css. </p>
                <p className='text-xs'>I used  React-router for navigation  pages and using material tailwind ui library </p>

            </div>
        </div>
     

    </div>
    </div>
  )
}

export default Project