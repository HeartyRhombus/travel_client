import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import { fetchPlaces } from './actions/placeActions'
import { fetchAllEvents } from './actions/eventActions'
import PlacesForm from './containers/PlacesForm'

class App extends Component {

  componentDidMount(){
    this.props.fetchPlaces()
    this.props.fetchAllEvents()
  }

  render() {
    return (
      <div className="App">
        <div className='navbar'>
          <NavBar />
        </div>
        <h1>My Travel Bucket List!</h1>
        <br/>
        Where would you like to go?
        <PlacesForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.placeReducer.places)
  return {
    ...state,
      places: state.placeReducer.places,
      events: state.eventReducer.events
  }
}

export default connect(
  mapStateToProps,
  { fetchPlaces, fetchAllEvents }
  )(App);
