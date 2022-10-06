import React from 'react'
import { p1, p2, p3 } from '../images';
import Image from 'next/image'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Button from '../components/Button';

const ProductDetails = () => {
    const indicators = (index) => {
        return (
          <div className="indicator bg-[#6960EC] w-5 h-5 mx-1 rounded-full cursor-pointer"></div>
        )
      };
    return (
        <div className='bg-[#141414] w-full py-28 px-5 h-full grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='md:col-span-2'>
                <Slide autoplay={false} indicators={indicators}>
                    <Image
                        src={p1}
                        alt="Picture of the clothes"
                        width={1000}
                        height={500}
                        className="rounded-xl"
                    />
                    <Image
                        src={p2}
                        alt="Picture of the clothes"
                        width={1000}
                        height={500}
                        className="rounded-xl"
                    />
                    <Image
                        src={p3}
                        alt="Picture of the clothes"
                        width={1000}
                        height={500}
                        className="rounded-xl"
                    />
                </Slide>

            </div>
            <div>
                <h1 className='text-lg text-white font-medium'>Apparel</h1>
                <h1 className='text-2xl text-white font-semibold'>Custom NFT T-Shirt</h1>
                <p className='text-3xl text-[#088178] font-medium'>$29</p>
                <select className='my-3 w-52 py-2 rounded-lg px-2 cursor-pointer outline-none bg-transparent border-1 border-solid border-[1px] border-[#6960EC] text-white'>
                    <option className='bg-[#141414] text-white'>Select Size</option>
                    <option className='bg-[#141414] text-white'>Small</option>
                    <option className='bg-[#141414] text-white'>Medium</option>
                    <option className='bg-[#141414] text-white'>Large</option>
                </select>
                <div>
                    <input type="Number" className='my-3 w-52 py-2 rounded-lg px-2 cursor-pointer outline-none bg-transparent border-1 border-solid border-[1px] border-[#6960EC] text-white' max={10} min={1} placeholder="1"/>
                </div>
                <div className='my-4'>
                    <h1 className='text-lg text-white font-medium'>Description:</h1>
                    <p className='text-sm text-white'>
                    This comfortable short sleeve offers you a mid-weight piece of clothing for all casual occasions. Incorporated with your own original NFT, it will be an instant attention-grabbing piece of your closet. 100% preshrunk cotton Light fabric Relaxed fit
                    </p>
                </div>
                <Button btnText="Add To Cart" width="w-full" txtSize="text-xl" px="px-5" py="py-2"/>
            </div>
        </div>
    )
}

export default ProductDetails