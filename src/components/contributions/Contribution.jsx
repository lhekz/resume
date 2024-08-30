import React from 'react'
import firsticon from './images/firsticon.svg'
import secondicon from './images/secondicon.svg'
import thirdicon from './images/thirdicon.svg'
const Contribution = () => {
    return (
        <div className='font-poppines '>
            <div className='mt-[46vw] mb-16'>
                <h2 className='text-6xl text-center font-poppins mb-10 '>Services.</h2>
                <p className='ml-20 mr-40 md:text-sm   flex items-center font-normal  ml-80 mr-80 justify-center text-center ' >Our team members are experts in all facets of the design industry including: print design, illustration, branding, identity and more.</p>

            </div>

            <div className=' mb-5 md:flex gap-16 ml-60  '><div>

                <img className=' max-w-20 max-h-20 ml-5 mb-5 ' src={firsticon} alt="ui/ux" />
                <h2 className=' text-poppines font-semibold items-center text-2xl font-poppins mb-5 text-left'>UI/UX Design</h2>
                <p className='ml-4 md:text-gray-600 max-w-52 max-h-20 text-left'>Why money's in that office, right If she start giving me some bullshit about it ain't there someplace or anywhere.</p>
            </div>
                <div className='shadow-md max-h-[130vh] p-5'  >
                    <img className='max-w-20 max-h-20 ml-5 mb-5 mt-6' src={secondicon} alt="web-d" />
                    <h2 className=' font-semibold items-center text-2xl font-poppins mb-5 text-left' >  Web Design</h2>
                    <p className='max-w-52 text-left'>Why money's in that office, right If she start giving me some bullshit about it ain't there someplace or anywhere.</p>

                </div>
                <div>
                    <img className='max-w-20 max-h-20 ml-5 mb-5' src={thirdicon} alt="WP Development" />
                    <h2 className='font-semibold items-center text-2xl font-poppins mb-5 text-left '>WP Developing</h2>
                    <p className='text-gray-600 max-w-52 max-h-20 text-left'>Why money's in that office, right If she start giving me some bullshit about it ain't there someplace or anywhere.</p> 



                </div>


            </div>


        </div>
    )
}

export default Contribution