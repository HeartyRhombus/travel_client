import { combineReducers } from 'redux'
import eventReducer from './eventReducer'
import placeReducer from './placeReducer'

const rootReducer = combineReducers({
    placeReducer,
    eventReducer
})

export default rootReducer