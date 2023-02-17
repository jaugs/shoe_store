import { useEffect, useState } from 'react'
import  '../../styles/carouselStyle.css'
import { brandLogos } from '../brands.js'
import Arrows from './carouselArrows'

export default function Carousel () {

    const [currentIndex, setCurrentIndex] = useState(0)

    function carouselScroll () {
        if ((currentIndex === brandLogos.length -3) || (currentIndex > brandLogos.length)) {
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
            <div className='cardContainer'>
            {brandLogos.map((item, index) => {
                return <div 
                            className='card'
                            style={{transform: `translate(-${currentIndex * 120}%)`}}
                            key={index}>
                            <img className={`${item.type}Pic`} alt={item.name} src={item.image}></img>
                        </div>
            })}
            </div>
            <Arrows
                prevCard={() => setCurrentIndex(currentIndex < 1 ? brandLogos.length-1 : currentIndex -1)}
                nextCard={() => setCurrentIndex(currentIndex === brandLogos.length ? 0 : currentIndex + 1)}
                componentName = {'BrandCarousel'}
            />
        </div>
    )
}
