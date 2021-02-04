import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'


const PlaceComponent = ( props ) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    <Link to={`/places/${props.place.id}`} >
                        {props.place.city}, {props.place.country}
                    </Link>
                </Card.Title>
                <Card.Text>
                {props.place.visited ? "Yes, I've been here!" : "Not Visted Yet"}
                </Card.Text>
            </Card.Body>
            {/* {props.place.city}, {props.place.country},  */}
        </Card>
    )
}

export default PlaceComponent