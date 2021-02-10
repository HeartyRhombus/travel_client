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

        const sortedPlaces = placesList.sort( (a, b) => {
            return a.props.place.country > b.props.place.country ? 1 : -1
        })

        

        return (
            <div>
            {/* {console.log(placesList.sort( (a, b) => a.props.place.country > b.props.place.country ? 1 : -1))} */}
                <div className="navbar">
                    <NavBar />
                </div>
                <hr/>
                <DestinationsHeader />
                <br/>
                <CardColumns>
                    {sortedPlaces}
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
