import '../styles/homepageStyle.css'
import storePic from '../images/store.png'
import storePic2 from '../images/store2.png'
//import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from './animate'

export default function Homepage (props) {

   // let observer = new IntersectionObserver(callback, options);

    // const options = {
    //     threshold: 0,
    //     reappear: false,
    //   }
      
     
    return (
        <div className='homepage'>
            <div className='firstSection'>
                <img className='shopImage' src= {storePic} alt='store display' />
                <div className='descriptionContainer'>
                <div className='description'>
                    Welcome to Otherwides Wide Shoes, we are an independent full-service shoe store that specializes in wide and extra-wide width shoes for men and women. 
                    We have a huge selection of in-stock footwear, these include dress, casual, sandals, boots, work and athletic shoes. 
                    From properly measuring your feet, fitting orthotics, finding comfortable work shoes, 
                    getting fit in a top-of-the-line running shoe to finding the perfect evening shoe for that special night out, our experienced staff can help.
                </div>
                </div>
            </div>
            <div className='secondSection'>
                <div className='services'>Services:
                    <ul>
                        <li>Huge size structure in stock:
                            <ul>
                                <li>Women: 6 - 13 W, WW, XXW</li>
                                <li>Men: 7 - 18 3E - 6E</li>
                            </ul>
                        </li>
                        <li>Experienced staff capable of foot measurement</li>
                        <li>Phone orders accepted</li>
                        <li>Seasonal as well as core styles</li>
                        <li>Year-round clearance room</li>
                    </ul>
                 </div>
                 <img className='shopImage' src= {storePic2} alt='second store display' />
            </div>
            <AnimateOnScroll children={<div>ddd</div>} reappear={false} threshold={.9} />
        </div>
    )
}