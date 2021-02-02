export const fetchPlaces = () => {
    return (dispatch) => {
        dispatch({ type: 'BEGIN_FETCHING_PLACES' })
        fetch('http://localhost:3001/places')
            .then(resp => resp.json())
            .then(places => dispatch({
                type: 'COMPLETED_FETCH_PLACES', places
            }))
    }
}