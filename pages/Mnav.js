import React from 'react'
import Image from 'next/image'
import logo from '../public/logo-colored.png'
import lines from '../public/three-lines.png'
import cart from '../public/shopping_cart.png'
import profile from '../public/person.png'
import search from '../public/search.png'
import mobbg from '../public/mobbg.png'
import timer from '../public/time.png'

export default function mob1(props) {
  return (
    <div className='flex justify-center'>
      <div>
      <div className=' bg-white w-[100vw] h-[157px]'>
      <div className='space-x-[15vw] pt-3 flex justify-center'>
        <div>
          <Image onClick={props.menuHandler} className='mt-2.5 cursor-pointer' src={lines} slot='image'/>
        </div>
        <div>
          <Image className='cursor-pointer' src={logo} alt='logo'/>
        </div>
        <div className='flex space-x-3 mt-1'>
         <div><Image className='cursor-pointer' src={cart} alt='image'/></div>
         <div><Image className='cursor-pointer' src={profile} alt='image'/></div>
        </div>
      </div>
      <div className='flex mt-2 justify-center'>
      <div className='bg-[#f7fbff] w-8 h-10 border-l-[1px] border-y-[1px] flex justify-center rounded-l-md border-[#d6d6d6]'>
      <Image className='min-h-5 max-h-6 mt-[7px]' src={search} alt='img'/>
        </div> 
        <input className='bg-[#f7fbff] text-lg pl-2 border-[1px] pb-0.5 border-r-[#d6d6d6] w-[230px] h-10 rounded-r-md' type="search" placeholder='Search' name="" id="" />
      </div>
      <div className='flex justify-start mt-3 overflow-scroll space-x-1 whitespace-nowrap'>
       <div className='bg-[#EFF2F4] px-3 py-2 pt-1 rounded-md font-semibold text-blue-600'>All category</div>
       <div className='bg-[#EFF2F4] px-3 py-2 pt-1 rounded-md font-semibold text-blue-600'>Gadgets</div>
       <div className='bg-[#EFF2F4] px-3 py-2 pt-1 rounded-md font-semibold text-blue-600'>Clocthes</div>
       <div className='bg-[#EFF2F4] px-3 py-2 pt-1 rounded-md font-semibold text-blue-600'>Accessory</div>
      </div>
      </div>
      <div className='flex justify-center'>
        <div>
      <Image className='w-[100vw]' src={mobbg} alt='image'/>
      <div className='ml-10 -mt-[144px]'>
      <h2 className='text-lg '>Latest trending</h2>
      <h2 className='text-xl -mt-2 font-semibold'>Electronic items</h2>
      <button className='bg-white text-sm rounded-md font-semibold px-3 py-2 pt-1 text-blue-600 mt-4 cursor-pointer'>Learn more</button>
      </div>
        </div>
      </div>  
      <div className='bg-white h-28 flex justify-center'>
      <div className='pt-14 flex justify-center space-x-7 font-semibold '>
        <div>
      <h2 className='text-lg '>Deals and offers</h2>
        <p className='text-xs -mt-1 text-[#7b7b7b]'>Electronic equipments</p>
        </div>
        <div>
          <Image className='w-28 mt-1' src={timer} alt='image'/>
        </div>
        </div> 
      </div>
      </div>
    </div>
  )
}
