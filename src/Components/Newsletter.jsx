import React from 'react'

function Newsletter() {
  return (
    <div className='w-full text-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='my-4 lg:col-span-2'>
          <h1 className='text-2xl font-bold py-2 md:text-4xl sm:text-3xl'>Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 outline-none rounded-md text-black flex w-full' type="email" placeholder='Enter Email' />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[180px] ml-4 my-6 px-6 py-3'>Notify Me</button>
          </div>
          <p>We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a] underline cursor-pointer'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter