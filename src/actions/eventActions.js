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