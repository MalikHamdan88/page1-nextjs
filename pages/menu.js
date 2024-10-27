import React from 'react'
import Image from 'next/image'
import avatar from '../public/Avatar1.png'
import i1 from '../public/i1.png'
import i2 from '../public/i2.png'
import i3 from '../public/i3.png'
import i4 from '../public/i4.png'
import i5 from '../public/i5.png'
import i6 from '../public/i6.png'
import i7 from '../public/i7.png'
export default function menu(props) {
  return (
    <div className='justify-center shadow-2xl shadow-black flex absolute left-0 top-0 w-[250px] h-[640px] bg-white'>
        <div>
      <div className='bg-[#EFF2F4] w-[250px] h-[120px]'>
        <div className='ml-4 pt-4'>
        <div className='flex space-x-40'>
        <Image className='cursor-pointer' src={avatar} alt='avatar'/>
        <icon onClick={props.menuHandler} className='font-semibold -mt-3.5 cursor-pointer text-2xl'>x</icon>
        </div>
        <h4 className='text-lg mt-1 cursor-pointer'>Sign in | Register</h4>
        </div>
      </div>
        <div className='flex ml-4 mt-4 space-x-4'>
            <Image className='cursor-pointer h-6 mt-0.5' src={i1} alt='home'/>
            <p className='cursor-pointer text-lg'>Home</p>
        </div>
        <div className='flex ml-4 mt-4 space-x-4'>
            <Image className='cursor-pointer h-6 mt-0.5' src={i2} alt='home'/>
            <p className='cursor-pointer text-lg'>Categories</p>
        </div>
        <div className='flex ml-4 mt-4 space-x-4'>
            <Image className='cursor-pointer h-6 mt-0.5' src={i3} alt='home'/>
            <p className='cursor-pointer text-lg'>Favorites</p>
        </div>
        <div className='flex ml-4 mt-4 space-x-4'>
            <Image className='cursor-pointer h-6 mt-0.5' src={i4} alt='home'/>
            <p className='cursor-pointer text-lg'>My orders</p>
        </div>
        <div className='flex justify-center'>
        <hr className='mt-4 w-[230px]'/>
        </div>
        <div className='flex ml-4 mt-4 space-x-4'>
            <Image className='cursor-pointer h-6 mt-0.5' src={i5} alt='home'/>
            <p className='cursor-pointer text-lg'>English | USD</p>
        </div>
        <div className='flex ml-4 mt-4 space-x-4'>
            <Image className='cursor-pointer h-6 mt-0.5' src={i6} alt='home'/>
            <p className='cursor-pointer text-lg'>Contact us</p>
        </div>
        <div className='flex ml-4 mt-4 space-x-4'>
            <Image className='cursor-pointer h-6 mt-0.5' src={i7} alt='home'/>
            <p className='cursor-pointer text-lg'>About</p>
        </div>
        <div className='flex justify-center'>
        <hr className='mt-4 w-[230px]'/>
        </div>
        <div className='flex ml-14 mt-4 space-x-4'>
            <p className='cursor-pointer text-lg'>User agreement</p>
        </div>
        <div className='flex ml-14 mt-4 space-x-4'>
            <p className='cursor-pointer text-lg'>Partnership</p>
        </div>
        <div className='flex ml-14 mt-4 space-x-4'>
            <p className='cursor-pointer text-lg'>Privacy policy</p>
        </div>
        </div>
    </div>
  )
}
