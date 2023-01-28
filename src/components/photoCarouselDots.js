
export default function Dots(props) {
    const {activeIndex, onclick, sliderImage} = props

    return (
        <div className="dotContainer">
            {sliderImage.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "activeDot" : "dot"}`}
                    onClick={() => onclick(index)}
                />
            ))}
        </div>
    );
}