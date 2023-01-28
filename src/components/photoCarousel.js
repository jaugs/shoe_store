import { useEffect, useState } from "react";
import Arrows from "./carouselArrows";
import PhotoCarouselContent from "./photoCarouselContent";
import Dots from "./photoCarouselDots";
import '../styles/photoCarouselStyle.css'



export default function PhotoCarousel(props) {
    const {images} = props
    const len = images.length - 1
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex +1);
        }, 4000);
        return () => clearInterval(interval);
    }, [activeIndex, len]);

    return (
        <div className="photoCarouselContainer">
            <PhotoCarouselContent activeIndex = {activeIndex} sliderImage={images} />
            <Arrows
                prevCard = {() => 
                    setActiveIndex(activeIndex < 1 ? len : activeIndex -1)
                }
                nextCard = {() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex +1)
                }
            />
            <Dots
                activeIndex = {activeIndex}
                sliderImage = {images}
                onclick = {(activeIndex => setActiveIndex(activeIndex))}
            />
        </div>
    )
}