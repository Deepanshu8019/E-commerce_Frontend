import React from 'react'
import { LiaGreaterThanSolid } from "react-icons/lia";

function SideBar() {
    return (
        <div>
            <div className='ml-32 mt-10  justify-between'>
                <ul className='inline-flex flex-start flex-col gap-4 font-medium'>
                    <li className='w-60 flex gap-24 cursor-pointer'>
                        <span> Woman’s Fashion</span> 
                        <span><LiaGreaterThanSolid /></span>
                    </li>

                    <li className='flex gap-32 cursor-pointer'>
                        <span>Men’s Fashion</span> 
                        <span className='-ml-2'><LiaGreaterThanSolid /></span>
                    </li>

                    <li className='cursor-pointer'>Electronics</li>
                    <li className='cursor-pointer'>Home & Lifestyle</li>
                    <li className='cursor-pointer'>Medicine</li>
                    <li className='cursor-pointer'>Sports & Outdoor</li>
                    <li className='cursor-pointer'>Baby’s & Toys</li>
                    <li className='cursor-pointer'>Groceries & Pets</li>
                    <li className='cursor-pointer'>Health & Beauty</li>
                </ul>
            </div>
            <div className='h-96 w-px top-36 mt-2 bg-slate-700 ml-[26rem] absolute'></div>
        </div>
    )
}

export default SideBar
