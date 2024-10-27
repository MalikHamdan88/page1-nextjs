import React from 'react'
import Image from 'next/image'
import f1 from '../public/f1.png'
import f2 from '../public/f2.png'
import f3 from '../public/f3.png'
import f4 from '../public/f4.png'
import f5 from '../public/f5.png'
import f6 from '../public/f6.png'
import f7 from '../public/f7.png'
import f8 from '../public/f8.png'
import f9 from '../public/f9.png'
import f10 from '../public/f10.png'
export default function comp9() {
    return (
        <>
            <div className='flex justify-center'>
                <h1 className='font-bold mr-[890px] text-3xl mt-6'>Suppliers by region</h1>
            </div>
            <div className='flex mt-6 justify-center'>
                <div>
                    <div className='flex space-x-[107px] mt-1'>
                        <div className='flex space-x-4'>
                            <div><Image className='mt-3' src={f1} alt='image' /></div>
                            <div><h4 className='text-lg font-semibold'>Arabic Emirates</h4><p className='-mt-2 text-[#7b7b7b]'>shopname.ae</p></div>
                        </div>
                        <div className='flex space-x-4'>
                            <div><Image className='mt-3' src={f2} alt='image' /></div>
                            <div><h4 className='text-lg font-semibold'>Australia</h4><p className='-mt-2 text-[#7b7b7b]'>shopname.ae</p></div>
                        </div>
                        <div className='flex space-x-4'>
                            <div><Image className='mt-3' src={f3} alt='image' /></div>
                            <div><h4 className='text-lg font-semibold'>United States</h4><p className='-mt-2 text-[#7b7b7b]'>shopname.ae</p></div>
                        </div>
                        <div className='flex space-x-4'>
                            <div><Image className='mt-3' src={f4} alt='image' /></div>
                            <div><h4 className='text-lg font-semibold'>Russia</h4><p className='-mt-2 text-[#7b7b7b]'>shopname.ru</p></div>
                        </div>
                        <div className='flex space-x-4'>
                            <div><Image className='mt-3' src={f5} alt='image' /></div>
                            <div><h4 className='text-lg font-semibold'>Italy</h4><p className='-mt-2 text-[#7b7b7b]'>shopname.it</p></div>
                        </div>
                    </div>

                    <div className='flex space-x-[85px] mt-4'>
                        <div className='flex space-x-4'>
                            <div><Image className='mt-3' src={f6} alt='image' /></div>
                            <div><h4 className='text-lg font-semibold'>Denmark</h4><p className='-mt-2 text-[#7b7b7b]'>denmark.com.dk</p></div>
                        </div>
                        <div className='flex space-x-4'>
                            <div><Image className='ml-6 mt-3' src={f7} alt='image' /></div>
                            <div><h4 className='text-lg font-semibold'>France</h4><p className='-mt-2 text-[#7b7b7b]'>shopname.com.fr</p></div>
                        </div>
                        <div className='flex space-x-4'>
                            <div><Image className=' mt-3' src={f8} alt='image' /></div>
                            <div><h4 className='text-lg font-semibold'>Arabic Emirates</h4><p className='-mt-2 text-[#7b7b7b]'>shopname.ae</p></div>
                        </div>
                        <div className='flex space-x-4'>
                            <div><Image className='mt-3' src={f9} alt='image' /></div>
                            <div><h4 className='text-lg font-semibold'>China</h4><p className='-mt-2 text-[#7b7b7b]'>shopname.ru</p></div>
                        </div>
                        <div className='flex space-x-4'>
                            <div><Image className='mt-3' src={f10} alt='image' /></div>
                            <div ><h4 className='text-lg font-semibold'>Great Britain</h4><p className='-mt-2 text-[#7b7b7b]'>shopname.co.uk</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
