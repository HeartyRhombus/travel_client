import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'


const PlaceComponent = ( props ) => {

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <Link to={`/places/${props.place.id}`} >
                        {props.place.city}, {props.place.country}
                    </Link>
                </Card.Title>
                <Card.Text>
                    {props.place.visited ? "Yes, I've been here!" : "Not Visted Yet"}
                    <br/>
                    <br/>
                    <button
                        data-id={props.place.id}
                        onClick={props.handleOnLike}
                    >
                        Likes {props.numberOfLikes[props.place.id] || 0}
                    </button>
                </Card.Text>
            </Card.Body>
            {/* {props.place.city}, {props.place.country},  */}
        </Card>
    )
}

export default PlaceComponent