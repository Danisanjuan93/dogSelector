import React from "react";
import ImageGallery, { ReactImageGalleryProps } from 'react-image-gallery';
import { DogsImages } from "../../interfaces/dog.interface";
import "./dogBreedCarousel.style.css";

const DogBreedCarousel = (props: { images: DogsImages[] }): JSX.Element => {

    const [thumbnailPosition, setThumbnailPosition] = React.useState<"top" | "right" | "bottom" | "left" | undefined>("bottom");

    const handleScreenChange = (fullScreen: boolean): void => {
        setThumbnailPosition(fullScreen ? "left" : "bottom");
    }

    const options: ReactImageGalleryProps = {
        items: props.images,
        disableThumbnailScroll: true,
        showPlayButton: false,
        thumbnailPosition: thumbnailPosition,
        onScreenChange: handleScreenChange
    }

    return (
        <ImageGallery {...options} />
    )

}

export default DogBreedCarousel;