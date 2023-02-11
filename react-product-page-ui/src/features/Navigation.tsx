import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

import { Overlay, NavBar, Logo, HamburgerButton } from '../components'
import { CartIcon } from '../components/CartIcon';
import { menuClickHandler } from '../helpers/menuClickHandler';
import { useViewportOnResize } from '../hooks/useViewportOnResize';
import { CartItemsList } from '../components/CartItemsList';

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

    const [cartOpen, setCartOpen] = React.useState(false);

    const cartLength = useSelector((state: any) => state.cart.cartItems.length);

    const { isDesktop } = useViewportOnResize();

    const toggleCart = () => setCartOpen(!cartOpen);

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

                    {/* Logo and Hamburger Button */}
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
                        <CartIcon onClick={toggleCart} cartLength={cartLength} cartSrc={cartSrc} />
                        <img
                            className='w-6 h-6 cursor-pointer'
                            src={avatarSrc}
                            alt='avatar'
                        />
                    </div>

                    {/* Cart Items dropdown */}
                    <div
                        className={`${cartOpen ? 'active' : ''} absolute w-full h-full top-16 right-0
                        z-40 translate-y-[-600%] [&.active]:translate-y-[0%] transition-all duration-500 lg:top-20`}
                    >
                        <div
                            className='flex flex-col w-full h-full max-w-[360px] min-h-[250px] py-6 px-4 
                            absolute top-0 right-[0%] z-50 bg-background-default rounded-lg shadow-lg'
                        >
                            <p className='text-start font-bold text-heading-base'>Cart</p>

                            <hr className='w-full border border-bodytext-base/10 my-2' />

                            <div className='h-full flex flex-col justify-center items-center'>
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

