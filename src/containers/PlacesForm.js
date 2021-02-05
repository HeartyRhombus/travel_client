import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPlace } from '../actions/placeActions'

class PlacesForm extends Component {

    state = {
        place: {
            city: "", 
            country: "",
            visited: false
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
        this.props.addPlace(place)
        this.setState({
            place: {
                city: "", 
                country: "",
                visited: false
            }
        })
    }

    render() {
        return (
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
                    Been There?&nbsp;
                    <input
                        name="visited"
                        type="checkbox"
                        value={this.state.place.visited}
                        onChange={this.handleToggle}
                    />
                </label>
                <br/>
                <input type="submit" />
            </form>
        );
    }
}

export default connect(null, { addPlace })(PlacesForm);
