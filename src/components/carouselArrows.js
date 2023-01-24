export default function Arrows (props) {
    const {prevCard, nextCard} = props
    return (
        <div className="arrows">
            <span className="prev" onClick={prevCard}>&#10094;</span>
            <span className="next" onClick={nextCard}>&#10095;</span>
        </div>
    )
}