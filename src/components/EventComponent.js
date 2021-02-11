import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const EventComponent = ( {event} ) => {
    return (
        <Card style={{ minWidth: '18rem'}} >
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
                    {event.visited? "Hope you had a great time!" : "Still need to see."}
                    <br/>
                    <button>
                        <Link to={{
                            pathname: `/events/${event.id}/edit`,
                            event
                            }} >
                            Edit
                        </Link>
                    </button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EventComponent