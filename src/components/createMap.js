//import { Wrapper, Status } from '@googlemaps/react-wrapper'
//import mapPic from '../images/storemap.png'

export default function MapMarker() {

    const mapStyle = {
        border: 'none',
        borderRadius: '15px',
        width: '25rem',
        height: '25rem'
    }
    const key = process.env.REACT_APP_API_KEY
    return (
        <div className='mapContainer'>
            {/* <img className='storePic' src={mapPic} alt='map to store'></img> */}
            <iframe
                title='map'
                style= {mapStyle}
                referrerPolicy="no-referrer-when-downgrade"
                src= {`https://www.google.com/maps/embed/v1/place?key=${key}&q=Otherwides+Shoes,Tempe+AZ`}
                allowFullScreen>
            </iframe>
        </div>
    )
}
// `https://www.google.com/maps/embed/v1/place?key=${}&q=Otherwides+Shoes,Tempe+AZ`