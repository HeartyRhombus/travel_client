import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import { fetchPlaces } from './actions/placeActions'
import { fetchAllEvents } from './actions/eventActions'
import { IndexForm } from './components/RenderForms'
import { IndexHeader } from './components/HeaderDivs'

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
        <IndexHeader />
        <br/>
        <IndexForm />
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
