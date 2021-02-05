import React, {Component} from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import EventsForm from '../containers/EventsForm'

class PlaceShow extends Component{

    render(){
        const id = this.props.match.params.id
        const selectedEvents = this.props.events.filter(event => event.place_id === parseInt(id))
        const selectedPlace = this.props.places.find( place => place.id === parseInt(id) )

        const thingsToDo = selectedEvents.map( event => {
            return (
                <div>
                    <li key={event.id}>
                        {event.name}
                    </li>
                </div>
            )
        })


        return (
            <div>
                <div className="navbar">
                    <NavBar />
                </div>

                <h3 style={{padding: '25px', textDecorationLine: 'underline' }}>{selectedPlace.city}, {selectedPlace.country}</h3>
                <hr/>
                <div>
                    <p style={{textAlign: 'center', fontWeight: 'bold'}}>
                        Things To Do In {selectedPlace.city}:
                    </p>
                    <p style={{padding: '25px'}}>
                        {thingsToDo}
                    </p>

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