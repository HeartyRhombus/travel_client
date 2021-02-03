import React from 'react'

const EventComponent = ( {event} ) => {
    return (
        <div>
            {/* {event.place.city}, {event.place.country} */}
            {/* {console.log(event)} */}
            <br/>
            {event.name} - Visited? {event.visited? "Yup!" : "Nope!"}
        </div>
    )
}

export default EventComponent