import React from "react";
import { BaseButton } from "./BaseButton";


export function LightboxModel({ children, lightboxOpen, handleOpenLightboxModel }: { children: React.ReactNode; lightboxOpen: boolean; handleOpenLightboxModel: (isOpen: boolean) => void; }) {
    return (
        <div
            className={`${lightboxOpen ? 'block' : 'hidden'} flex items-center justify-center
            fixed inset-0 z-50`}>

            {/* overlay */}
            <div
                className='fixed inset-0 bg-black/50 z-30' />

            <div
                className='relative max-w-[450px] max-h-[450px] z-40 mb-28 
                2xl:max-w-[550px] 2xl:max-h-[550px]'>

                {/* preview */}

                {children}

                {/* close button  */}
                <div className='absolute top-[-7%] right-0'>
                    <BaseButton
                        className='py-0 px-0'
                        onClick={() => handleOpenLightboxModel(false)}
                    >
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#D8D8D8" fillRule="evenodd" />
                        </svg>
                    </BaseButton>
                </div>

            </div>

        </div>
    );
}
