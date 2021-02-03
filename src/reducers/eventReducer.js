const eventReducer = (state = {events: [], loading: false}, action) => {
    switch(action.type){

        case 'BEGIN_FETCHING_ALL_EVENTS':
            return {
                ...state,
                events: [...state.events],
                loading: true
            }

        case 'COMPLETED_FETCH_ALL_EVENTS':
            return {
                ...state,
                events: action.events,
                loading: false
            }

        default:
            return state
    }
}

export default eventReducer