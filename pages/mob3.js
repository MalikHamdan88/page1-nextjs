import React from 'react'
import Image from 'next/image'
import img1 from '../public/image 22.png'
import img2 from '../public/image 32.png'
import img3 from '../public/image 23.png'
export default function mob1() {
  return (
    <>
    <div className='flex bg-white mt-2 h-12 justify-center'>
    <h2 className='text-xl mr-20 font-semibold pt-2'>Consumer electronics</h2>
    </div>
    <div class="flex bg-white justify-start flex-nowrap overflow-scroll max-w-full">
        
  <div class="h-44 border-[1px] border-gray-400">
  <div className='border-[#cfcfcf] w-44'>
            <div className='flex justify-center'>
            <Image className='cursor-pointer hover:scale-105 h-[98px] w-24 mt-4 hover:duration-500' src={img1} alt='image'/>
            </div>
            <h4 className='text-center'>Smart watches</h4>
            <div className='flex justify-center'>
            <div className=' mt-1 text-[#6f6f6f] whitespace-nowrap  text-center font-semibold pb-1 rounded-2xl'>From USD 19</div>
            </div>
          </div>
  </div>
  <div class=" border-[1.5px] border-gray-400">
  <div className='border-[#cfcfcf] w-44 border-0.5px]'>
            <div className='flex justify-center'>
            <Image className='cursor-pointer hover:scale-105 h-[90px] mt-4 w-20 hover:duration-500' src={img2} alt='image'/>
            </div>
            <h4 className='text-center'>Smart watches</h4>
            <div className='flex justify-center'>
            <div className=' mt-1 text-[#6f6f6f] whitespace-nowrap  text-center font-semibold pb-1 rounded-2xl'>From USD 19</div>
            </div>
          </div>
  </div>
  <div class=" border-[1px] border-gray-400">
  <div className='border-[#cfcfcf] w-44'>
            <div className='flex justify-center'>
            <Image className='cursor-pointer hover:scale-105 h-[98px] w-24 mt-3 hover:duration-500' src={img3} alt='image'/>
            </div>
            <h4 className='text-center'>Smart watches</h4>
            <div className='flex justify-center'>
            <div className=' mt-1 text-[#6f6f6f] whitespace-nowrap  text-center font-semibold pb-1 rounded-2xl'>From USD 19</div>
            </div>
          </div>
  </div>
</div>
<div className='flex bg-white h-12 justify-center'>
    <h2 className='text-xl text-blue-600 mr-[124px] cursor-pointer font-semibold pt-2'>Source now &gt;</h2>
    </div>
    </>

  )
}
