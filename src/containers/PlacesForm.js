import React, { Component } from 'react';

class PlacesForm extends Component {

    state = {
        city: "", 
        country: "",
        visited: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleToggle = event => {
        console.log(event.target.checked)
        this.setState({
            visited: event.target.checked
        })
    }

    render() {
        return (
            <form>
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

export default PlacesForm;
