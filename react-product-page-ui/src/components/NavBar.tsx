
import React from 'react';


export const NavBar = ({ navRef, navListRef, navListItems }: { navRef: any, navListRef: any, navListItems: string[] }) => {

    return (
        <>
            {/* Navigation items*/}
            <nav
                id='nav'
                ref={navRef}
                className='bg-background-default h-screen min-w-[65%] 
                max-w-sm absolute top-0 left-0 translate-x-[-100%] [&.active]:translate-x-[-0%]
                transition-all duration-700 [&.active]:block lg:min-w-fit
                lg:static lg:h-fit lg:w-fit lg:translate-x-0 lg:translate-y-0'
            >
                <ul
                    ref={navListRef}
                    className='flex flex-col lg:items-center p-5 pt-20 lg:p-0 lg:flex-row'
                >
                    {navListItems.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={`lg:px-3`}>
                                <a
                                    href={`#${item}`}
                                    className={`capitalize block py-1 text-start text-heading-base text-lg transition-all duration-200 border-b-4 border-transparent 
                                    [&.active]:text-primary-default [&.active]:border-primary-default
                                    [&.active]:hover:rounded-none [&.active]:hover:bg-transparent 
                                    [&.active]:hover:px-0 hover:text-primary-default
                                    lg:text-base lg:hover:rounded-full lg:hover:bg-primary-default/[0.25] hover:lg:px-2 lg:py-8 [&.active]:lg:py-4 lg:hover:lg:py-1  ${index === 0 && 'active'}`}>
                                    {item}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
};

