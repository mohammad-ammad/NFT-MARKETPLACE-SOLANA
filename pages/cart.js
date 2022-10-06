import React from 'react'
import { p1 } from './images'
import Image from 'next/image'
import {FaTrash} from 'react-icons/fa'


const cart = () => {
    return (
        <div className='bg-[#141414] w-full py-28 px-5 h-full'>
            <h1 className='text-2xl text-white text-center'>Cart</h1>
            <p className='text-sm text-white text-center my-2'>You have (3) items in cart</p>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-3">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-black">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Image
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Product
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Quantity
                            </th>
                            <th scope="col" class="py-3 px-6">
                                SubTotal
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b bg-gray-900 text-white border-gray-700">
                            <td class="py-4 px-6">
                                <Image
                                    src={p1}
                                    alt="Picture of the clothes"
                                    width={100}
                                    height={50}
                                    className="rounded-xl"
                                />
                            </td>
                            <td class="py-4 px-6">
                                Custom NFT T-Shirt
                            </td>
                            <td class="py-4 px-6">
                                <p className='text-sm text-[#088178] font-medium'>$29.99</p>
                            </td>
                            <td class="py-4 px-6">
                            <input type="Number" className='my-3 w-20 py-2 rounded-lg px-2 cursor-pointer outline-none bg-transparent border-1 border-solid border-[1px] border-[#6960EC] text-white' max={10} min={1} placeholder="1"/>
                            </td>
                            <td class="py-4 px-6">
                                <p className='text-sm text-[#088178] font-medium'>$29.99</p>
                            </td>
                            <td class="py-4 px-6">
                                <FaTrash className='fill-red-500 cursor-pointer'/>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-900 text-white border-gray-700">
                            <td class="py-4 px-6">
                                <Image
                                    src={p1}
                                    alt="Picture of the clothes"
                                    width={100}
                                    height={50}
                                    className="rounded-xl"
                                />
                            </td>
                            <td class="py-4 px-6">
                                Custom NFT T-Shirt
                            </td>
                            <td class="py-4 px-6">
                                <p className='text-sm text-[#088178] font-medium'>$29.99</p>
                            </td>
                            <td class="py-4 px-6">
                            <input type="Number" className='my-3 w-20 py-2 rounded-lg px-2 cursor-pointer outline-none bg-transparent border-1 border-solid border-[1px] border-[#6960EC] text-white' max={10} min={1} placeholder="1"/>
                            </td>
                            <td class="py-4 px-6">
                                <p className='text-sm text-[#088178] font-medium'>$29.99</p>
                            </td>
                            <td class="py-4 px-6">
                                <FaTrash className='fill-red-500 cursor-pointer'/>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-900 text-white border-gray-700">
                            <td class="py-4 px-6">
                                <Image
                                    src={p1}
                                    alt="Picture of the clothes"
                                    width={100}
                                    height={50}
                                    className="rounded-xl"
                                />
                            </td>
                            <td class="py-4 px-6">
                                Custom NFT T-Shirt
                            </td>
                            <td class="py-4 px-6">
                                <p className='text-sm text-[#088178] font-medium'>$29.99</p>
                            </td>
                            <td class="py-4 px-6">
                            <input type="Number" className='my-3 w-20 py-2 rounded-lg px-2 cursor-pointer outline-none bg-transparent border-1 border-solid border-[1px] border-[#6960EC] text-white' max={10} min={1} placeholder="1"/>
                            </td>
                            <td class="py-4 px-6">
                                <p className='text-sm text-[#088178] font-medium'>$29.99</p>
                            </td>
                            <td class="py-4 px-6">
                                <FaTrash className='fill-red-500 cursor-pointer'/>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-900 text-white border-gray-700">
                            <td class="py-4 px-6">
                                <Image
                                    src={p1}
                                    alt="Picture of the clothes"
                                    width={100}
                                    height={50}
                                    className="rounded-xl"
                                />
                            </td>
                            <td class="py-4 px-6">
                                Custom NFT T-Shirt
                            </td>
                            <td class="py-4 px-6">
                                <p className='text-sm text-[#088178] font-medium'>$29.99</p>
                            </td>
                            <td class="py-4 px-6">
                            <input type="Number" className='my-3 w-20 py-2 rounded-lg px-2 cursor-pointer outline-none bg-transparent border-1 border-solid border-[1px] border-[#6960EC] text-white' max={10} min={1} placeholder="1"/>
                            </td>
                            <td class="py-4 px-6">
                                <p className='text-sm text-[#088178] font-medium'>$29.99</p>
                            </td>
                            <td class="py-4 px-6">
                                <FaTrash className='fill-red-500 cursor-pointer'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default cart