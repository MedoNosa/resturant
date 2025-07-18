import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'CART PAGE',
};
export default function CartPage() {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row '>
      {/* Product Container */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40' style={{scrollbarWidth: 'none'}}>
        {/* Single Item */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
            <span className=''>Medium</span>
          </div>
          <h1 className='font-bold cursor-pointer'>$10.50</h1>
          <span className=' cursor-pointer'>X</span>
        </div>
        {/* Single Item */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src="/temporary/p7.png" alt='' width={100} height={100}/>
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>P.ARRABBIATA</h1>
            <span className=''>Large</span>
          </div>
          <h1 className='font-bold cursor-pointer'>$20.50</h1>
          <span className=' cursor-pointer'>X</span>
        </div>
        {/* Single Item */}
        <div className='flex items-center justify-between mb-4 '>
          <Image src="/temporary/p5.png" alt='' width={100} height={100}/>
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Bacon</h1>
            <span className=''>Small</span>
          </div>
          <h1 className='font-bold cursor-pointer'>$18.00</h1>
          <span className=' cursor-pointer'>X</span>
        </div>
      </div>
      {/* Payment Container */}
      <div className='h-1/2 p-4 bg-fuchsia-100 flex flex-col justify-center gap-4 lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
        <div className='flex justify-between '>
          <span className=''>Subtotal:3 item</span>
          <span className=''>$49.00</span>
        </div>
        <div className='flex justify-between '>
          <span className=''>Service Cost</span>
          <span className=''>$0.00</span>
        </div>
        <div className='flex justify-between '>
          <span className=''>Delivery Cost</span>
          <span className='text-green-700 uppercase'>Free!</span>
        </div>
        <hr className='my-2'/>
        <div className='flex justify-between '>
          <span className='font-bold uppercase'>Total(incl-vat)</span>
          <span className='font-bold uppercase'>$49.00</span>
        </div>
          <button className='bg-red-500 text-white p-3 rounded-b-md w-1/2 self-end'>
          Checkout Now
          </button> 
      </div>
    </div>
  )
}
