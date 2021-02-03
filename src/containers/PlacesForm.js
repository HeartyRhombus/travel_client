import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPlace } from '../actions/placeActions'

class PlacesForm extends Component {

    state = {
        place:{
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="city" type="text" placeholder="City" onChange={this.handleChange} />
                <input name="country" type="text" placeholder="Country" onChange={this.handleChange} />
                <br/>
                <label>
                    Been There?
                    <input name="visited" type="checkbox" onChange={this.handleToggle}/>
                </label>
                <br/>
                <input type="submit" />
            </form>
        );
    }
}

export default connect(null, { addPlace })(PlacesForm);
