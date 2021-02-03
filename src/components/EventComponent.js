import React from 'react'

const EventComponent = ( {event} ) => {
    return (
        <li>
            {event.place.city}, {event.place.country}
            <ul>
            <li>
                {event.name} - Visited? {event.visited? "Yup!" : "Nope!"}
            </li>
            </ul>
            
        </li>
    )
}

export default EventComponent