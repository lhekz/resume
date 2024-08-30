import React from 'react'
import './portfolio.scss'
import cup from './cup.png'
import door from './door.png'
import flower from './flower.png'
import leave from './leave.png'
import house from './house.png'
const Portfolio = () => {
    return (
        <div id='Portfolio'>
          
            <div className=' font-poppines text-6xl  mb-10'>
                <h2 className='font-normal mb-5 mt-5 '>Our Regular Updated</h2>
                <h2 className =" text-customRed font-semibold"> Portfolio.</h2>

            </div>
            <div className='port'>
                <div className='firsts'>
                    <div><img src={cup} alt="cup-img" /></div>
                </div>
                <div className='seconds' >
                    <img src={flower} alt="im" />
                    <img src={door} alt="img" /></div>
                <div className='seconds'><img src={leave} alt="image" />
                    <img src={house} alt="imags" /></div>
            </div></div>
        
    )
}

export default Portfolio