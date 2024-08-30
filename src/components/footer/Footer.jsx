import React from 'react'
import fb from "../../assets/fb.svg"
import insta from "../../assets/insta.svg"
import linked from "../../assets/linked.svg"
import x from "../../assets/x.svg"
import shortline from "./shortline.svg"
import Austin from "./Austin.svg"

const Footer = () => {
    return (
        <div>
            <div><img className=' font-poppines mt-7 mb-7 ml-[34vw] ' src={shortline} alt="short-line" />
                <h2 className='font-semibold text-customRed ml-[39vw] size-16 text-6xl'>Contact.</h2>
                <p className='font-poppines text-xl text-center ml-56 mr-56 mt-5'>Truth is a deep kindness that teaches us to be content in our everyday life and share with the people the same happiness. the feeling of sunday is the same everywhere: heavy, melancholy, standing still.</p>
                <img className='ml-[39vw] mt-10 mb-10\ size-60' src={Austin} alt="Austin" />

            </div>
            <div className='flex gap-5 ml-[41vw] mb-10'>
                <img src={fb} alt="fb" />
                <img src={insta} alt="insta" />
                <img src={x} alt="x" />
                <img src={linked} alt="linkedin" />

            </div>

            <div><h5 className=' font-poppines  ml-[5vw]'>© 2021 AbbVie Inc. . All rights reserved</h5></div>
        </div>
    )
}

export default Footer