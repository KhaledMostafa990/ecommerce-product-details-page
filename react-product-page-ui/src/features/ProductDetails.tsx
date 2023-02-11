import { MainActiveSlide, NavigateButtons, ProductImagesPreview, ThumbnailsRow } from './../components/productImagesPreview';
import { LightboxModel } from "./../components/LightboxModel";
import React, { useEffect, useState } from 'react'
import { BaseButton } from '../components/BaseButton';
import { PrimaryButton } from '../components/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, Cart, CartItem } from '../store/cart';

// product compoenent interface 
interface ProductDetailsProps {
  id: string;
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

export default function ProductDetails({ id, title, subtitle, description, price, discountPerCent, quantity: availableQuantity, images }: ProductDetailsProps) {

  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [modelActiveIndex, setModelActiveIndex] = React.useState(activeIndex);

  const priceAfterDiscount = price - (price * discountPerCent / 100);
  const priceAfterDiscountDisplay = Math.floor(priceAfterDiscount).toFixed(2);
  const priceBeforeDiscountDisplay = Math.floor(price).toFixed(2);

  const cartItems = useSelector((state: { cart: Cart }) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleOrderQuantity = (type: string) => {
    if (type === 'add') {
      if (orderQuantity < availableQuantity) setOrderQuantity(orderQuantity + 1);
    } else {

      if (orderQuantity > 0) setOrderQuantity(orderQuantity - 1);
    }
  }

  const handleAddToCart = () => {
    const currentCartItem = cartItems.find(item => item.id === id);

    if (currentCartItem && currentCartItem.quantity + orderQuantity > availableQuantity) return;

    dispatch(addCartItem({
      id,
      name: title,
      imageSrc: images.main[0],
      price: priceAfterDiscount,
      quantity: orderQuantity,
    }))
  }


  const handleOpenLightboxModel = (isOpen: boolean) => {
    if (isOpen) {
      setLightboxOpen(true);
    } else {
      setLightboxOpen(false);
    }
  };

  useEffect(() => {
    if (lightboxOpen) {
      setModelActiveIndex(activeIndex);
      setLightboxOpen(true);
    }
  }, [lightboxOpen, activeIndex]);

  return (
    <>
      {/* Product info */}
      < div className='container gap-6 w-full' >

        <div
          className="order-2 col-start-2 col-end-12 lg:col-start-8 lg:col-end-12 lg:place-self-start xl:pr-10 4xl:pr-20 4xl:col-end-11"
        >
          <div className='h-full max-w-md flex flex-col gap-5 lg:max-w-full lg:gap-10'>
            {/* product title and sbutitle */}
            <h1 className='text-xl flex flex-col gap-5 text-heading-base xl:text-2xl'>
              <span className='text-primary-default block text-subtitle tracking-wider uppercase'>{subtitle}</span>
              {title}
            </h1>

            <div className='flex flex-col gap-5 lg:gap-8'>
              {/* Description */}
              <p className='text-bodytext-base text-sm'>{description}</p>

              {/* Price with discount */}
              <div className='flex justify-between font-bold lg:flex-col lg:gap-4'>
                <div className='flex gap-8 items-end'>
                  <p className='text-xl text-heading-base xl:text-2xl'>${priceAfterDiscountDisplay}</p>
                  <span className='text-primary-default' >{discountPerCent}%</span>
                </div>
                <p className='text-bodytext-base/80 line-through'>${priceBeforeDiscountDisplay}</p>
              </div>

              {/* Add to cart by quantity */}
              <div className='flex flex-col-reverse justify-between gap-4 lg:flex-row-reverse lg:gap-6'>

                <PrimaryButton
                  className="lg:flex-1"
                  onClick={handleAddToCart}>
                  Add to cart
                </PrimaryButton>

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
        <div
          className='w-full col-start-0 col-span-12
          lg:col-start-2 lg:col-end-7 xl:pl-10 4xl:pl-20 4xl:col-start-3'
        >
          <div
            className='relative w-full max-w-[445px] max-h-[445px] left-[50%]
            translate-x-[-50%] lg:max-h-full lg:left-0 lg:translate-x-0'>
            <ProductImagesPreview
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              title={title}
              images={images}
              isModel={false}
              handleOpenLightboxModel={handleOpenLightboxModel}

            />
          </div>

          <LightboxModel
            lightboxOpen={lightboxOpen}
            handleOpenLightboxModel={handleOpenLightboxModel}
          >
            <ProductImagesPreview
              activeIndex={modelActiveIndex}
              setActiveIndex={setModelActiveIndex}
              title={title}
              images={images}
              isModel={true}
            />
          </LightboxModel>
        </div>

      </div >
    </>
  )
}
