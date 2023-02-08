import React from 'react'

export function PrimaryButton({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>> }) {
    return (
        <>
            <button
                className={`font-bold py-2.5 px-6 rounded-md 
                text-white bg-primary-default capitalize lg:py-2 lg-px-12
                 ${className}`}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}