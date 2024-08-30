import React from 'react'
import "./Nav.scss"
import logo from "../../assets/logo.svg"
import fb from "../../assets/fb.svg"
import insta from "../../assets/insta.svg"
import linked from "../../assets/linked.svg"
import x from "../../assets/x.svg"
import ornament from "./ornament.svg"
import header from "./header.png"
const Nav = () => {
  return (
    
<nav id='Navbar '>


{/* @media */}

{/* <!-- Hamburger Menu Icon -->
<div className="md:hidden">
    <button id="hamburger" className="flex flex-col space-y-1.5">
      <span className="block w-8 h-1 bg-black"></span>
      <span className="block w-8 h-1 bg-black"></span>
      <span className="block w-8 h-1 bg-black"></span>
    </button>
</div> */}





<ol className=' hidden md:flex  font-poppines  space-x-52 text-center items-center text-lg    '>
<img  src={logo} alt="logo" />
  <div className='flex space-x-3.5 '><li className=' text-customRed  md: flex-row space' >Home</li>
  <li className=''>Contributors</li>
  <li className='font-poppines ' >About me</li>
  <li className='font-poppines ' >Services</li>
  <li className='font-poppines ' >Portfolio</li>
  <li className='font-poppines '>Contact</li></div>
  <li className='font-poppines  bg-black text-white px-3 ' >Portfolio Here</li>
</ol>

<div className="md:hidden  flex-col space-y-4 mt-4 font-poppines text-lg mb-10 " id="mobile-menu ">
<img  src={logo} alt="logo" />
    <li className="text-customRed">Home</li>
    <li>Contributors</li>
    <li>About me</li>
    <li>Services</li>
    <li>Portfolio</li>
    <li>Contact</li>
    <li className="font-poppines bg-black text-white px-3">Portfolio Here</li>
    
  </div> 



<ol className=' ml-40 font-poppines text-xl text-left  items-center' >

<li className='font-poppines max-w-[15vw]  mb-5 mt-20' >Hola! I’m <br/>

<span className='text-customRed font-semibold font-poppines ' > Justin Vaccaro</span></li>
<li className='text-5xl font-semibold '>Creative</li>
<li className='text-5xl font-semibold ml-10 mb-10' >Designer <span className='text-customRed font-semibold items-center mb-10'>.</span></li>
<li><p className='max-w-[22vw] mb-10 text-sm text-justify font-normal '>Since creative designers often interact with creative teams, managers and clients, they need strong communication skills.</p></li>
<div className='flex gap-6 h-7 mb-5' > <img src={fb} alt="fb" />
 <img src={insta} alt="insta" />
 <img src={x} alt="x" />
 <img src={linked} alt="linkedin" />
</div>
<li className='h-13 max-w-44 bg-customRed text-center text-white text-lg font-semibold md: mb-10'> CV Here </li>
<img className="absolute max-w-[25vw] max-h-[100vh] top-[24vh] left-[64vw] " src={header} alt="header" />

</ol>
<img className= "hidden md:flex -mt-[30vh] max-w-[45vw] max-h-[40.vh] ml-60 " src={ornament} alt="ornament" />




 




 




</nav>
  










  )
}

export default Nav