import AnimateOnScroll from "./animate"
import '../styles/brandspageStyle.css'
import { brandLogos } from "./brands"

export default function BrandsPage () {


    return (
        <div className="brandPageContainer">
            <AnimateOnScroll
             children={
                <section className='brandsInfoContainer'>
                    <h3> Our Brands </h3>
                    <div>We offer men's and women's wide and double-wide shoes, boots, sandals, sneakers for any occasion!
                        Take a look at some of our quality brands:
                    </div> 
                    <div className="sizes">
                        <p className="colorbold">Men's Sizes:</p>
                        <p>7 - 18, 3E - 6E</p>
                    </div>
                    <div className="sizes">
                        <p className="colorbold">Women's Sizes:</p>
                        <p>Women: 6 - 13, W, WW, XXW</p>
                    </div>
                </section>
             }
             reappear={true}
             threshold={.3}
             right={true}
            />
            <section className="brandLogoContainer">
            {brandLogos.map((logo, index) => (
                <div className="logoCard"
                     key={index}>
                     <div className="logoCardInner">
                        <div className="logoCardFront">
                            <img className="logo" src={logo.image} alt={logo.name} />
                        </div>
                        <div className="logoCardBack">
                            {logo.name}
                        </div>
                    </div>
                </div>
            ))}
            </section>

        </div>
    )
}