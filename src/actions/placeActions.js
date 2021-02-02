export const getPlaces = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_PLACES'
        })
    }
}