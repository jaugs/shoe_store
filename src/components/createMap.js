//import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { useEffect, useRef, useState } from 'react'
//import mapPic from '../images/storemap.png'

export default function MapMarker() {

    let serverURL;

    fetch("../../netlify/functions/todo")
    .then(response => response.json())
    .then(json => {
        serverURL = json.api;
    })

    const ref = useRef(null)

    const [map, setMap] = useState();

    
    const mapStyle = {
        border: 'none',
        borderRadius: '15px',
        width: '25rem',
        height: '25rem'
    }



    useEffect(() => {
        if (ref.current && !map) {
            setMap(new Window.google.maps.Map(ref.current, {}));
        }

    }, [ref, map]);

    return (
        <div className='mapContainer'>
            {/* <img className='storePic' src={mapPic} alt='map to store'></img> */}
            <iframe
                title='map'
                style= {mapStyle}
                referrerPolicy="no-referrer-when-downgrade"
                src= {`https://www.google.com/maps/embed/v1/place?key=${serverURL}&q=Otherwides+Shoes,Tempe+AZ`}
                allowFullScreen>
            </iframe>
        </div>
    )
}
