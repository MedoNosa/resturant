import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

export default function Offer() {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]' style={{
      backgroundImage: 'url(/offerBg.png)',
    }}>
      {/* Text Container */}
      <div className='flex-1 flex flex-col  justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl  '>Special Offer</h1>
        <p className='text-white xl:text-xl'>Get the best deals on our exclusive products. Limited time only!</p>
        <CountDown/>
        <button className='bg-red-500 text-white py-2 px-6 rounded-b-md'>Order Now</button>
      </div>
      {/* Image Container */}
      <div className='flex-1 w-full relative md:h-full'>
        <Image  src="/offerProduct.png" alt='' fill className='object-contain hover:rotate-[60deg] transition-all duration-500'/>
      </div>
    </div>
  )
}
