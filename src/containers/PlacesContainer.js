import React, { Component } from 'react';
import { connect } from 'react-redux'
import PlaceComponent from '../components/PlaceComponent'
import NavBar from '../components/NavBar'
import { CardDeck, Container, Row } from 'react-bootstrap'
import { DestinationsHeader } from '../components/HeaderDivs'
import { DestinationsForm } from '../components/RenderForms'
import { FilterCountriesForm } from '../components/RenderForms'

class PlacesContainer extends Component {

    state = {
        country: ""
    }

    handleSelect = event => {
        this.setState({
            country: event.target.value
        })
    }

    render() {

        let placesList

        if (this.state.country !== ""){
            placesList = this.props.places.filter( place => place.country === this.state.country).map( p => {
                return <PlaceComponent key={p.id} place={p} />
            })
        } else {
            placesList = this.props.places.map( p => {
                return <PlaceComponent key={p.id} place={p} />
            })
        }

        const sortedPlaces = placesList.sort( (a, b) => {
            return (
                a.props.place.country.localeCompare(b.props.place.country) || ( a.props.place.city > b.props.place.city ? 1 : -1 )
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
                <FilterCountriesForm
                    places={this.props.places}
                    handleOnSelect={this.handleSelect}
                />
                <br/>
                <Container>
                    <Row md>
                        <CardDeck>
                            {sortedPlaces}
                        </CardDeck>
                    </Row>
                </Container>
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
