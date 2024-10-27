import React from 'react'
import Image from 'next/image'
import leftimg from '../public/Group 969.png'
import lamp from '../public/image 94.png'
import kitchen from '../public/5.png'
import sofa from '../public/1.png'
import watch from '../public/spot.png'
import mixer from '../public/9.png'
import binder from '../public/8.png'
import home from '../public/rasm.png'
import cofee from '../public/4.png'

export default function comp4() {
    return (
        <div className='flex justify-center'>
            <div className='container flex justify-center'>
                <div className='flex justify-center container bg-white h-[240px] w-[1160px] mt-5 rounded-md border-[1px] border-[#d9d9d9]'>
                    <div>
                        <Image className='h-[240px]' src={leftimg} alt='image' />
                        <h2 className='font-semibold text-2xl ml-5 -mt-[225px]'>Home and <br /> outdoor</h2>
                        <button className='bg-white ml-5 rounded-md font-semibold px-3 py-2 pt-1 mt-5 '>Source now</button>
                    </div>

                    <div>
                        <div className='flex'>
                            <div className='px-6 py-1 border-r-[#d6d6d6] border-[1px]'>
                                <h4 className='font-semibold text-xl'>Soft chairs</h4>
                                <div className='flex space-x-12'>
                                    <div className='font-semibold text-[#848484]'>From <p className='whitespace-nowrap'>USD 19</p></div>
                                    <Image className=' cursor-pointer hover:scale-105 hover:duration-500' src={sofa} alt='image' />
                                </div>
                            </div>
                            <div className='px-6 py-1 border-r-[#d6d6d6] border-[1px]'>
                                <h4 className='font-semibold text-xl'>Sofa & chair</h4>
                                <div className='flex space-x-12'>
                                    <div className='font-semibold text-[#848484]'>From <p className='whitespace-nowrap'>USD 19</p></div>
                                    <Image className=' cursor-pointer hover:scale-105 hover:duration-500' src={lamp} alt='image' />
                                </div>
                            </div>
                            <div className='px-6 py-1 border-r-[#d6d6d6] border-[1px]'>
                                <h4 className='font-semibold text-xl'>Kitchen dishes</h4>
                                <div className='flex space-x-12'>
                                    <div className='font-semibold text-[#848484]'>From <p className='whitespace-nowrap'>USD 19</p></div>
                                    <Image className=' cursor-pointer hover:scale-105 hover:duration-500' src={kitchen} alt='image' />
                                </div>
                            </div>
                            <div className='px-6 py-1 border-b-[#d6d6d6] border-[1px]'>
                                <h4 className='font-semibold text-xl'>Smart watches</h4>
                                <div className='flex space-x-12'>
                                    <div className='font-semibold text-[#848484]'>From <p className='whitespace-nowrap'>USD 19</p></div>
                                    <Image className=' cursor-pointer hover:scale-105 hover:duration-500' src={watch} alt='image' />
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='px-6 py-1 border-r-[#d6d6d6] border-[1px]'>
                                <h4 className='font-semibold text-xl'>Kitchen mixer</h4>
                                <div className='flex space-x-12'>
                                    <div className='font-semibold text-[#848484]'>From <p className='whitespace-nowrap'>USD 100</p></div>
                                    <Image className=' cursor-pointer hover:scale-105 hover:duration-500' src={mixer} alt='image' />
                                </div>
                            </div>
                            <div className='px-6 py-1 border-r-[#d6d6d6] border-[1px]'>
                                <h4 className='font-semibold text-xl'>Blenders</h4>
                                <div className='flex space-x-12'>
                                    <div className='font-semibold text-[#848484]'>From <p className='whitespace-nowrap'>USD 39</p></div>
                                    <Image className=' cursor-pointer hover:scale-105 hover:duration-500' src={binder} alt='image' />
                                </div>
                            </div>
                            <div className='pl-6 pr-6 py-1 mr-3 border-r-[#d6d6d6] border-[1px]'>
                                <h4 className='font-semibold text-xl'>Home appliance</h4>
                                <div className='flex space-x-12'>
                                    <div className='font-semibold text-[#848484]'>From <p className='whitespace-nowrap'>USD 19</p></div>
                                    <Image className=' cursor-pointer hover:scale-105 hover:duration-500' src={home} alt='image' />
                                </div>
                            </div>
                            <div className='px-6 py-1 mr-1'>
                                <h4 className='font-semibold text-xl'>Coffee maker</h4>
                                <div className='flex space-x-12'>
                                    <div className='font-semibold text-[#848484]'>From <p className='whitespace-nowrap'>USD 10</p></div>
                                    <Image className=' cursor-pointer hover:scale-105 hover:duration-500' src={cofee} alt='image' />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
