import React from 'react'
import {useParams} from 'react-router-dom'
import _ from 'lodash'

const PlaceShow = ( {place} ) => {
    const {id} = useParams()
    const selectedPlace = _.filter(place, {id: `${id}`})
    console.log(selectedPlace)

    return (
        <div>
            {selectedPlace.name}
        </div>
    )
}

export default PlaceShow