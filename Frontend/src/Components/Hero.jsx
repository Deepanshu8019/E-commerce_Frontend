import React from 'react'
import Apple from '../../public/Images/Apple.png'
import Mobile from '../../public/Images/hero.png'
import { FaArrowRight } from "react-icons/fa";

function Hero() {
    return (
        <div>
            <div className='w-[55.75rem] h-[21.5rem]  flex justify-between bg-black mr-32 mt-10 text-white cursor-pointer'>

                {/* Description */}
                <div >

                    <div className='flex items-center leading-snug text-base gap-6 ml-16 absolute mt-12'>
                        <div><img src={Apple} alt="" /></div>
                        <div>iPhone 14 Series</div>
                    </div>

                    <div className='flex flex-col w-72 absolute leading-snug font-semibold text-5xl mt-32 ml-16 tracking-wide'>
                        <span>Up to 10%</span>
                        <span>Off Voucher</span>
                    </div>

                    <div className='flex items-center leading-6	 gap-2 font-medium absolute mt-72 ml-16 text-xl'>
                        <span>Shop Now</span>
                        <span><FaArrowRight /></span>
                        <span className='absolute w-24 h-[2px] mt-[1.5rem]  bg-white'></span>
                    </div>

                    <div className='flex items-center leading-6	 gap-2 font-medium absolute mt-80 ml-96 text-xl'>

                        <span className='h-3 w-3 bg-slate-500 rounded-full'></span>
                        <span className='h-3 w-3 bg-slate-500 rounded-full'></span>
                        <span className='h-3 w-3 bg-orange-500 rounded-full'></span>
                        <span className='h-3 w-3 bg-slate-500 rounded-full'></span>
                        <span className='h-3 w-3 bg-slate-500 rounded-full'></span>
                    </div>

                </div>


                {/* Image */}
                <div>
                    <div className='h-88 w[31rem] flex shrink-0 mt-4'>
                        <img src={Mobile} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
