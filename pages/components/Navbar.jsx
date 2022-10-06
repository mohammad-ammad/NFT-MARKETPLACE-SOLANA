import React, { useState } from 'react'
import Button from './Button'
import { CgMenuRight } from 'react-icons/cg'
import { HiX } from 'react-icons/hi'
import { Transition } from '@windmill/react-ui'
import Link from 'next/link'

const Navbar = () => {
    //----USESTATE
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className='hidden md:flex justify-between items-center bg-black py-4 px-14 w-full fixed z-50 top-0 left-1/2 transform -translate-x-1/2'>
                <div>
                    <h1 className='text-white text-3xl'>Tokumei Marketplace</h1>
                </div>
                <div>
                    <ul className='flex justify-start items-center'>
                        <li><Link href="/"><a className='text-white mx-2'>Home</a></Link></li>
                        <li><Link href="/shop"><a className='text-white mx-2'>Shop</a></Link></li>
                        <li><a href="" className='text-white mx-2'>The Bridge</a></li>
                        <li><Link href="/cart"><a className='text-white ml-2 mr-4'>Cart</a></Link></li>
                        <li><Button btnText="Connect Wallet" width="w-36" px="px-3" py="py-2" /></li>
                    </ul>
                </div>
            </div>

            <div className='md:hidden flex justify-between items-center bg-black py-5 px-3 w-full fixed z-50 top-0 left-1/2 transform -translate-x-1/2'>
                <div>
                    <h1 className='text-white text-xl'>Tokumei Marketplace</h1>
                </div>
                <div>
                    {
                        toggle ? <HiX className='relative text-[#6960EC] text-3xl font-bold cursor-pointer' onClick={() => setToggle(false)} /> :
                            <CgMenuRight className='relative text-[#6960EC] text-3xl font-bold cursor-pointer' onClick={() => setToggle(true)} />
                    }
                    <Transition
                        show={toggle}
                        enter="transition ease-out duration-300 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-100 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className='absolute top-20 left-1/2 transform -translate-x-1/2 bg-[#353434] w-80 rounded-xl p-5 shadow-md'>
                        <ul className='flex flex-col justify-center items-center'>
                        <li className='mb-2'><a href="" className='text-white'>Home</a></li>
                        <li className='mb-2'><a href="" className='text-white'>Shop</a></li>
                        <li className='mb-2'><a href="" className='text-white'>The Bridge</a></li>
                        <li className='mb-2'><a href="" className='text-white'>Cart</a></li>
                        <li className='mb-2'><Button btnText="Connect Wallet" width="w-36" px="px-3" py="py-2" /></li>
                    </ul>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    )
}

export default Navbar