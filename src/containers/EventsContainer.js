import React, { Component } from 'react';
import { connect } from 'react-redux'
import EventComponent from '../components/EventComponent'
import { fetchAllEvents } from '../actions/eventActions'
import EventsForm from '../containers/EventsForm'

class EventsContainer extends Component {

    componentDidMount(){
        this.props.fetchAllEvents()
    }

    render() {

        const eventsList = this.props.events.map( (e, i) => {
            return (
                <EventComponent key={i} event={e} />
                
            )
        })

        return (
            <div>
            <h3>Things To Do:</h3>
                {eventsList}
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

export default connect(mapStateToProps, { fetchAllEvents })(EventsContainer);
