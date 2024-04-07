import React from 'react'
import Item from './Item';
import './Product.css'

function Products({ products }) {
    let allItems = [];
    console.log("checking");
    console.log(products);
    const getItems = () => {
        // Object.values(products).forEach((item) => {
            products.forEach((item) => {
            allItems.push(item)
        })
        return allItems;
    }

    return (
        <div >
           <div className='w-10/12 flex mx-auto max-w-[1400px] gap-20 m-12 '>{
                getItems().map((item) => {
                    return (<Item key={item.id} item={item} />)
                })
            }
            </div> 

            <div className='w-full flex items-center justify-center '>
                <button className='view_button'>View All Products</button>
            </div>

        </div>
    )
}

export default Products
