import React from 'react'

const EventComponent = ( {event} ) => {
    return (
        <li>
            {/* {event.place.city}, {event.place.country} */}
            {/* {console.log(event)} */}
            {/* <br/> */}
            {event.name} - Visited? {event.visited? "Yup!" : "Nope!"}
        </li>
    )
}

export default EventComponent