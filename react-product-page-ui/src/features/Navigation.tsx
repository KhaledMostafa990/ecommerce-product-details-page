import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

import { Overlay, NavBar, Logo, HamburgerButton } from '../components'
import { CartIcon } from '../components/CartIcon';
import { menuClickHandler } from '../helpers/menuClickHandler';
import { useViewportOnResize } from '../hooks/useViewportOnResize';

// nav compoenent interface
interface NavProps {
    navListItems: string[];
    logoSrc: string;
    cartSrc: string;
    avatarSrc: string;
}


export default function Navigation({ data }: { data: NavProps }) {
    const { navListItems, logoSrc, cartSrc, avatarSrc } = data;

    const headerRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const navList = useRef<HTMLElement | null>(null);
    const menuBtnRef = useRef<HTMLButtonElement | null>(null);
    const overlayRef = useRef<HTMLElement | null>(null);
    const activeClass = 'active';

    const cartLength = useSelector((state: any) => state.cart.cartItems.length);

    const { isDesktop } = useViewportOnResize();

    const toggleMenu = menuClickHandler(
        menuBtnRef.current,
        navRef.current,
        logoRef.current,
        overlayRef.current,
        activeClass
    );

    if (isDesktop && navRef?.current?.classList.contains('active')) toggleMenu();

    return (
        <header>

            <div
                ref={headerRef}
                className='container bg-background-default
                shadow-sm transition-all duration-[0.84s]'
            >
                <div
                    className='relative col-start-2 col-span-10 4xl:col-start-3
                    4xl:col-span-8 py-4 flex justify-between items-center
                    transition-all duration-[0.84s] lg:py-0'>

                    <Overlay overlayRef={overlayRef} />

                    <div className='flex items-center gap-5'>
                        <div className='z-30 lg:hidden'>
                            <HamburgerButton onClick={toggleMenu} menuBtnRef={menuBtnRef} />
                        </div>
                        <Logo logoSrc={logoSrc} />
                    </div>

                    {/* Navigation bar List items */}
                    <div className='z-20'>
                        <NavBar navRef={navRef} navListRef={navList} navListItems={navListItems} />
                    </div>

                    {/* Cart And Avatar Icon */}
                    <div className='flex items-center gap-5'>
                        <CartIcon cartLength={cartLength} cartSrc={cartSrc} />
                        <img
                            className='w-6 h-6'
                            src={avatarSrc}
                            alt='avatar'
                        />
                    </div>

                    {/* Cart Items dropdown */}
                    <div
                        className='absolute w-full h-full top-0 right-0'
                    >
                        <div
                            className='flex flex-col w-full max-w-[360px] py-6 px-4 my-16 
                            absolute top-0 right-[0%] z-50 bg-background-default rounded-lg shadow-lg lg:my-20'
                        >
                            <p className='text-start font-bold text-heading-base'>Cart</p>

                            <hr className='w-full border border-bodytext-base/10 my-2' />

                            <div className='flex flex-col justify-center min-h-[120px]'>
                                {cartLength <= 0 ? (
                                    <p className='text-center text-bodytext-base'>
                                        Your cart is empty
                                    </p>
                                ) : (
                                    <CartItemsList />
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

function CartItemsList() {
    const cartItems = useSelector((state: any) => state.cart.cartItems);
    return (
        <>
            {cartItems.map((item: any) => (
                <div className='flex items-center gap-4'>
                    <img
                        className='w-16 h-16'
                        src={item.imageSrc}
                        alt='cart item'
                    />

                    <div className='flex flex-col'>
                        <p className='text-bodytext-base font-bold'>{item.name}</p>

                        <div className='flex gap-3 items-center '>
                            <p className=''>${item.price}</p>
                            x
                            <p className=''>{item.quantity}</p>

                            <p className='text-heading-base font-bold'>
                                ${item.price * item.quantity}
                            </p>
                        </div>
                    </div>

                    <div className=''>
                        <button>
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="#C3CAD9" />
                                <mask id="mask0_0_81" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="16">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_0_81)">
                                </g>
                            </svg>
                        </button>
                    </div>

                </div>
            ))}

        </>
    )
}