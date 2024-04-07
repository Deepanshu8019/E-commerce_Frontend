import React from 'react'
import '../Item.css'
import Star from '../../public/Images/Star.png'

function Item({item}) {
  return (
    <div className='flex flex-col gap-2 '>
      <div className='image cursor-pointer'>
        <img  src={item.image} alt="" />
      </div>
        <div className='item_name'>
            <p>{item.name}</p>
        </div>
        <div className='flex gap-4 '>
            <span className='price'>${item.requce_price}</span>
            <span className='reduced_price'>${item.price}</span>
        </div>
        <div className='flex gap-2 '>
            <span className=''><img src={Star} className='Star' alt="" /></span>
            <span className=''><img src={Star} className='Star' alt="" /></span>
            <span className=''><img src={Star} className='Star' alt="" /></span>
            <span className=''><img src={Star} className='Star' alt="" /></span>
            <span className=''><img src={Star} className='Star' alt="" /></span>
            <span className='rating'>({item.rating})</span>
        </div>


    </div>
  )
}

export default Item;
