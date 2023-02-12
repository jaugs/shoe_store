import '../styles/mensPageStyle.css'
import AnimateOnScroll from './animate'
import PhotoCarousel from './carousel/photoCarousel'
import { mensShoes } from './mensproducts'

export default function Womens() {
    return (
        <section className="mensContainer">
           <AnimateOnScroll
             children={
                <div className='descriptionMensContainer'>
                    <h3> Quality Footwear That Fits </h3>
                    <div>Otherwides has the widest selection of Women's dress shoes, 
                        casual, and athletic shoes, as well as sandals and boots.
                    </div> 
                </div>
             }
             reappear={true}
             threshold={.3}
             right={true}
            />
            <PhotoCarousel images = {mensShoes} />
        </section>
    )
}