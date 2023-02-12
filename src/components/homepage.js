import '../styles/homepageStyle.css'
import storePic from '../images/store.png'
import storePic2 from '../images/store2.png'
import AnimateOnScroll from './animate'
import SignUpForm from './signup'
import AboutUs from './aboutUs'
import Carousel from './carousel/brandcarousel'
import MapMarker from './createMap'

export default function Homepage (props) {

    return (
        <div className='homepage'>
            <div className='firstSection'>
                <AnimateOnScroll 
                    children={<img className='shopImage' src= {storePic} alt='store display' />}
                    reappear={true} 
                    threshold={.3}
                    right={false}
                />
                <AnimateOnScroll
                    children={<div className='descriptionContainer'>
                                <h2>Welcome to Otherwides Shoes</h2>
                                <h3>The widest selection of shoes in the Valley</h3>
                                <div className='description'>
                                We are an independent local full-service shoe store specializing in wide and extra-wide width shoes for men and women. 
                                We have a huge selection of in-stock footwear, these include dress, casual, sandals, boots, work and athletic shoes. 
                                From properly measuring your feet, fitting orthotics, finding comfortable work shoes, 
                                getting fit in a top-of-the-line running shoe to finding the perfect evening shoe for that special night out, our experienced staff can help.
                                </div>
                            </div>}
                    reappear={true}
                    threshold={.2}
                    right={true}
                />
            </div>
            <div className='secondSection'>
                <AnimateOnScroll
                    children={
                        <div className='services'>
                        <h3>Sizes:</h3>
                        <p>Women: 6 - 13 W, WW, XXW</p>
                        <p>Men: 7 - 18 3E - 6E</p>
                        <h3>Services:</h3>
                            <ul>
                            <li>Experienced staff capable of foot measurement</li>
                            <li>Phone orders accepted</li>
                            <li>Seasonal as well as core styles</li>
                            <li>Year-round clearance room</li>
                        </ul>
                        </div>}
                    reappear={true}
                    threshold={.3}
                    right={false}
                />
                <AnimateOnScroll
                    children={<img className='shopImage' src= {storePic2} alt='second store display' />}
                    reappear={true}
                    threshold={.3}
                    right={true}
                />
            </div>
            <div className='thirdSection'>
            <AnimateOnScroll 
                children={<AboutUs />}
                reappear={true}
                threshold={.3}
                right={true}
            />
            </div>
            <Carousel></Carousel>
            <AnimateOnScroll 
                children={<SignUpForm />}
                reappear={true}
                threshold={.3}
                right={true}
            />
            <AnimateOnScroll 
                children={<MapMarker />}
                reappear={true}
                threshold={.3}
                right={false}
            />
        </div>
    )
}