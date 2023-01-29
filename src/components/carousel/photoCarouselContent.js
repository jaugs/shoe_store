

export default function PhotoCarouselContent(props) {
    const {activeIndex, sliderImage} = props
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "activeSlide" : "inactiveSlide"}
                >
                    <img className="slideImage" src={slide.image} alt={slide.name} />
                    <div className="slideTitle">{slide.name}</div>
                </div>
            ))}
        </section>
    )
}