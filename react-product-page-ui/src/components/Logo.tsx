import React from 'react'

export function Logo({ className, wrapperClasses, logoSrc }: { className?: string, wrapperClasses?: string, logoSrc: any }) {
    return (
        <>
            <figure
                className={`${wrapperClasses}`}
            >
                <img
                    className={`object-cover ${className}`}
                    src={logoSrc}
                    alt={'logo img'}
                />
            </figure>
        </>
    )
}
