import React from 'react'
import Image from 'next/image'
import main from '../public/Group 982.png'
import down from '../public/down-arrow.png'
export default function comp6(props) {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-center container'>
                <div>
                    <Image className='w-[1160px]  mt-5' src={main} alt='image' />
                    <div className=' absolute top-[1370px] ml-10'>
                        <div>
                            <h1 className='font-bold text-4xl text-white'>An easy way to send <br /> requests to all suppliers</h1>
                            <p className='text-white mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do eiusmod tempor incididunt.</p>
                            <div className='-mt-[145px] ml-[636px] absolute  bg-white h-[335px] w-[450px] rounded-md'>
                                <div className='ml-5 mt-5'>
                                    <h2 className='font-bold text-2xl'>Send quote to suppliers</h2>
                                    <input className='rounded-md w-[410px] pl-2 h-9 mt-5 border-[#707070] border-[1px] ' type="text" placeholder='What item you need?' />
                                    <input className='rounded-md w-[410px] pl-2 h-20 mt-5 border-[#707070] border-[1px] ' type="text" placeholder='What item you need?' />
                                    <div className='flex '>
                                        <input className='rounded-md w-[190px] pl-2 h-9 mt-5 border-[#707070] border-[1px] ' type="text" placeholder='Quantity' />
                                        <div onClick={props.countHandler} className='rounded-md cursor-pointer ml-2 text-lg w-[110px] pl-2 h-9 mt-5 border-[#707070] border-[1px] flex'>
                                            Pcs
                                            <Image className='h-6 mt-1 ml-12 cursor-pointer' src={down} alt='image' />
                                        </div>
                                        {props.count === 2 ? (<input className='rounded-md border-[#474747] border-[1px] w-20 h-9 mt-5 ml-2 pl-2' type="number" />) : ''}
                                    </div>
                                    <button className='bg-blue-600 active:bg-blue-500 text-white cursor-pointer font-semibold rounded-md w-28 whitespace-nowrap py-2 pt-1 mt-4 '>Send inquiry</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
