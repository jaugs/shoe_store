
export default function PhotoDisplay(props) {
    const { images, openModal } = props

    return (
        <section className="photoCarouselContainer">
            {images.map((slide, index) => (
                <div
                    key={index}
                    className='imageContainer'
                >
                    <img onClick={() => openModal(slide, index)} className="slideImage" src={slide.image} alt={slide.name} />
                </div>
            ))}
        </section>
    )
}