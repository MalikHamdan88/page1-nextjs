import React from 'react'
import Image from 'next/image'
import mask from '../public/mask12.png'
import avatar from '../public/Avatar.png'
export default function comp2() {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-center container bg-white h-[394px] w-[1160px] mt-5 rounded-md border-[1px] border-[#d9d9d9]'>
                <div className="flex justify-center space-x-12 mt-4">
                    <div className='text-lg font-semibold space-y-3'>
                        <h3 className='cursor-pointer bg-[#E3F0FF] rounded-md pr-6 py-1 -pb-1 pl-1.5'>Automobiles</h3>
                        <h3 className='cursor-pointer'>Clothes and wear</h3>
                        <h3 className='cursor-pointer'>Home interiors</h3>
                        <h3 className='cursor-pointer'>Computer and tech</h3>
                        <h3 className='cursor-pointer'>Tools, equipments</h3>
                        <h3 className='cursor-pointer'>Sports and outdoor</h3>
                        <h3 className='cursor-pointer'>Animal and pets</h3>
                        <h3 className='cursor-pointer'>Machinery tools</h3>
                        <h3 className='cursor-pointer'>More category</h3>
                    </div>
                    <div>
                        <Image className='relative' src={mask} alt='image' />
                        <div className='absolute top-52 ml-14'>
                            <h2 className=' text-3xl'>Last trending</h2>
                            <h1 className='font-bold text-4xl'>Electronic items</h1>
                            <button className='bg-white rounded-md cursor-pointer font-semibold px-3 py-2 pt-1 mt-4 '>Learn more</button>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#E3F0FF] w-48 h-40 rounded-md'>
                            <div className='flex space-x-4 ml-3 pt-2'>
                                <Image src={avatar} alt='image' />
                                <div className='font-semibold'><p>Hi, user</p><p>let's get stated</p></div>
                            </div>
                            <div>
                                <button className='bg-blue-500 ml-2 active:bg-blue-400 text-white cursor-pointer font-semibold rounded-md w-44 py-2 pt-1 mt-3 '>Join now</button>
                                <button className='bg-white ml-2 text-blue-600 rounded-md cursor-pointer font-semibold w-44 py-2 pt-1 mt-2 '>Log in</button>
                            </div>
                        </div>
                        <div className='bg-[#F38332] my-2 text-white rounded-md h-[91px] font-semibold text-base pl-5 pt-1 w-48'>
                            <p>Get US $10 off</p> with a new <p>supplier</p>
                        </div>
                        <div className='bg-[#55BDC3] text-white font-semibold pl-5 pt-1 rounded-md h-[91px] w-48'>
                            Send quotes with <p>supplier</p>  preferences
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
