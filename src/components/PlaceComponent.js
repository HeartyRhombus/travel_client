import React from 'react'

const PlaceComponent = ( {place} ) => {
    // console.log(place)
    return (
        <div>
            {place.city}, {place.country}, {place.visited ? "Yes, I've been here!" : "Not Visted Yet"}
        </div>
    )
}

export default PlaceComponent