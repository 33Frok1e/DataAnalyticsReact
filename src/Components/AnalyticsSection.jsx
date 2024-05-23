import React from 'react'
import Laptop from '../assets/laptop.jpg'

function AnalyticsSection() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop vector Image" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='text-2xl md:text-4xl sm:text-3xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?</p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default AnalyticsSection