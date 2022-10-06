import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({key,image,title,tag,price}) => {
  return (
    <Link href="/product/1">
      <div key={key} className="border-1 border-solid border-white border-[1px] rounded-xl cursor-pointer">
          <div className='m-3'>
              <Image
                  src={image}
                  alt="Picture of the clothes"
                  width={250}
                  height={150}
                  objectFit="cover"
                  layout="responsive"
                  className="rounded-xl"
                  />
          </div>
          <div className='text-xs text-white mx-3 font-medium'>
              {tag}
          </div>
          <div className='text-md text-white mx-3 font-semibold'>
              {title}
          </div>
          <div className='text-md text-[#088178] mx-3 mb-3 font-medium'>
              ${price}
          </div>
      </div>
    </Link>
  )
}

export default Card