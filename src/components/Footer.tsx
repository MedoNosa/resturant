import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='h-12 md:h-24 text-red-500 p-4 flex justify-between items-center lg:px-20 xl:px-40 uppercase'>
      <Link href="/" className='font-bold'>Massimo</Link>
      <p>@ ALL RIGHT RESRVED.</p>
    </div>
  )
}
