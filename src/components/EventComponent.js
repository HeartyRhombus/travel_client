import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const EventComponent = ( {event} ) => {
    return (
        <Card style={{ width: '18rem'}} >
            <Card.Body>
                <Card.Title>
                        {event.name}
                </Card.Title>
                <Card.Subtitle>
                    <Link to={`/places/${event.place.id}`} >
                        {event.place.city}, {event.place.country}
                    </Link>
                </Card.Subtitle>
                <Card.Text>
                    Visited? {event.visited? "Yup!" : "Nope!"}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EventComponent