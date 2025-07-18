"use client"

import Countdown from "react-countdown";


const endingDate=new Date("2025-07-28");
export default function CountDown() {
  return (
   <Countdown className="font-bold text-5xl text-yellow-300" date={endingDate}/>
  )
}
