import React, { Component } from 'react';
import { connect } from 'react-redux'
import PlaceComponent from '../components/PlaceComponent'
import PlacesForm from './PlacesForm'
import { fetchPlaces } from '../actions/placeActions'
class PlacesContainer extends Component {

    componentDidMount(){
        this.props.fetchPlaces()
    }

    render() {

        const placesList = this.props.places.map( (p, i) => {
            return (
                <PlaceComponent key={i} place={p}/>
            )
        })

        return (
            <div>
                <hr/>
                <div>
                    Add A Destination:
                    <PlacesForm />
                </div>
                <hr/>
                <div>
                    {placesList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.placeReducer.places)
    return {
        places: state.placeReducer.places
    }
}

export default connect(mapStateToProps, { fetchPlaces } )(PlacesContainer);
