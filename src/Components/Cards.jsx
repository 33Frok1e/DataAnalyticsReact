import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {/* //Card1 */}
            <div className='w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-300 mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b border-gray-300 mx-8'>1 Granted User</p>
                    <p className='py-2 border-b border-gray-300 mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[180px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            {/* //Card 2 */}
            <div className='w-full shadow-lg bg-zinc-100 flex flex-col p-4 my-8 md:my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20  mx-auto mt-[-3rem] bg-transparent' src={Double} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-4xl font-bold'>$239</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-300 mx-8 mt-8'>2 TB Storage</p>
                    <p className='py-2 border-b border-gray-300 mx-8'>2 Granted User</p>
                    <p className='py-2 border-b border-gray-300 mx-8'>Send up to 20 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[180px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            {/* //Card 3 */}
            <div className='w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Multiple User</h2>
                <p className='text-center text-4xl font-bold'>$349</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-300 mx-8 mt-8'>5 TB Storage</p>
                    <p className='py-2 border-b border-gray-300 mx-8'>5 Granted User</p>
                    <p className='py-2 border-b border-gray-300 mx-8'>Send up to 50 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[180px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>

        </div>
    </div>
  )
}

export default Cards