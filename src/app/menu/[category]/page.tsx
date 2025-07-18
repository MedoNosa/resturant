import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryPage() {
  return (
    <div className='flex flex-wrap text-red-500 '>
      {pizzas.map(item=>(
        <Link href={`/product/${item.id}`} key={item.id} className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group hover:bg-fuchsia-100 transition-all duration-500'>
          {/* Image Container */}
          {item.img && 
          <div className='relative h-[80%] hover:rotate-[60deg] transition-all duration-400 '>
          <Image src={item.img} alt="" fill className=' object-contain'/>

          </div>
}
          {/* Text Container */}
          <div className='flex items-center justify-between font-bold '>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h1 className='group-hover:hidden text-xl'>${item.price}</h1>
            <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2  rounded-b-md'>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}
