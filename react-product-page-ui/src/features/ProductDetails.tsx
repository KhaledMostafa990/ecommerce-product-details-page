import { ProductImagesPreview } from './../components/productImagesPreview';
import { Slider } from './../components/slider';
import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { BaseButton } from '../components/BaseButton';
import { PrimaryButton } from '../components/PrimaryButton';

// product compoenent interface 
interface ProductDetailsProps {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  discountPerCent: number;
  quantity: number;
  images: {
    main: string[];
    thumbnails: string[];
  }
}

export default function ProductDetails({ title, subtitle, description, price, discountPerCent, quantity, images }: ProductDetailsProps) {


  const [orderQuantity, setOrderQuantity] = useState(0);
  const priceAfterDiscount = Math.floor(price - (price * discountPerCent / 100)).toFixed(2);
  const priceBeforeDiscount = Math.floor(price).toFixed(2);

  const handleOrderQuantity = (type: string) => {
    if (type === 'add') {
      if (orderQuantity < quantity) setOrderQuantity(orderQuantity + 1);
    } else {
      if (orderQuantity > 0) setOrderQuantity(orderQuantity - 1);
    }
  }

  return (
    <div className='lg:pt-20'>
      {/* Product info */}
      <div className='gap-6 container'>

        <div
          className="order-2 pb-8 col-start-2 col-end-10 lg:col-start-7 lg:col-end-12 lg:place-self-end lg:px-12 3xl:col-end-11 ">
          <div className='max-w-sm flex flex-col gap-5 lg:max-w-md lg:gap-10'>
            {/* product title and sbutitle */}
            <h1 className='text-xl flex flex-col gap-5 text-heading-base lg:text-2xl'>
              <span className='text-primary-default block text-subtitle tracking-wider uppercase'>{subtitle}</span>
              {title}
            </h1>

            <div className='flex flex-col gap-5 lg:gap-8'>
              {/* Description */}
              <p className='text-bodytext-base text-sm'>{description}</p>

              {/* Price with discount */}
              <div className='flex justify-between font-bold lg:flex-col lg:gap-4'>
                <div className='flex gap-8 items-end'>
                  <p className='text-xl text-heading-base lg:text-2xl'>${priceAfterDiscount}</p>
                  <span className='text-primary-default' >{discountPerCent}%</span>
                </div>
                <p className='text-bodytext-base/80 line-through'>${priceBeforeDiscount}</p>
              </div>

              {/* Add to cart by quantity */}
              <div className='flex flex-col-reverse justify-between gap-4 lg:flex-row-reverse lg:gap-6'>

                <PrimaryButton
                  className="lg:flex-1"
                  onClick={() => console.log('clicked')}>Add to cart</PrimaryButton
                >

                <div className='flex justify-between items-center bg-bodytext-base/10 rounded-md lg:flex-1'>
                  <BaseButton className='text-primary-default text-xl'
                    onClick={() => handleOrderQuantity('remove')}
                  >
                    -
                  </BaseButton>

                  <p className=''>{orderQuantity}</p>

                  <BaseButton className='text-primary-default text-xl'
                    onClick={() => handleOrderQuantity('add')}
                  >
                    +
                  </BaseButton>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Product Images preview with lightbox model on desktop */}

        <div className='col-start-2 col-end-12 lg:col-end-7 lg:px-12 3xl:col-start-3'>
          <ProductImagesPreview title={title} images={images} />
        </div>

      </div>
    </div>
  )
}
