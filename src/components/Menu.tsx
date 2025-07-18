"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon'

const links=[
    {id:1,title:"HomePage",url:"/"},
    {id:2,title:"Menu",url:"/menu"},
    {id:3,title:"Working Hours",url:"/"},
    {id:4,title:"Contact",url:"/"},
]

export default function Menu() {
    const [open,setOpen]=useState(false)
    const user=false
  return (
    
    <div>
      { !open ? ( <Image src="/open.png" alt="" width={20} height={20} onClick={() => setOpen(true)} className='cursor-pointer'/>):
          <Image src="/close.png" alt="" width={20} height={20} onClick={() => setOpen(false)} className='cursor-pointer'/>
        }
        {open && <div className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex justify-center items-center text-3xl flex-col gap-8 w-full'>
            {
                links.map(item=>(
                    <Link onClick={() => setOpen(false)} key={item.id} href={item.url}>{item.title}</Link>
                ))
            }
            {!user ?(<Link onClick={() => setOpen(false)} href="/login">Login</Link>):
            <Link onClick={() => setOpen(false)} href="/orders">Orders</Link>}
            <Link onClick={() => setOpen(false)} href='/cart'><CartIcon /></Link>
        </div>}
    </div>
  )
}
 