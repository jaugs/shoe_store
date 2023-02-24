import { useState } from 'react'
import '../styles/mensPageStyle.css'
import AnimateOnScroll from './animate'
import PhotoCarousel from './carousel/photoCarousel'
import { mensShoes } from './mensproducts'

export default function Mens() {

    const [category, setCategory] = useState('')

    function changeCategory(type) {
        setCategory(type)
    }

    return (
        <section className="mensContainer">
           <AnimateOnScroll
             children={
                <div className='descriptionMensContainer'>
                    <h3> Quality Footwear That Fits </h3>
                    <div>Otherwides has the best selection of Men's dress, casual and athletic wide shoes and boots in the Valley.
                        Take a look through a sample of some of our styles
                    </div> 
                </div>
             }
             reappear={true}
             threshold={.3}
             right={true}qw
            />
            <div className='categoryContainer'>
                <button onClick={() => changeCategory('casual')} className='categoryButton'>Casual</button>
                <button onClick={() => changeCategory('dress')} className='categoryButton'>Dress</button>
                <button onClick={() => changeCategory('athletic')} className='categoryButton'>Athletic</button>

            </div>

            <PhotoCarousel images = {mensShoes} />
        </section>
    )
}