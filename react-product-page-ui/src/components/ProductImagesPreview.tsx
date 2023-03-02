import React from "react";
import { BaseButton } from "./BaseButton";

export function ProductImagesPreview(props: any) {
    const { title, images, isModel, activeIndex, setActiveIndex, handleOpenLightboxModel } = props;

    return (
        <>
            {/* Active Slide */}
            <MainActiveSlide
                activeIndex={activeIndex}
                title={title}
                images={images.main}
                handleOpenLightboxModel={handleOpenLightboxModel}
            />

            {/* Navigate buttons */}
            <NavigateButtons
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                isModel={isModel}
                slidesLength={images.main.length}
            />

            {/* Thumnails preview on desktop view */}
            <ThumbnailsRow
                activeIndex={activeIndex}
                title={title}
                images={images.thumbnails}
                setActiveIndex={setActiveIndex}
            />
        </>
    );
}

export function MainActiveSlide({ images, activeIndex, handleOpenLightboxModel, title }: { images: string[]; activeIndex: number, handleOpenLightboxModel: (isOpen: boolean) => void, title: string }) {

    return (
        <div className='flex cursor-pointer'>
            <link rel="preload" href={images[activeIndex]} as="image" />

            <img
                className='object-cover rounded-xl '
                onClick={() => handleOpenLightboxModel(true)}
                src={images[activeIndex]}
                alt={title}
            />
        </div>
    );
}

// Navigate buttons component
export function ThumbnailsRow({ images, activeIndex, title, setActiveIndex }: { images: string[], activeIndex: number, title: string, setActiveIndex: (i: number) => void }) {

    const handleNavigateByThumbnail = (i: number) => {
        setActiveIndex(i);
    };

    return (
        <div className='hidden lg:flex gap-[8px] justify-center mt-[16px]'>
            {images.map((thumbnail, idx) => {
                const activeIdx = activeIndex === idx ? 'active' : '';
                return (
                    <figure
                        key={idx}
                        className={`${activeIdx} relative rounded-xl border-transparent
                            border-4 [&.active]:border-primary-default cursor-pointer overflow-hidden`}
                        onClick={() => handleNavigateByThumbnail(idx)}
                    >
                        <img
                            className={`z-10 object-cover w-[88px] h-[88px] rounded-md`}
                            src={thumbnail}
                            alt={`${title} thumbnial ${activeIndex}`} />
                        <div className={`${activeIdx} z-20 absolute inset-0 [&.active]:bg-background-default/40 rounded-lg`} />
                    </figure>
                );
            })}
        </div>
    );
}

// Navigate buttons component
export function NavigateButtons({ isModel, slidesLength, activeIndex, setActiveIndex }: { isModel?: boolean, slidesLength: number, activeIndex: number, setActiveIndex: any }) {

    const handlePrev = () => {
        setActiveIndex((activeIndex + slidesLength - 1) % slidesLength);
    };

    const handleNext = () => {
        setActiveIndex((activeIndex + 1) % slidesLength);
    };

    return (
        <div
            className={`w-full flex p-4 justify-between text-center
            absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            ${isModel ? 'lg:initial' : 'lg:hidden'}`}
        >
            <BaseButton
                onClick={handlePrev}
                className='bg-white py-2 px-2 w-[32px] max-w-[32px] h-[32px] max-h-[32px] rounded-full'
            >
                <svg width="100%" height="100%" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Path 2" d="M11 2L3 10L11 18" stroke="#1D2026" strokeWidth="3" />
                </svg>
            </BaseButton>

            <BaseButton
                onClick={handleNext}
                className='bg-white py-2 px-2 w-[32px] max-w-[32px] h-[32px] max-h-[32px] rounded-full'
            >
                <svg width="100%" height="100%" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Path 2" d="M2 2L10 10L2 18" stroke="#1D2026" strokeWidth="3" />
                </svg>
            </BaseButton>
        </div>
    );
}

