import React, {Component} from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import EventsForm from '../containers/EventsForm'
import { CardColumns, Card } from 'react-bootstrap'
import { PlacesShowHeader } from '../components/HeaderDivs'

class PlaceShow extends Component{

    render(){
        const id = this.props.match.params.id
        const selectedEvents = this.props.events.filter(event => event.place_id === parseInt(id))
        const selectedPlace = this.props.places.find( place => place.id === parseInt(id) )

        const thingsToDo = selectedEvents.map( event => {
            return (
                <Card style={{ width: '18rem'}} key={event.id}>
                    <Card.Body>
                        <Card.Subtitle>
                            {event.name}
                        </Card.Subtitle>
                        <Card.Text>
                            {event.visited ? "I can check this one off!" : "Still on my list."}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        })


        return (
            <div>
                <div className="navbar">
                    <NavBar />
                </div>
                <PlacesShowHeader place={selectedPlace} />
                <hr/>
                <div>
                    <p style={{textAlign: 'center', fontWeight: 'bold'}}>
                        Things To Do In {selectedPlace.city}:
                    </p>
                    <CardColumns>
                        {thingsToDo}
                    </CardColumns>
                </div>
                <hr/>
                <div className='addEventForm' style={{textAlign: 'center'}}>
                    <h6>What else would you like to do?</h6>
                    <EventsForm placeId={id}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        places: state.placeReducer.places,
        events: state.eventReducer.events
    }
}

export default connect(mapStateToProps)(PlaceShow)