// import placeActions from '../actions/placeActions'

const placeReducer = (state = {places: [], loading: false}, action) => {
    switch(action.type){
        case 'LOAD_PLACES':
            return{
                ...state,
                loading: true
            }
        // case 'ADD_PLACE':
        //     return{}
        // case 'UPDATE_PLACE':
        //     return {}
        // case 'DELETE_PLACE':
        //     return{}
        default:
            return state
    }
}

export default placeReducer