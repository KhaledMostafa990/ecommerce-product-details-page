import React from 'react'

export function BaseButton({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>> }) {
    return (
        <>
            <button
                onClick={onClick}
                className={`font-bold py-2.5 px-6 rounded-md capitalize
                flex  justify-center items-center lg:py-2 lg-px-12 ${className}`}
            >
                {children}
            </button>
        </>
    )
}