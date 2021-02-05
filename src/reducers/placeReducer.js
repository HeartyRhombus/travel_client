// import placeActions from '../actions/placeActions'

const placeReducer = (state = {places: [], loading: false}, action) => {
    switch(action.type){
        case 'BEGIN_FETCHING_PLACES':
            return{
                ...state,
                places: [...state.places],
                loading: true
            }

        case 'COMPLETED_FETCH_PLACES':
            return{
                ...state,
                places: action.places,
                loading: false
            }

        case 'ADD_PLACE':
            return{
                ...state,
                places: [...state.places],
                loading: true
            }

        case 'PLACE_ADDED':
            return{
                ...state,
                places: [...state.places, action.place],
                loading: false
            }

        case 'UPDATE_PLACE':
            return {
                ...state,
                places: [...state.places],
                loading: true
            }

        case 'PLACE_UPDATED':
            return{
                ...state,
                places: [...state.places, action.place],
                loading: false
            }
        // case 'DELETE_PLACE':
        //     return{}
        default:
            return state
    }
}

export default placeReducer