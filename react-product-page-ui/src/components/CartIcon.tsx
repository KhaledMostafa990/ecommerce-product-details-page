import React from 'react';

export function CartIcon({ cartLength, cartSrc, onClick }: { cartLength: number; cartSrc: string, onClick: () => void }) {

    return (
        <>
            <div
                onClick={onClick}
                className='relative  cursor-pointer'>
                <div>
                    <span className='w-4 h-4 absolute top-[-4px] right-[-2px] text-[10px]
                     font-bold bg-primary-default text-background-default
                    rounded-full flex justify-center items-center'
                    >
                        {cartLength}
                    </span>

                    <img
                        className='w-6 h-6'
                        src={cartSrc}
                        alt='cart'
                    />

                </div>
            </div>
        </>
    );
}
