import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPlaces } from '../actions/placeActions'

class EventsForm extends Component {

    componentDidMount(){
        this.props.fetchPlaces()
    }

    state = {
        event: {
            name: "",
            visited: false,
            place_id: null
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

    render() {

        const selectPlace = this.props.places.map( (place, i) => {
            return (
                <option value={i}>{place.city}, {place.country}</option>
            )
        })

        return (
            <form>
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
                    <select id="places">
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

export default connect(mapStateToProps, { fetchPlaces })(EventsForm);
