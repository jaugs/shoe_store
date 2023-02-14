//import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { useEffect, useRef, useState } from 'react'
//import mapPic from '../images/storemap.png'

export default function MapMarker() {

    const key = process.env.REACT_APP_API_KEY

    const ref = useRef(null)

    const [map, setMap] = useState();


    // const [todo, setTodo] = useState('');
    // const [todoId, setTodoId] = useState(1);

    // async function getNewTodo() {
    //     const response = await fetch('/.netlify/functions/hello-world')
    //           .then(response => response.json()
    //       )
      
    //      await console.log(response)
    //   }

    const mapStyle = {
        border: 'none',
        borderRadius: '15px',
        width: '25rem',
        height: '25rem'
    }

    // useEffect(() => {
    //     async function fetchTodo() {
    //       const url = `../../netlify/functions/todo?id=1`;
    //       console.log(url)
    //       try {
    //         const todo = await fetch(url)
    //         const data = todo.json()
    //         console.log(data)
    //         setTodo(todo.title);
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     }
    //     fetchTodo();
    //   }, [todoId]);
    
    // exports.handler = async function (event, context) {
    //     const value = process.env.REACT_APP_API_KEY;
      
    //     return {
    //       statusCode: 200,
    //       body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}.` }),
    //     };  
    //   };



    useEffect(() => {
        if (ref.current && !map) {
            setMap(new Window.google.maps.Map(ref.current, {}));
        }

    }, [ref, map]);

    return (
        <div className='mapContainer'>
           {/* <button onClick={getNewTodo}> Get another todo </button> */}
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
