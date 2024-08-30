import React from 'react'
import orna from './orna.svg'
import standingMan from './standingMan.png'
import ropedesign from './ropedesign.svg'
import "./about.scss"


const Aboutme = () => {
  return (
    <div><h2 className='ml-10 md: flex items-center justify-center font-poppines text-6xl font-semibold mt-10 mb-3  '>About me.</h2>
    <p className=' ml-20 mr-20 md:flex items-center font-normal  ml-80 mr-80 justify-center text-center text-sm  ' >I'm Justin Vaccaro and i do web design, Graphic Design, User Experiences. habitant et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.</p>
    <img className=" md:flex size-52 ml-10 " src={orna} alt="orna18" />
<img className="mt-10 md:absolute max-w-[92vw] max-h-[45vw]  mt-[20vh] flex" src={ropedesign } alt="" />
   <img className=' absolute max-w-[35vw] max-h-[45vw] flex items-center ml-[33vw] mt-[-10vh]' src={standingMan} alt="man" />
    </div>
  )
}

export default Aboutme