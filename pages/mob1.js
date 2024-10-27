import React from 'react'
import Image from 'next/image'
import coat from '../public/mcoat.png'
import laptop from '../public/mlap.png'
import headpone from '../public/mhead.png'
export default function mob1() {
  return (
    <div class="flex bg-white justify-start flex-nowrap overflow-scroll max-w-full">
        
  <div class="h-44 border-[1px] border-gray-400">
  <div className='border-[#cfcfcf] w-44'>
            <div className='flex justify-center'>
            <Image className='cursor-pointer hover:scale-105 hover:duration-500' src={coat} alt='image'/>
            </div>
            <h4 className='text-center'>Smart watches</h4>
            <div className='flex justify-center'>
            <div className='text-[#EB001B] mt-1 bg-[#FFE3E3] text-center font-semibold pb-1 w-16 rounded-2xl'>-25%</div>
            </div>
          </div>
  </div>
  <div class=" border-[1.5px] border-gray-400">
  <div className='border-[#cfcfcf] w-44 border-0.5px]'>
            <div className='flex justify-center'>
            <Image className='cursor-pointer hover:scale-105 hover:duration-500' src={headpone} alt='image'/>
            </div>
            <h4 className='text-center'>Smart watches</h4>
            <div className='flex justify-center'>
            <div className='text-[#EB001B] mt-1 bg-[#FFE3E3] text-center font-semibold pb-1 w-16 rounded-2xl'>-25%</div>
            </div>
          </div>
  </div>
  <div class=" border-[1px] border-gray-400">
  <div className='border-[#cfcfcf] w-44'>
            <div className='flex justify-center'>
            <Image className='cursor-pointer hover:scale-105 hover:duration-500' src={laptop} alt='image'/>
            </div>
            <h4 className='text-center'>Smart watches</h4>
            <div className='flex justify-center'>
            <div className='text-[#EB001B] mt-1 bg-[#FFE3E3] text-center font-semibold pb-1 w-16 rounded-2xl'>-25%</div>
            </div>
          </div>
  </div>
</div>

  )
}
