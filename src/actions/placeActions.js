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

export const addPlace = (place) => {
    return (dispatch) => {
        dispatch({type: 'ADD_PLACE'})
        fetch('http://localhost:3001/places', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(place)
        })
            .then(resp => resp.json())
            .then(place => dispatch({ type: 'PLACE_ADDED', place }))
    }
}

export const updatePlace = (place) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_PLACE' })
        fetch(`http://localhost:3001/places/${place.id}`, {
            method: 'PATCH',
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(place)
        })
            .then(resp => resp.json())
            .then(place => dispatch({ type: 'PLACE_UPDATED', place}))
    }
}