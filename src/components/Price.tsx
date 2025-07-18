"use client"
import React, { useEffect, useState } from 'react'

type Props={
    price:number;
    id:number;
    option?:{title:string , additionalPrice:number}[]
}
export default function Price({price , id , option} : Props) {
    const[total,setTotal]=useState(price);
    const[quantity,setQuantity]=useState(1);
    const[selected,setSelected]=useState(0);



    useEffect(()=>{
        setTotal(quantity * (option? price+option[selected].additionalPrice : price));
    },[quantity,selected,option,price])
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2> <br />
      {/* Option Container */}
      <div className='flex gap-4 '>
        { option?.map((opt,index) => (
        <button key={opt.title} className=' min-w-[6rem] p-2 ring-1 ring-red-500 rounded-b-md cursor-pointer' style={{
            background:selected === index ? "rgb(248 113 113)":"white",
            color:selected===index ? "white":"red"
        }}
        onClick={()=>setSelected(index)}
        >{opt.title}</button>
      ))} 
      </div>
        
      {/* Quantity And Add Btn */}
      <div className='flex justify-between items-center'>
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
            <span>Quantity</span>
            <div className='flex gap-4 items-center'>
                <button onClick={()=>setQuantity(prev=>(prev>1 ? prev-1 : 1))} className=' cursor-pointer'>{"<"}</button>
                <span>{quantity}</span>
                <button onClick={()=>setQuantity(prev=>(prev<9 ? prev+1 : 9))} className=' cursor-pointer'>{">"}</button>
            </div>
        </div>
        <button className='uppercase w-65 bg-red-500 text-white p-3 ring-1 ring-red-500 rounded-b-md'>Add To Cart</button>
      </div>
    </div>
  )
}
