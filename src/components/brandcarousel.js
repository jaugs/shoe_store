import { useEffect, useState } from 'react'
import '../styles/carouselStyle.css'
import { brandLogos } from './brands.js'

export default function Carousel () {

    const [currentIndex, setCurrentIndex] = useState(0)

    function carouselScroll () {
        if (currentIndex === brandLogos.length -3) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex +1)
    }

    useEffect(() => {
        const interval = setInterval(() => {carouselScroll()}, 4000)
        return () => clearInterval(interval)
    })

   
    return (
        <div className='carouselContainer'>
            {brandLogos.map((item, index) => {
                return <div 
                            className='card'
                            style={{transform: `translate(-${currentIndex * 120}%)`}}
                            key={index}>
                            <img className='brandLogo' alt={item.name} src={item.image}></img>
                        </div>
            })}
        </div>
    )
}
