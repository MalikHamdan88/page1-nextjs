import React from 'react'
import Image from 'next/image'
import watch from '../public/w.jpg'
import laptop from '../public/l.png'
import headphone from '../public/h.png'
import mobile from '../public/image 23.png'
import camera from '../public/c.jpg'
export default function comp3() {
    return (
        <div className='flex justify-center'>
            <div className='container flex justify-center'>
                <div className='flex justify-center container bg-white h-[240px] w-[1160px] mt-5 rounded-md border-[1px] border-[#d9d9d9]'>
                    <div className='mt-4 ml-5'>
                        <h2 className='text-xl font-bold'>Deals and offers</h2>
                        <h2 className='text-base -mt-1 text-[#7f7f7f] font-semibold'>Hygiene equipments</h2>
                        <div className='flex space-x-2 mt-4'>
                            <div className='rounded-md w-14 h-14 flex justify-center text-white bg-gray-600'>
                                <div>
                                    <p className='font-bold text-lg ml-1.5'>04</p>
                                    <p className='text-base -mt-1 text-[#d6d6d6]'>Days</p>
                                </div>
                            </div>
                            <div className='rounded-md w-14 h-14 flex justify-center text-white bg-gray-600'>
                                <div>
                                    <p className='font-bold text-lg ml-1.5'>13</p>
                                    <p className='text-base -mt-1 text-[#d6d6d6]'>Hour</p>
                                </div>
                            </div>
                            <div className='rounded-md w-14 h-14 flex justify-center text-white bg-gray-600'>
                                <div>
                                    <p className='font-bold text-lg ml-1'>34</p>
                                    <p className='text-base -mt-1 text-[#d6d6d6]'>Min</p>
                                </div>
                            </div>
                            <div className='rounded-md w-14 h-14 flex justify-center text-white bg-gray-600'>
                                <div>
                                    <p className='font-bold text-lg ml-1'>56</p>
                                    <p className='text-base -mt-1 text-[#d6d6d6]'>Sec</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center ml-10 '>
                        <div className=' border-x-[1px] pt-6 border-[#d6d6d6] px-7'>
                            <div className='h-32'>
                                <Image className='cursor-pointer hover:scale-[1.06] hover:duration-500' src={watch} alt='watch' />
                            </div>
                            <h2 className='font-semibold text-base whitespace-nowrap text-center text-[#5a5a5a]'>Smart watches</h2>
                            <div className='flex justify-center'>
                                <div className='bg-[#FFE3E3] text-[#EB001B] px-2 rounded-2xl py-0.5 pb-1.5 w-14 flex justify-center font-semibold mt-1'>-25%</div>
                            </div>
                        </div>
                        <div className=' border-x-[1px] pt-6 border-[#d6d6d6] px-6'>
                            <div className='h-32'>
                                <Image className='cursor-pointer hover:scale-[1.06] hover:duration-500' src={laptop} alt='watch' />
                            </div>
                            <h2 className='font-semibold text-center text-base text-[#5a5a5a]'>Laptops</h2>
                            <div className='flex justify-center'>
                                <div className='bg-[#FFE3E3] text-[#EB001B] px-2 rounded-2xl py-0.5 pb-1.5 w-14 flex justify-center font-semibold mt-1'>-15%</div>
                            </div>
                        </div>
                        <div className=' border-x-[1px] pt-8 border-[#d6d6d6] px-6'>
                            <div className='h-[121px]'>
                                <Image className='cursor-pointer hover:scale-[1.06] hover:duration-500' src={camera} alt='watch' />
                            </div>
                            <h2 className='font-semibold text-center text-base text-[#5a5a5a]'>GoProp cameras</h2>
                            <div className='flex justify-center'>
                                <div className='bg-[#FFE3E3] text-[#EB001B] px-2 rounded-2xl py-0.5 pb-1.5 w-14 flex justify-center font-semibold mt-1'>-40%</div>
                            </div>
                        </div>
                        <div className=' border-x-[1px] pt-6 border-[#d6d6d6] px-6'>
                            <div className='h-32'>
                                <Image className='cursor-pointer hover:scale-[1.06] hover:duration-500' src={headphone} alt='watch' />
                            </div>
                            <h2 className='font-semibold text-center text-base text-[#5a5a5a]'>Headphones</h2>
                            <div className='flex justify-center'>
                                <div className='bg-[#FFE3E3] text-[#EB001B] px-2 rounded-2xl py-0.5 pb-1.5 w-14 flex justify-center font-semibold mt-1'>-25%</div>
                            </div>
                        </div>
                        <div className=' border-l-[1px] pt-6 border-[#d6d6d6] px-6'>
                            <div className='h-32'>
                                <Image className='cursor-pointer hover:scale-[1.06] hover:duration-500' src={mobile} alt='watch' />
                            </div>
                            <h2 className='font-semibold text-center whitespace-nowrap text-base text-[#5a5a5a]'>Canon camreras</h2>
                            <div className='flex justify-center'>
                                <div className='bg-[#FFE3E3] text-[#EB001B] px-2 rounded-2xl py-0.5 pb-1.5 w-14 flex justify-center font-semibold mt-1'>-25%</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
