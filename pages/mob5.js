import React from 'react'
import Image from 'next/image'
import image1 from '../public/121.png'
import image2 from '../public/122.png'
import image3 from '../public/123.png'
import image4 from '../public/124.png'
export default function mob5() {
  return (
    <>
    <div className='flex mt-2 h-12 justify-center'>
    <h2 className='text-xl mr-24 font-semibold pt-5'>Recommended items</h2>
    </div>
    <div className='flex justify-center'>
        <div>
        <div className='flex space-x-3 mt-3'>
      <div className='bg-white w-36 h-[218px]  rounded-md border-[1px] border-[#cfcfcf]'>
       <div className='flex mt-4 justify-center'><Image src={image1} alt='image'/></div> 
        <div className='ml-2'>
            <h1 className='text-lg mt-1 font-semibold'>$10.30</h1>
            <p className='text-[#999] text-xs'>T-shirts with multiple <br /> colors, for men</p>
        </div>
      </div>
      <div className='bg-white w-36 h-[218px]  rounded-md border-[1px] border-[#cfcfcf]'>
       <div className='flex mt-4 justify-center'><Image src={image2} alt='image'/></div> 
        <div className='ml-2'>
            <h1 className='text-lg mt-1 font-semibold'>$10.30</h1>
            <p className='text-[#999] text-xs'>T-shirts with multiple <br /> colors, for men</p>
        </div>
      </div>
        </div>
        <div className='flex space-x-3 mt-3'>
      <div className='bg-white w-36 h-[218px]  rounded-md border-[1px] border-[#cfcfcf]'>
       <div className='flex mt-4 justify-center'><Image src={image3} alt='image'/></div> 
        <div className='ml-2'>
            <h1 className='text-lg mt-1 font-semibold'>$10.30</h1>
            <p className='text-[#999] text-xs'>T-shirts with multiple <br /> colors, for men</p>
        </div>
      </div>
      <div className='bg-white w-36 h-[218px]  rounded-md border-[1px] border-[#cfcfcf]'>
       <div className='flex justify-center'><Image src={image4} alt='image'/></div> 
        <div className='ml-2'>
            <h1 className='text-lg mt-1 font-semibold'>$10.30</h1>
            <p className='text-[#999] text-xs'>T-shirts with multiple <br /> colors, for men</p>
        </div>
      </div>
        </div>            
        </div>
    </div>
    </>
  )
}
