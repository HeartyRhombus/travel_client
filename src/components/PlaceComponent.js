import React from 'react'
import {Link} from 'react-router-dom'


const PlaceComponent = ( props ) => {

    return (
        <div>
            <Link to={`/places/${props.place.id}`} >
            {props.place.city}, {props.place.country}, {props.place.visited ? "Yes, I've been here!" : "Not Visted Yet"}
            </Link>
        </div>
    )
}

export default PlaceComponent