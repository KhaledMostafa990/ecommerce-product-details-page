import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'

// product compoenent interface 
interface ProductDetailsProps {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  images: {
    main: string[];
    thumbnails: string[];
  }
}

export default function ProductDetails({ title, subtitle, description, price, discount, quantity, images }: ProductDetailsProps) {


  const slides = images.main.length;
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index: number) => setIndex(index);

  const handlePrev = () => {
    setIndex((index + slides - 1) % slides);
  };

  const handleNext = () => {
    setIndex((index + 1) % slides);
  };

  return (
    <div>
      {/* Product info */}
      <div className='gap-6 container'>

        {/* product title and sbutitle */}
        <div className="order-2 flex flex-col gap-10 col-start-2 col-span-10 3xl:col-start-3 3xl:col-span-8">
          <h1 className='text-xl flex flex-col gap-6 text-heading-base 3xl:text-2xl'>
            <span className='text-gray-400 block text-sm'>{subtitle}</span>
            {title}
          </h1>

          <div className='flex flex-col gap-5'>
            {/* Description */}
            <p className='text-bodytext-base text-sm'>{description}</p>

            {/* Price with discount */}
            <div className='flex justify-between'>
              <p className='text-lg text-heading-base 3xl:text-2xl'>{price}</p>
              <p >{discount}</p>
              <p>{price - discount}</p>
            </div>

            {/* Add to cart by quantity */}
            <div className='flex flex-row-reverse justify-between'>
              <button className='bg-primary-base text-white bg-primary-default text-sm py-2 px-4 rounded-md'>Add to cart</button>
              <div className='flex justify-center gap-2'>
                <button className='bg-white/70 text-primary-default text-sm py-2 px-4 rounded-md'>-</button>
                <p>{quantity}</p>
                <button className='bg-white/70 text-primary-default text-sm py-2 px-4 rounded-md'>+</button>
              </div>

            </div>
          </div>
        </div>

        {/* Product Images preview with lightbox model on desktop */}

        <div className='col-start-0 col-span-12 3xl:col-start-3 3xl:col-span-8'>


          {/* create main Images preview showing the first main image active only*/}
          <div className='relative'>
            <div className='flex'>
              <img
                src={images.main[index]}
                alt={title}
              />
            </div>

            {/* Navigate buttons */}
            <div className='w-full flex p-4 justify-between text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>

              <button
                className='prev bg-white flex w-8 h-8 justify-center items-center rounded-full'
                onClick={handlePrev}
              >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
              </button>

              <button
                className='next bg-white flex w-8 h-8 justify-center items-center rounded-full'
                onClick={handleNext}
              >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
              </button>
            </div>

            {/* Thumnails preview on desktop view */}
            {/* <div></div> */}
          </div>

        </div>

      </div>
    </div>
  )
}

