import React from "react";
import { BaseButton } from "./BaseButton";

interface ProductImagesPreviewProps {
    images: {
        main: string[];
        thumbnails: string[];
    };
    title: string;
}


export function ProductImagesPreview({ images, title }: ProductImagesPreviewProps) {
    const slides = images.main.length;

    const [index, setIndex] = React.useState(0);
    const [lightboxOpen, setLightboxOpen] = React.useState(false);

    const handlePrev = () => {
        setIndex((index + slides - 1) % slides);
    };

    const handleNext = () => {
        setIndex((index + 1) % slides);
    };

    const handleNavigateByThumbnail = (i: number) => {
        setIndex(i);
    };
    // open lightbox model by clicking on the main image
    const handleOpenLightboxModel = (isOpen: boolean) => {
        if (isOpen) {
            setLightboxOpen(true);
        } else {
            setLightboxOpen(false);
        }
    };


    return (
        <div>
            <div className='relative max-w-[445px] max-h-[445px] left-[50%] translate-x-[-50%]
            lg:left-0 lg:translate-x-0  '>

                {/* Active Slide */}
                <MainActiveSlide handleOpenLightboxModel={handleOpenLightboxModel}
                    images={images}
                    index={index}
                    title={title} />

                {/* Navigate buttons */}
                <NavigateButtons
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    lightboxOpen={lightboxOpen}
                />

                {/* Thumnails preview on desktop view */}
                <ThumbnailsRow
                    index={index}
                    title={title}
                    images={images}
                    handleNavigateByThumbnail={handleNavigateByThumbnail}
                />
            </div>

            {/* Lightbox model */}
            <LightboxModel
                index={index}
                title={title}
                images={images}
                lightboxOpen={lightboxOpen}
                handleOpenLightboxModel={handleOpenLightboxModel}
                handlePrev={handlePrev} handleNext={handleNext}
                handleNavigateByThumbnail={handleNavigateByThumbnail}
            />
        </div>
    );
}

function MainActiveSlide({ images, index, handleOpenLightboxModel, title }: { images: { main: string[]; thumbnails: string[]; }, index: number, handleOpenLightboxModel: (isOpen: boolean) => void, title: string }) {
    return (<div className='flex cursor-pointer'>
        <img
            className='object-cover rounded-xl'
            onClick={() => handleOpenLightboxModel(true)}
            src={images.main[index]}
            alt={title} />
    </div>
    );
}

// Navigate buttons component
function ThumbnailsRow({ images, index, handleNavigateByThumbnail, title }: { images: { main: string[]; thumbnails: string[]; }, index: number, handleNavigateByThumbnail: (i: number) => void, title: string }) {
    return <div className='hidden lg:flex gap-[8px] justify-center mt-[16px]'>
        {images.thumbnails.map((thumbnail, i) => {
            const activeIdx = index === i ? 'active' : '';
            return (
                <figure
                    className={`${activeIdx} relative rounded-xl border-transparent
                            border-4 [&.active]:border-primary-default cursor-pointer overflow-hidden`}
                    onClick={() => handleNavigateByThumbnail(i)}
                >
                    <img
                        className={`z-10 object-cover w-[88px] h-[88px] rounded-md`}
                        src={thumbnail}
                        alt={`${title} thumbnial ${index}`} />
                    <div className={`${activeIdx} z-20 absolute inset-0 [&.active]:bg-background-default/40 rounded-lg`} />
                </figure>
            );
        })}
    </div>;
}

// Navigate buttons component
function NavigateButtons({ handlePrev, handleNext, lightboxOpen }: { handlePrev: any, handleNext: any, lightboxOpen?: boolean }) {

    return (
        <div
            className={`w-full flex p-4 justify-between text-center absolute
            top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            lg:hidden ${lightboxOpen && 'block'}`}
        >
            <BaseButton
                className='bg-white py-1 px-1 max-w-[32px] max-h-[32px] rounded-full'
                onClick={handlePrev}
            >
                <svg width="100%" height="100%" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Path 2" d="M11 2L3 10L11 18" stroke="#1D2026" strokeWidth="3" />
                </svg>
            </BaseButton>

            <BaseButton
                className='bg-white py-1 px-1 max-w-[32px] max-h-[32px] rounded-full'
                onClick={handleNext}
            >
                <svg width="100%" height="100%" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Path 2" d="M2 2L10 10L2 18" stroke="#1D2026" strokeWidth="3" />
                </svg>
            </BaseButton>
        </div>
    );
}

// Lightbox model component
export function LightboxModel({ index, title, images, lightboxOpen, handleOpenLightboxModel, handlePrev, handleNext, handleNavigateByThumbnail }: { index: number, title: string, images: { main: string[]; thumbnails: string[]; }, lightboxOpen: boolean, handleOpenLightboxModel: (isOpen: boolean) => void, handlePrev: any, handleNext: any, handleNavigateByThumbnail: (i: number) => void }) {
    return (
        <div
            className={`${lightboxOpen ? 'block' : 'hidden'} flex items-center justify-center
            fixed inset-0 z-50`}>
            <div
                className='fixed inset-0 bg-black/50 z-30'
            />

            <div className='relative max-w-[550px] max-h-[550px] z-40 mb-28'>
                {/* Active Slide */}
                <MainActiveSlide
                    index={index}
                    title={title}
                    images={images}
                    handleOpenLightboxModel={handleOpenLightboxModel}
                />

                {/* Navigate buttons */}
                <NavigateButtons
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    lightboxOpen={lightboxOpen}
                />

                {/* Thumnails preview on desktop view */}
                <ThumbnailsRow
                    index={index}
                    title={title}
                    images={images}
                    handleNavigateByThumbnail={handleNavigateByThumbnail}
                />

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