import React, {Component} from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'

class PlaceShow extends Component{
    render(){
        const id = this.props.match.params.id
        const selectedPlace = this.props.places.find( place => place.id == id )

        const thingsToDo = selectedPlace.events.map( event => {
            return (
                <div>
                    Things To Do In {selectedPlace.city}:
                    <li>
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

                <h3>{selectedPlace.city}, {selectedPlace.country}</h3>
                <hr/>
                {thingsToDo}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        places: state.placeReducer.places
    }
}

export default connect(mapStateToProps)(PlaceShow)