export default function Arrows (props) {
    const {prevCard, nextCard, componentName} = props
    return (
        <div className={`${componentName}Arrows`}>
            <span className={`prev${componentName}`} onClick={prevCard}>&#10094;</span>
            <span className={`next${componentName}`} onClick={nextCard}>&#10095;</span>
        </div>
    )
}