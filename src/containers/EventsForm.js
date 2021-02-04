import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPlaces } from '../actions/placeActions'
import { addEvent } from '../actions/eventActions'

class EventsForm extends Component {

    componentDidMount(){
        this.props.fetchPlaces()
    }

    state = {
        event: {
            name: "",
            visited: false,
            place_id: 1
        }
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            event: {
                ...this.state.event,
                [event.target.name]: event.target.value
            }
        })
    }

    handleToggle = event => {
        this.setState({
            ...this.state,
            event: {
                ...this.state.event,
                visited: event.target.checked
            }
        })
    }

    handleSelect = event => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            event: {
                ...this.state.event,
                place_id: event.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.event)
        const event = {...this.state.event}
        this.props.addEvent(event)
        this.setState({
            event: {
                name: "",
                visited: "",
                place_id: 1
            }
        })
    }

    render() {

        const selectPlace = this.props.places.map( (place, i) => {
            return (
                <option key={place.id} value={place.id}>{place.city}, {place.country}</option>
            )
        })

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="What do you want to do?"
                    value={this.state.event.name}
                    onChange={this.handleChange}
                />
                <br/>
                <label>
                    Have you seen this? 
                    <input
                        name="visited"
                        type="checkbox"
                        value={this.state.event.visted}
                        onChange={this.handleToggle}
                    />
                </label>
                <br/>
                <label>
                    Where is this?
                    <select id="places" onChange={this.handleSelect}>
                        {selectPlace}
                    </select>
                </label>
                <br/>
                <input type="submit" />
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.placeReducer.places
    }
}

export default connect(mapStateToProps, { fetchPlaces, addEvent })(EventsForm);
