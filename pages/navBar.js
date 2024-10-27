import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import profile from '../public/profile.png'
import message from '../public/message.png'
import order from '../public/orders.png'
import cart from '../public/cart.png'
import down from '../public/down-arrow.png'
export default function navBar() {
  return (
    <>
      <div className='bg-white w-[100vw] flex justify-center h-[70px] border-b-[0.1px] border-[#cdcdcd]'>
        <div className='flex space-x-32 container justify-center'>

          <div>
            <Image className='mt-2.5 cursor-pointer' src={logo} alt='Image' />
          </div>

          <div className='flex mt-4'>
            <input className='border-blue-400 border-[2px] rounded-l-md h-8 w-80 pl-2 pb-1' placeholder='Search' type="text" />
            <div className='flex font-semibold border-blue-400 border-[2px] cursor-pointer h-8 border-l-[0px] w-32 pl-2'>
              <p>All Category</p>
              <div><Image className='h-6 cursor-pointer mt-0.5' src={down} alt='Image' /></div>
            </div>
            <button className='w-20 h-8 pb-1 rounded-r-md active:bg-blue-400 bg-blue-500 text-white'>Search</button>
          </div>

          <div className='flex space-x-7 mt-4'>
            <div>
              <Image className='ml-1.5 cursor-pointer' src={profile} alt='Image' />
              <p className='text-[#686868] font-semibold mt-0.5 text-xs'>Profile</p>
            </div>
            <div>
              <Image className='ml-4 cursor-pointer' src={message} alt='Image' />
              <p className='text-[#686868] font-semibold mt-0.5 text-xs'>Messages</p>
            </div>
            <div>
              <Image className='ml-1.5 cursor-pointer' src={order} alt='Image' />
              <p className='text-[#686868] font-semibold -mt-0.5 text-xs'>Orders</p>
            </div>
            <div>
              <Image className=' cursor-pointer' src={cart} alt='Image' />
              <p className='text-[#686868] font-semibold mt-1 text-xs'>Cart</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
