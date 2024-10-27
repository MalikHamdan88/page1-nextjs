import React from 'react'
import Image from 'next/image'
import laptop from '../public/mlap.png'
import img1 from '../public/1img.png'
import img2 from '../public/2img.png'
export default function mob1() {
  return (
    <>
    <div className='flex bg-white mt-2 h-12 justify-center'>
    <h2 className='text-xl mr-24 font-semibold pt-2'>Home and outdoor</h2>
    </div>
    <div class="flex bg-white justify-start flex-nowrap overflow-scroll max-w-full">
        
  <div class="h-44 border-[1px] border-gray-400">
  <div className='border-[#cfcfcf] w-44'>
            <div className='flex justify-center'>
            <Image className='cursor-pointer hover:scale-105 mt-2 hover:duration-500' src={img1} alt='image'/>
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
            <Image className='cursor-pointer hover:scale-105 hover:duration-500' src={laptop} alt='image'/>
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
            <Image className='cursor-pointer hover:scale-105 mt-6 hover:duration-500' src={img2} alt='image'/>
            </div>
            <h4 className='text-center'>Smart watches</h4>
            <div className='flex justify-center'>
            <div className=' mt-1 text-[#6f6f6f] whitespace-nowrap  text-center font-semibold pb-1 rounded-2xl'>From USD 19</div>
            </div>
          </div>
  </div>
</div>
<div className='flex bg-white h-12 justify-center'>
    <h2 className='text-xl text-blue-600 mr-28 cursor-pointer font-semibold pt-2'>Source now &gt;</h2>
    </div>
    </>

  )
}
