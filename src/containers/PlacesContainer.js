import React, { Component } from 'react';
import { connect } from 'react-redux'
import PlaceComponent from '../components/PlaceComponent'
import PlacesForm from './PlacesForm'
import NavBar from '../components/NavBar'
import { CardColumns } from 'react-bootstrap'

class PlacesContainer extends Component {

    render() {

        const placesList = this.props.places.map( p => {
            return (
                <PlaceComponent key={p.id} place={p} />
            )
        })

        

        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <hr/>
                <div style={{textAlign: 'center'}}>
                    Add a Destination:
                    <br/>
                    <PlacesForm />
                </div>
                <hr/>
                <CardColumns>
                    {placesList}
                </CardColumns>
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
