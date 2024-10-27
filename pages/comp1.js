import React from 'react'
import Image from 'next/image'
import threeline from '../public/three-lines.png'
import down from '../public/down-arrow.png'
import flag1 from '../public/flag1.png'
export default function navbarB() {
  return (
    <div className='flex justify-center bg-white w-[100vw] h-12 border-b-[0.1px] border-[#cdcdcd]'>
      <div className='flex space-x-[298px] mt-2 justify-center'>
        <div className='flex space-x-7 font-semibold'>
          <div className='flex cursor-pointer'>
            <Image className='h-3 mt-2 mr-2' src={threeline} alt='image' />
            <h4>All category</h4>
          </div>
          <h4 className='cursor-pointer'>Hot offers</h4>
          <h4 className='cursor-pointer'>Gift boxes</h4>
          <h4 className='cursor-pointer'>Projects</h4>
          <h4 className='cursor-pointer'>Menu item</h4>
          <div className=' flex cursor-pointer'>
            <h4>Help</h4>
            <Image className='h-5 mt-1 ' src={down} alt='image' />
          </div>
        </div>

        <div className='font-semibold flex justify-center space-x-10'>
          <div className=' flex cursor-pointer'>
            <h4 className='whitespace-nowrap'>English, USD</h4>
            <Image className='h-5 mt-1 ' src={down} alt='image' />
          </div>
          <div className=' flex cursor-pointer'>
            <h4 className='whitespace-nowrap'>Ship to</h4>
            <Image className='h-5 mt-1 mx-1' src={flag1} alt='image' />
            <Image className='h-5 mt-1 ' src={down} alt='image' />
          </div>
        </div>

      </div>
    </div>
  )
}
