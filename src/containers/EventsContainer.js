import React, { Component } from 'react';
import { connect } from 'react-redux'
import EventComponent from '../components/EventComponent'
import { fetchAllEvents } from '../actions/eventActions'

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
                {/* You have reached the events container! */}
                {eventsList}
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
