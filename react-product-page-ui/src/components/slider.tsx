import React from "react";
import { BaseButton } from "./BaseButton";
export function Slider({
    title,
    activeSlide,
    handlePrev,
    handleNext,
}: { title: string, activeSlide: string, handlePrev: () => void, handleNext: () => void }) {
    return (
        <div className='relative max-w-[445px] max-h-[445px] left-[50%] translate-x-[-50%]'>
            <div className='flex'>
                <img className='object-cover' src={ } alt={title} />
            </div>

            {/* Navigate buttons */}
            <div className='w-full flex p-4 justify-between text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>

                <BaseButton className='bg-white py-1 px-1 max-w-[32px] max-h-[32px] rounded-full' onClick={handlePrev}>
                    <svg width="100%" height="100%" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Path 2" d="M11 2L3 10L11 18" stroke="#1D2026" stroke-width="3" />
                    </svg>
                </BaseButton>

                <BaseButton className='bg-white py-1 px-1 max-w-[32px] max-h-[32px] rounded-full' onClick={handleNext}>
                    <svg width="100%" height="100%" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Path 2" d="M2 2L10 10L2 18" stroke="#1D2026" stroke-width="3" />
                    </svg>

                </BaseButton>
            </div>

            {/* Thumnails preview on desktop view */}

        </div>
    );
}
