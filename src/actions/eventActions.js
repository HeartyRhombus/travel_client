export const fetchAllEvents = () => {
    return (dispatch) => {
        dispatch({ type: 'BEGIN_FETCHING_ALL_EVENTS' })
        fetch('http://localhost:3001/events')
            .then(resp => resp.json())
            .then(events => dispatch({
                type: 'COMPLETED_FETCH_ALL_EVENTS', events
            }))
    }
}

export const addEvent = (event) => {
    return (dispatch) => {
        dispatch({type: 'ADD_EVENT'})
        fetch('http://localhost:3001/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(event)
        })
            .then(resp => resp.json())
            .then(event => dispatch({type: 'EVENT_ADDED', event}))
    }
}