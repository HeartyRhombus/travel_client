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

        case 'ADD_EVENT':
            return{
                ...state,
                events: [...state.events],
                loading: true
            }

        case 'EVENT_ADDED':
            return{
                ...state,
                events: [...state.events, action.event],
                loading: false
            }

        case 'UPDATE_EVENT':
            return{
                ...state,
                events: [...state.events],
                loading: true
            }

        case 'EVENT_UPDATED':
            const newEvents = state.events.map( event => {
                if (event.id === action.event.id){
                    return action.event
                } else {
                    return event
                }
            })

            return{
                ...state,
                events: newEvents,
                loading: false
            }

        default:
            return state
    }
}

export default eventReducer