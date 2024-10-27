import React from 'react'
import Image from 'next/image'
import shirt from '../public/bitmap.png'
import shirt2 from '../public/21.png'
import coat from '../public/image 30.png'
import wallet from '../public/image 24.png'
import bag from '../public/image 26.png'
import pant from '../public/pant.png'
import pot from '../public/pot.png'
import jug from '../public/jug.png'
import headphone from '../public/headphone.png'

export default function comp7() {
    return (
        <>
            <div className='flex justify-center'>
                <h1 className='font-bold mr-[860px] text-3xl mt-6'>Recommended items</h1>
            </div>
            <div className='flex justify-center'>
                <div>
                    <div className='flex space-x-5 mt-8'>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[300px] w-[216px] rounded-md'>
                            <div>
                                <div className='flex justify-center cursor-pointer hover:scale-105 hover:duration-500'> <Image className='mt-5' src={shirt} alt='image' /></div>
                                <div className='mt-5 mr-8'>
                                    <h3 className='font-semibold text-lg'>$10.30</h3>
                                    <p className='font-semibold text-[#858585]'>T-shirts with multiple <br /> colors, for men</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[300px] w-[216px] rounded-md'>
                            <div>
                                <div className='flex justify-center cursor-pointer hover:scale-105 hover:duration-500'> <Image className='mt-5' src={shirt2} alt='image' /></div>
                                <div className='mt-5 mr-8'>
                                    <h3 className='font-semibold text-lg'>$10.30</h3>
                                    <p className='font-semibold text-[#858585]'>Jeans shorts for men <br />blue color</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[300px] w-[216px] rounded-md'>
                            <div>
                                <div className='flex justify-center cursor-pointer hover:scale-105 hover:duration-500'> <Image className='mt-5' src={coat} alt='image' /></div>
                                <div className='mt-5 mr-8'>
                                    <h3 className='font-semibold text-lg'>$12.50</h3>
                                    <p className='font-semibold text-[#858585]'>Brown winter coat <br />medium size</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[300px] w-[216px] rounded-md'>
                            <div>
                                <div className='flex justify-center cursor-pointer hover:scale-105 hover:duration-500'> <Image className='mt-5' src={wallet} alt='image' /></div>
                                <div className='mt-5 mr-8'>
                                    <h3 className='font-semibold text-lg'>$34.00</h3>
                                    <p className='font-semibold text-[#858585]'>Jeans bag for travel <br />for men</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[300px] w-[216px] rounded-md'>
                            <div>
                                <div className='flex justify-center cursor-pointer hover:scale-105 hover:duration-500'> <Image className='mt-5' src={bag} alt='image' /></div>
                                <div className='mt-5 mr-8'>
                                    <h3 className='font-semibold text-lg'>$99.00</h3>
                                    <p className='font-semibold text-[#858585]'>Leather wallet</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex space-x-5 mt-5'>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[300px] w-[216px] rounded-md'>
                            <div>
                                <div className='flex justify-center cursor-pointer hover:scale-105 hover:duration-500'> <Image className='mt-5' src={pant} alt='image' /></div>
                                <div className='mt-5 mr-8'>
                                    <h3 className='font-semibold text-lg'>$10.30</h3>
                                    <p className='font-semibold text-[#858585]'>T-shirts with multiple <br /> colors, for men</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[300px] w-[216px] rounded-md'>
                            <div>
                                <div className='flex justify-center cursor-pointer hover:scale-105 hover:duration-500'> <Image className='mt-3' src={headphone} alt='image' /></div>
                                <div className='mt-1 mr-8'>
                                    <h3 className='font-semibold text-lg'>$10.30</h3>
                                    <p className='font-semibold text-[#858585]'>Jeans shorts for men <br />blue color</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[300px] w-[216px] rounded-md'>
                            <div>
                                <div className='flex justify-center cursor-pointer hover:scale-105 hover:duration-500'> <Image className='mt-4' src={bag} alt='image' /></div>
                                <div className='mt-5 mr-8'>
                                    <h3 className='font-semibold text-lg'>$12.50</h3>
                                    <p className='font-semibold text-[#858585]'>Brown winter coat <br />medium size</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[300px] w-[216px] rounded-md'>
                            <div>
                                <div className='flex justify-center cursor-pointer hover:scale-105 hover:duration-500'> <Image className='mt-1' src={pot} alt='image' /></div>
                                <div className='mt-3 mr-8'>
                                    <h3 className='font-semibold text-lg'>$34.00</h3>
                                    <p className='font-semibold text-[#858585]'>Jeans bag for travel <br />for men</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[300px] w-[216px] rounded-md'>
                            <div>
                                <div className='flex justify-center cursor-pointer hover:scale-105 hover:duration-500'> <Image className='mt-5' src={jug} alt='image' /></div>
                                <div className='mt-5 mr-8'>
                                    <h3 className='font-semibold text-lg'>$99.00</h3>
                                    <p className='font-semibold text-[#858585]'>Leather wallet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
