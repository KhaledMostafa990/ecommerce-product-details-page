import React from "react";
import { BaseButton } from "./BaseButton";
import NavigateLeftIcon from "../assets/icon-previous.svg";
import NavigateRightIcon from "../assets/icon-next.svg";

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
                className='bg-white p-0 py-1 px-1 max-w-fit min-h-[32px]'
            >
                <img className="" src={NavigateLeftIcon} alt='navigate left' />
            </BaseButton>

            <BaseButton
                onClick={handleNext}
                className='bg-white p-0 py-1 px-1 max-w-fit min-h-[32px]'
            >
                <img className="" src={NavigateRightIcon} alt='navigate right' />
            </BaseButton>
        </div>
    );
}

