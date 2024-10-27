import React from 'react'
import Image from 'next/image'
import mask from '../public/mak.png'
export default function mob4() {
  return (
    <div className='flex justify-center'>
      <div>
        <div className='mt-2'>
            <Image className='w-[100vw]' src={mask} alt='image'/>
            <div className='-mt-[124px] ml-10'>
            <h1 className='text-xl  text-white font-semibold '>An easy way to send <br /> requests to all suppliers</h1>
            <button className='text-white active:bg-blue-400 text-sm rounded-md font-semibold px-3 py-2 pt-1 bg-blue-500 mt-4 ml-1 cursor-pointer'>Send inquiry</button>
            </div>
        </div>
      </div>
    </div>
  )
}
