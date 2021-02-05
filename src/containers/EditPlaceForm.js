import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { updatePlace } from '../actions/placeActions'

class EditPlaceForm extends Component {

    state = {
        place: {
            id: this.props.location.selectedPlace.id,
            city: this.props.location.selectedPlace.city,
            country: this.props.location.selectedPlace.country,
            visited: this.props.location.selectedPlace.visited
        }
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            place: {
                ...this.state.place,
                [event.target.name]: event.target.value
            }
        })
    }

    handleToggle = event => {
        this.setState({
            ...this.state,
            place: {
                ...this.state.place,
                visited: event.target.checked
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const place = {...this.state.place}
        this.props.updatePlace(place)
        this.props.history.push(`/places/${place.id}`, place)
    }

    render() {

        return (
            <div>
                <NavBar />
                <h4 style={{textAlign: 'center'}}>Edit {this.props.location.selectedPlace.city}</h4>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="city"
                        type="text"
                        placeholder="City"
                        value={this.state.place.city}
                        onChange={this.handleChange}
                    />
                    <input
                        name="country"
                        type="text"
                        placeholder="Country"
                        value={this.state.place.country}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>
                        Visited Yet?&nbsp;
                        <input
                            name="visited"
                            type="checkbox"
                            checked={this.state.place.visited}
                            onChange={this.handleToggle}
                        />
                    </label>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default connect(null, { updatePlace })(EditPlaceForm);
