import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

export default function Navbar() {
    const user=false
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between border-b-2 border-red-500 uppercase lg:px-20 xl:px-40 '>
         {/* Left Links */}
        <div className='hidden md:flex gap-4 flex-1'>
            <Link href="/">HomePage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
        {/* Logo */}
        <div className='text-xl md:font-bold flex-1 md:text-center'>
            <Link href='/'>Massimo</Link>
        </div>
        {/* Mobile Menu */}
        <div className='md:hidden z-50'>
           <Menu/>
           </div>
           {/* Right Links */}
           <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
            <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md '>
                <Image src="/phone.png" alt='Phone Icon' width={20} height={20}/>
                <span>01288304637</span>
            </div>
            {!user ? <Link href="/login">Login</Link> : <Link href="/orders">Orders</Link>}
            <CartIcon/>
        
        </div>
    </div>
  )
}
