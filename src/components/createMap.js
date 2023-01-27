//import { Wrapper, Status } from '@googlemaps/react-wrapper'
//import { useEffect, useRef, useState } from 'react'
import mapPic from '../images/storemap.png'

export default function MapMarker() {

    // const ref = useRef(null)
    // const [map, setMap] = useState();
    // useEffect(() => {
    //     if (ref.current && !map) {
    //         setMap(new Window.google.maps.Map(ref.current, {}));
    //     }

    // }, [ref, map]);

    return (
        <div className='mapContainer'>
            <img className='storePic' src={mapPic} alt='map to store'></img>
            {/* <iframe
                title='map'
                width="450"
                height="250"
                
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=YOURKEY&q=Otherwides+Shoes,Tempe+AZ"
                allowfullscreen>
            </iframe> */}
        </div>
    )
}
