import React from 'react'
import Image from 'next/image'
import logo from '../public/logo-colored.png'
import social from '../public/social.png'
import play from '../public/play.png'
import app from '../public/app.png'
import f3 from '../public/f3.png'
import up from '../public/up.png'
export default function comp10() {
   return (
      <div className='flex justify-center'>
         <div>
            <div className='bg-[#EFF2F4] w-[100vw] h-48 mt-10 flex justify-center'>
               <div>
                  <h1 className='font-bold text-2xl text-center mt-8'>Subscribe on our newsletter</h1>
                  <p className='text-lg text-center font-semibold text-[#6a6a6a]'>Get daily news on upcoming offers from many suppliers all over the world</p>
                  <div className='flex justify-center'>
                     <input className='rounded-md w-[270px] pl-2 h-9 mt-5 border-[#bfbfbf] border-[1px] ' type="text" placeholder='Email' />
                     <button className='bg-blue-500 active:bg-blue-400 text-white cursor-pointer font-semibold rounded-md w-28 whitespace-nowrap mt-5 pb-1 ml-2 '>Subscribe</button>
                  </div>
               </div>
            </div>

            <div className='bg-white w-[100vw] flex justify-center h-64'>
               <div className='flex justify-center mt-10  space-x-[70px]' >
                  <div>
                     <Image src={logo} alt='image' />
                     <p className='text-lg text-[#636363] my-4'>Best information about the company <br /> gies here but now lorem ipsum is</p>
                     <Image className='mt-5 cursor-pointer' src={social} alt='image' />
                  </div>

                  <div>
                     <h2 className='font-semibold text-lg'>About</h2>
                     <p className='text-lg mt-1 cursor-pointer font-semibold text-[#a1a1a1]'>About Us <br /> Find store <br /> Categories <br /> Blogs</p>
                  </div>

                  <div>
                     <h2 className='font-semibold text-lg'>Partnership</h2>
                     <p className='text-lg mt-1 cursor-pointer font-semibold text-[#a1a1a1]'>About Us <br /> Find store <br /> Categories <br /> Blogs</p>
                  </div>

                  <div>
                     <h2 className='font-semibold text-lg'>Information</h2>
                     <p className='text-lg mt-1 cursor-pointer font-semibold text-[#a1a1a1]'>Help Center <br /> Money Refund <br /> Shipping <br /> Contact us</p>
                  </div>

                  <div>
                     <h2 className='font-semibold text-lg'>For users</h2>
                     <p className='text-lg mt-1 cursor-pointer font-semibold text-[#a1a1a1]'>Login <br /> Register<br /> Settings <br />My Orders</p>
                  </div>

                  <div>
                     <h2 className='font-semibold text-lg'>Get app</h2>
                     <Image className='mt-2 cursor-pointer' src={app} alt='image' />
                     <Image className='mt-3 cursor-pointer' src={play} alt='image' />
                  </div>
               </div>
            </div>
            <div className='bg-[#EFF2F4] w-[100vw] h-16'>
               <div className='flex justify-center space-x-[870px] pt-4 text-lg'>
                  <p className='text-[#585858]'>© 2023 Ecommerce. </p>
                  <div className='flex'>
                     <Image className='cursor-pointer h-5 mt-1' src={f3} alt='image' />
                     <p className='text-[#585858] ml-1'>English</p>
                     <Image className='cursor-pointer h-5 mt-1 ml-1' src={up} alt='image' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
