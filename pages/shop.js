import React from 'react'
import Card from './components/Card'
import {products} from './utils/products'

const shop = () => {
  return (
    <div className='bg-[#141414] w-full py-28 px-5 h-full'>
        <h1 className='text-2xl font-bold text-white text-center'>Original Product Release</h1>
        <p className='text-md font-medium text-white text-center'>Explore our first release of items, and keep coming back for more</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
            {
                products.map((el,i) => (
                    <Card key={i} image={el.image} title={el.title} tag={el.tag} price={el.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default shop