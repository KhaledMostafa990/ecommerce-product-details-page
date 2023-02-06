import React from 'react'

export function HamburgerButton({ onClick, menuBtnRef }: { onClick: any, menuBtnRef: any }) {
    return (
        <>
            <div className='lg:hidden flex items-center z-40 '>
                <button
                    className='custom-hamburger-menu w-[24px] h-[18px] flex gap-[4.5px] [&.active]:absolute left-0 [&.active]:translate-x-5'
                    onClick={onClick}
                    ref={menuBtnRef}
                    type='button'
                    aria-controls='nav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='bg-slate-500 block w-6 h-[2.5px]' />
                    <span className='bg-slate-500 block w-6 h-[2.5px]' />
                    <span className='bg-slate-500 block w-6 h-[2.5px]' />
                </button>
            </div>
        </>
    )
}

