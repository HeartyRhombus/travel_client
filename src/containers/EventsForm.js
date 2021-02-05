import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPlaces } from '../actions/placeActions'
import { addEvent } from '../actions/eventActions'

class EventsForm extends Component {

    state = {
        event: {
            name: "",
            visited: false,
            place_id: this.props.placeId
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
        this.setState({
            ...this.state,
            event: {
                ...this.state.event,
                place_id: this.props.placeId || event.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const event = {...this.state.event}
        this.props.addEvent(event)
        this.setState({
            event: {
                name: "",
                visited: "",
                place_id: this.placeId
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
                    Have you seen this?&nbsp;&nbsp;
                    <input
                        name="visited"
                        type="checkbox"
                        checked={this.state.event.visted}
                        onChange={this.handleToggle}
                    />
                </label>
                <br/>
                <label>
                    Where is this?&nbsp;
                    <select id="places" value={this.props.placeId} onChange={this.handleSelect}>
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
