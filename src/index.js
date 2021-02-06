import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import App from './App';
import rootReducer from './reducers/rootReducer'
import PlacesContainer from './containers/PlacesContainer'
import PlaceShow from './components/PlaceShow'
import EventsContainer from './containers/EventsContainer'
import EditPlaceForm from './containers/EditPlaceForm'
import EditEventForm from './containers/EditEventForm'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path='/places' component={PlacesContainer} />
        <Route exact path='/events' component={EventsContainer} />
        <Route path='/places/:id/edit' component={EditPlaceForm} />
        <Route path='/events/:id/edit' component={EditEventForm} />
        <Route path='/places/:id' component={PlaceShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
