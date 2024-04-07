import './App.css'
import React from 'react'
import NavBar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Hero from './Components/Hero';
import Sale from './Components/Sale';
import Sale_Items from './Components/Sale_Items';


function App() {
  return (
    <div className='overflow-hidden'>

      {/* Header */}
      <div className='flex w-screen h-10 justify-center items-center shrink-0 bg-black'>
        <div className='text-white w-auto flex justify-between	mx-20	 text-sm'>
            <span className='w-auto h-5 mr-5'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <div className='w-20 h-6'>Shop Now</div>
        </div>
      </div>

      <NavBar/>

      <div className='flex justify-between mb-40'>
        <SideBar/>
        <Hero/>
      </div>

      <Sale/>

      <Sale_Items/>

    </div>
  )
}

export default App

