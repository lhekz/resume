import React from 'react'
import Behance from './Behance.svg'
import dribble from './dribble.svg'
import Google from './Google.svg'
import uplabs from './uplabs.svg'
import Ddesigns from './Ddesigns.svg'
const Newcontributors = () => {
    return (
        <div>
            <div className='font-poppines '>
                <h2 className='mt-14 text-6xl font-semibold mb-5  ml-9'>Contributors.</h2>
                <p className=''>They support products that simplify and automate decent mechanic processes saving time for activities.</p>
            </div>
            <div className='block ml-44  md:flex gap-16  size-52 ml-60 '>
                <img src={Behance} alt="Behance" />
                <img src={Google} alt="google" />
                <img src={dribble} alt="dribbble" />
            </div>
            <div className='block ml-44 md:flex gap-16 size-52 mt-[-20vh] ml-96 '>
                <img src={uplabs} alt="uplabs" />
                <img src={Ddesigns}alt="Ddesigns" />
            </div>

        </div>
    )
}

export default Newcontributors