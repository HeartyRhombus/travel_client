import React, { Component } from 'react';
import { connect } from 'react-redux'
import PlaceComponent from '../components/PlaceComponent'
import NavBar from '../components/NavBar'
import { CardColumns } from 'react-bootstrap'
import { DestinationsHeader } from '../components/HeaderDivs'
import { DestinationsForm } from '../components/RenderForms'

class PlacesContainer extends Component {

    state ={
        likes: {}
    }

    handleLikes = event => {
        console.log(event.target.dataset.id)
        this.setState( (prevState) => ({
            likes: {
                ...prevState.likes,
                [event.target.dataset.id]: prevState.likes[event.target.dataset.id] ? prevState.likes[event.target.dataset.id] + 1 : 1
            }
        }))
    }

    render() {

        const placesList = this.props.places.map( p => {
            return (
                <PlaceComponent key={p.id} place={p} numberOfLikes={this.state.likes} handleOnLike={this.handleLikes}/>
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
