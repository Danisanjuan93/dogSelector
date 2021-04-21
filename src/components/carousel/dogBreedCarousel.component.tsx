import React from "react";
import ImageGallery, { ReactImageGalleryProps } from 'react-image-gallery';
import { DogsImages } from "../../interfaces/dog.interface";
import TranslationContext from "../../utils/translation.context";
import "./dogBreedCarousel.style.css";

const DogBreedCarousel = (props: { images: DogsImages }): JSX.Element => {

    const [thumbnailPosition, setThumbnailPosition] = React.useState<"top" | "right" | "bottom" | "left" | undefined>("bottom");

    const handleScreenChange = (fullScreen: boolean): void => {
        setThumbnailPosition(fullScreen ? "left" : "bottom");
    }

    const { translator } = React.useContext(TranslationContext());

    const options: ReactImageGalleryProps = {
        items: props.images.images,
        disableThumbnailScroll: true,
        showPlayButton: false,
        thumbnailPosition: thumbnailPosition,
        onScreenChange: handleScreenChange
    }

    return (
        <>
            <div className="align-breeds-text">
                {props.images.breeds.length > 0 && <div><h3 className="inline-content">{translator("breedsh3")}:</h3>   {props.images.breeds.join(', ')}</div>}
            </div>
            <ImageGallery  {...options} />
        </>
    )

}

export default DogBreedCarousel;