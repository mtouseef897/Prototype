import Image from 'next/image'
import React from 'react'
import ImgPlaceholder from '/public/placeholder.png'
import { Bebas_Neue } from "next/font/google";

const font_Bebas_Neue = Bebas_Neue({ subsets: ["latin"],weight:"400"});

const RoomSetups = () => {
  return (
    <div className={`flex items-center justify-center flex-wrap gap-8 ${font_Bebas_Neue.className} text-[26px] leading-8 mt-[71px] mb-4`}>
        <div className='flex flex-col items-center justify-center gap-2'>
            <div className='w-[232px] h-[232px] border border-white border-opacity-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-2xl'>
                <Image 
                src={ImgPlaceholder}
                className='w-[88px] h-[88px] opacity-10'
                />
            </div>
            <div>PLATEA</div>
            <div>(675 pax)</div>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
        <div className='w-[232px] h-[232px] border border-white border-opacity-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-2xl'>
                <Image 
                src={ImgPlaceholder}
                className='w-[88px] h-[88px] opacity-10'
                />
            </div>
            <div>BANCHI DI SCUALA </div>
            <div>(550 pax)</div>
        </div>


        <div className='flex flex-col items-center justify-center gap-2'>
        <div className='w-[232px] h-[232px] border border-white border-opacity-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-2xl'>
                <Image 
                src={ImgPlaceholder}
                className='w-[88px] h-[88px] opacity-10'
                />
            </div>
            <div>BANQUETING </div>
            <div>(368 pax)</div>
        </div>
    </div>
  )
}

export default RoomSetups