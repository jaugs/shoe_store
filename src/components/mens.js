import '../styles/mensPageStyle.css'
import AnimateOnScroll from './animate'
import PhotoCarousel from './photoCarousel'
import { mensShoes } from './mensproducts'
export default function Mens() {


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
             right={true}
            />
            <PhotoCarousel images = {mensShoes} />

        </section>
    )
}