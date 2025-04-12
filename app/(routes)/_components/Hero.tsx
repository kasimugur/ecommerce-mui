import React from 'react'
import CardProduct from './CardProduct'

const Hero = () => {
  return (
    <>
      <div className="flex flex-col mb-12  mt-16">
        <h1 className='w-full text-center text-[#2B3445] text-[28px] leading-[54px] font-bold mb-3'>Top Sales Products</h1>
        <div className="w-full flex justify-center items-center">
          <div className=' h-[2px]  w-[200px] bg-[#D23F57] '></div>
        </div>
      </div>
      <div className=" flex flex-col mt-16 mb-12">
        <h1 className='w-full text-center text-[#2B3445] text-[28px] leading-[54px] font-bold mb-3'>Our All Products</h1>
        <div className="w-full flex-col flex justify-center items-center">
          <div className=' h-[2px]  w-[200px] bg-[#D23F57] '></div>
          <div className="flex ">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero