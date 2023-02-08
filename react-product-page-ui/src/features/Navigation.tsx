import React, { useRef } from 'react'

import { Overlay, NavBar, Logo, HamburgerButton } from '../components'
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
                    className='col-start-2 col-span-10 3xl:col-start-3
                    3xl:col-span-8 py-4 flex justify-between items-center
                    transition-all duration-[0.84s] lg:py-0'>

                    <Overlay overlayRef={overlayRef} />

                    <div className='flex items-center gap-5'>
                        <div className='z-30 lg:hidden'>
                            <HamburgerButton onClick={toggleMenu} menuBtnRef={menuBtnRef} />
                        </div>
                        <Logo logoSrc={logoSrc} />
                    </div>

                    <div className='z-20'>
                        <NavBar navRef={navRef} navListRef={navList} navListItems={navListItems} />
                    </div>

                    <div className='flex items-center gap-5'>
                        {/* Cart Icon */}
                        <img
                            className='w-6 h-6'
                            src={cartSrc}
                            alt='cart'
                        />

                        {/* Avatar Icon */}
                        <img
                            className='w-6 h-6'
                            src={avatarSrc}
                            alt='avatar'
                        />

                    </div>
                </div>
            </div>
        </header>
    )
}
