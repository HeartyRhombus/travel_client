import React, { Component } from 'react';
import { connect } from 'react-redux'
import EventComponent from '../components/EventComponent'
import EventsForm from '../containers/EventsForm'
import NavBar from '../components/NavBar'
import { CardColumns } from 'react-bootstrap'

class EventsContainer extends Component {

    render() {

        const eventsList = this.props.events.map( (e, i) => {
            return (
                <EventComponent key={i} event={e} />
                
            )
        })

        return (
            <div>
                <div className="navbar">
                    <NavBar />
                </div>
                <hr/>
                <h3 style={{textAlign: 'center', textDecorationLine: 'underline'}}>
                    Things To Do:
                </h3>
                <br/>
                <CardColumns>
                    {eventsList}
                </CardColumns>
                <br/>
                <hr/>
                <h5>Have you found something else to do?</h5>
                <EventsForm />
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.eventReducer.events
    }
}

export default connect(mapStateToProps)(EventsContainer);
