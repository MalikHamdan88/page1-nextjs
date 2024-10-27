import React from 'react'
import Image from 'next/image'
import mask1 from '../public/Mask group.png'
import mask2 from '../public/Mask group (1).png'
import mask3 from '../public/Mask group (2).png'
import mask4 from '../public/Mask group (3).png'
import search from '../public/search.png'
import security from '../public/security.png'
import send from '../public/send.png'
import inventory from '../public/inventory_2.png'
export default function comp8() {
    return (
        <>
            <div className='flex justify-center'>
                <h1 className='font-bold mr-[900px] text-3xl mt-6'>Our extra services</h1>
            </div>
            <div className='flex justify-center'>
                <div>
                    <div className='flex space-x-3 mt-8'>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[200px] w-[282px] rounded-md'>
                            <div>
                                <div className='flex justify-center'>
                                    <Image src={mask1} alt='image' /></div>
                                <div className='mt-5 mr-8 flex'>
                                    <h3 className='font-semibold whitespace-nowrap -mt-3 ml-7 text-lg'>Source from <br /> Industry Hubs</h3>
                                    <div className=' cursor-pointer hover:scale-105 rounded-full hover:duration-500 border-white border-[2px] ml-20 -mt-10 bg-[#D1E7FF] w-12 flex justify-center h-12'><Image className='w-6 mt-2.5 h-6' src={search} alt='image' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[200px] w-[282px] rounded-md'>
                            <div>
                                <div className='flex justify-center'>
                                    <Image src={mask2} alt='image' /></div>
                                <div className='mt-5 mr-8 flex'>
                                    <h3 className='font-semibold whitespace-nowrap -mt-3 ml-7 text-lg'>Customize Your <br /> Products</h3>
                                    <div className=' cursor-pointer hover:scale-105 rounded-full hover:duration-500 border-white border-[2px] ml-[68px] -mt-10 bg-[#D1E7FF] w-12 flex justify-center h-12'><Image className='w-6 mt-2.5 h-6' src={security} alt='image' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[200px] w-[282px] rounded-md'>
                            <div>
                                <div className='flex justify-center'>
                                    <Image src={mask3} alt='image' /></div>
                                <div className='mt-5 mr-8 flex'>
                                    <h3 className='font-semibold whitespace-nowrap -mt-3 ml-7 text-lg'>Fast, reliable shipping <br /> by ocean or air</h3>
                                    <div className=' cursor-pointer hover:scale-105 rounded-full hover:duration-500 border-white border-[2px] ml-7 -mt-10 bg-[#D1E7FF] w-12 flex justify-center h-12'><Image className='w-6 mt-2.5 h-6' src={send} alt='image' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='border-[#e3e3e3] flex justify-center border-[1px] bg-white h-[200px] w-[282px] rounded-md'>
                            <div>
                                <div className='flex justify-center'>
                                    <Image src={mask4} alt='image' /></div>
                                <div className='mt-5 mr-8 flex'>
                                    <h3 className='font-semibold whitespace-nowrap -mt-3 ml-7 text-lg'>Product monitoring <br /> and inspection</h3>
                                    <div className=' cursor-pointer hover:scale-105 rounded-full hover:duration-500 border-white border-[2px] ml-10 -mt-10 bg-[#D1E7FF] w-12 flex justify-center h-12'><Image className='w-6 mt-2.5 h-6' src={inventory} alt='image' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
