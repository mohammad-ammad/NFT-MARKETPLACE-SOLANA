import React from 'react'
import Image from 'next/image'
import { Logo } from '../images'
import Button from './Button'
const Hero = () => {
  return (
    <div className='bg-[#141414] flex flex-col md:flex-row justify-evenly items-center h-screen w-full py-10 px-5'>
        <div>
            <h1 className='text-[#6960EC] text-3xl md:text-6xl font-bold mb-3'>The Tokumei Marketplace</h1>
            <h1 className='text-white text-3xl md:text-6xl font-bold mb-3'>Your Home for Web3-</h1>
            <h1 className='text-white text-3xl md:text-6xl font-bold mb-3'>Commerce</h1>
            <Button btnText="Shop" width="w-34 md:w-60" txtSize="text-2xl md:text-5xl" px="px-5" py="py-4"/>
        </div>
        <div className='my-3'>
        <Image
        src={Logo}
        alt="Picture of the author"
        width={400}
        height={400}
        />
        </div>
    </div>
  )
}

export default Hero