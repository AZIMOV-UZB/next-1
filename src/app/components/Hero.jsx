import React from 'react'

import Image from 'next/image'
import hero from "@/assets/hero.svg"
export const Hero = () => {
  return (
    <div className="container mx-auto PX-2 bg-zinc-100">
    <Image
          className="w-full h-[600px] "
          src={hero}
          alt=""
         
        />

    </div>
  )
}
