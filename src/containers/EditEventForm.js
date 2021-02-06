import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
// import { updateEvent } from '../actions/eventActions.js

class EditEventForm extends Component {

    state = {
        event: {
            id: this.props.location.event.id,
            name: this.props.location.event.name,
            visited: this.props.location.event.visited
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            event: {
                ...this.state.event,
                [e.target.name]: e.target.value
            }
        })
    }

    handleToggle = e => {
        this.setState({
            ...this.state,
            event: {
                ...this.state.event,
                visited: e.target.checked
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const event = {...this.state.event}
        console.log(event)
    }

    render() {
        return (
            <div>
                <NavBar />
                <h4 style={{textAlign: 'center'}}>Edit {this.props.location.event.name}</h4>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        value={this.state.event.name}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>
                        Seen this yet?&nbsp;
                        <input
                            name="visited"
                            type="checkbox"
                            checked={this.state.event.visited}
                            onChange={this.handleToggle}
                        />
                    </label>
                    <br/>
                    <input type="submit"/>

                </form>
            </div>
        );
    }
}

export default EditEventForm;
