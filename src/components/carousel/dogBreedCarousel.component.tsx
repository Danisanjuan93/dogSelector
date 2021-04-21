import React, { useEffect, useRef } from "react";
import ImageGallery, { ReactImageGalleryProps } from 'react-image-gallery';
import { DogsImages } from "../../interfaces/dog.interface";
import TranslationContext from "../../utils/translation.context";
import "./dogBreedCarousel.style.css";

const DogBreedCarousel = (props: { images: DogsImages }): JSX.Element => {

    const [thumbnailPosition, setThumbnailPosition] = React.useState<"top" | "right" | "bottom" | "left" | undefined>("bottom");

    const handleScreenChange = (fullScreen: boolean): void => {
        setThumbnailPosition(fullScreen ? "left" : "bottom");
    }

    const ref = useRef<ImageGallery>(null);
    const { translator } = React.useContext(TranslationContext());

    useEffect(() => {
        props.images.images.length > 0 && ref.current?.slideToIndex(0);
    }, [props.images.images]);

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
            <ImageGallery ref={ref} {...options} />
        </>
    )

}

export default DogBreedCarousel;