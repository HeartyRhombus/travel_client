import React, { Component } from 'react';
import { connect } from 'react-redux'

class EventsContainer extends Component {
    render() {
        return (
            <div>
                You have reached the events container!
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
