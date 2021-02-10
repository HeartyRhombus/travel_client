import React, { Component } from 'react';
import { connect } from 'react-redux'
import EventComponent from '../components/EventComponent'
import NavBar from '../components/NavBar'
import { CardColumns } from 'react-bootstrap'
import { ThingsToDoHeader } from '../components/HeaderDivs'
import { ThingsToDoForm } from '../components/RenderForms'

class EventsContainer extends Component {

    render() {

        const eventsList = this.props.events.map( (e, i) => {
            return (
                <EventComponent key={i} event={e} />
                
            )
        })

        const sortedEvents = eventsList.sort( (a, b) => {
            return a.props.event.name > b.props.event.name ? 1 : -1
        })

        return (
            <div>
            {/* {console.log(eventsList.sort( (a, b) => a.props.event.name > b.props.event.name ? 1 : -1))} */}
                <div className="navbar">
                    <NavBar />
                </div>
                <hr/>
                <ThingsToDoHeader />
                <br/>
                <CardColumns>
                    {sortedEvents}
                </CardColumns>
                <br/>
                <hr/>
                <ThingsToDoForm />
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
