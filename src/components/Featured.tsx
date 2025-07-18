import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function Featured() {
  return (
    <div className='w-screen overflow-x-scroll  text-red-500 ' style={{
      scrollbarWidth: 'none',
    }}>
      {/* wrapper */}
     <div className='w-max flex '>
      {/* Single Item */}
     {featuredProducts.map(item=>(

    
      <div  key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
        {/* Image Container */}
        {item.img && <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
          <Image src={item.img} alt="" fill className='object-contain'/>
        </div>}
        {/* Text Container */}
        <div className='flex-1 flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl '>{item.title}</h1>
          <p style={{textAlign:"center"}} className='p-4 2xl:p-8'>{item.desc}</p>
          <span className='text-xl font-bold'>${item.price}</span>
          <button className='bg-red-500 text-white p-2 rounded-b-md'>Add To Cart</button>
        </div>
      </div> ))}
     </div>
    </div>
  )
}
