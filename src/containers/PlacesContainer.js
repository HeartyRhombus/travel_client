import React, { Component } from 'react';
import { connect } from 'react-redux'
import PlaceComponent from '../components/PlaceComponent'
import NavBar from '../components/NavBar'
import { CardColumns } from 'react-bootstrap'
import { DestinationsHeader } from '../components/HeaderDivs'
import { DestinationsForm } from '../components/RenderForms'

class PlacesContainer extends Component {

    render() {

        const placesList = this.props.places.map( p => {
            return (
                <PlaceComponent key={p.id} place={p} />
            )
        })

        

        return (
            <div>
                <div className="navbar">
                    <NavBar />
                </div>
                <hr/>
                <DestinationsHeader />
                <br/>
                <CardColumns>
                    {placesList}
                </CardColumns>
                <hr/>
                <DestinationsForm />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state,
        places: state.placeReducer.places
    }
}

export default connect(mapStateToProps)(PlacesContainer);
