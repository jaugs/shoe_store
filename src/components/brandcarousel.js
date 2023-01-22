import { useEffect, useState } from 'react'
import '../styles/carouselStyle.css'

export default function Carousel () {

    const data = ['1','2', '3', '4']
    const [currentIndex, setCurrentIndex] = useState(0)

    function carouselScroll () {
        if (currentIndex === data.length -1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex +1)
    }

    useEffect(() => {
        const interval = setInterval(() => {carouselScroll()}, 3000)
        return () => clearInterval(interval)
    })

    return (
        <div className='carouselContainer'>
            {data.map((item, index) => {
                return <div className='card'
                            style={{transform: `translate(-${currentIndex *100}%)`}}
                            key={index}
                            >{item}</div>
            })}
            
        </div>
    )
}