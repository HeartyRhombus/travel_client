import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const EventComponent = ( {event} ) => {
    return (
        <Card style={{ width: '18rem'}} >
            <Card.Body>
                <Card.Title>
                    {/* <Link to={`/events/${props.event.id}`} > */}
                        {event.name}
                    {/* </Link> */}
                </Card.Title>
                <Card.Subtitle>
                    {event.place.city}, {event.place.country}
                </Card.Subtitle>
                <Card.Text>
                    Visited? {event.visited? "Yup!" : "Nope!"}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EventComponent