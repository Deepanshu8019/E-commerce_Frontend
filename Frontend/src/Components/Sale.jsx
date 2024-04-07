import React from 'react'
// import { useState , useEffect } from 'react'
import '../Sale.css'

function Sale() {
    return (
        <div>
            <div className='ml-32'>
                <div className='flex items-center gap-4 '>
                    <div className='w-5 h-10 bg-red-600 rounded-md '> </div>
                    <span className='font-semibold	text-base leading-5 not-italic text-red-600'>Today’s</span>
                </div>

                <div className='flex gap-40 mt-8'>
                    <div className='flase_sale mt-2'>Flash Sales</div>

                    <div className='flex gap-4'>

                        <div className='flex flex-col'>
                            <span className='units'>Days</span>
                            <span className='time'>03</span>
                        </div>
                        <span className='mt-5 text-xl'>:</span>

                        <div className='flex flex-col'>
                            <span className='units'>Minutes</span>
                            <span className='time'>23</span>
                        </div>
                        <span className='mt-5 text-xl'>:</span>

                        <div className='flex flex-col'>
                            <span className='units'>Hours</span>
                            <span className='time'>19</span>
                        </div>
                        <span className='mt-5 text-xl'>:</span>

                        <div className='flex flex-col'>
                            <span className='units'>Seconds</span>
                            <span className='time'>56</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sale
