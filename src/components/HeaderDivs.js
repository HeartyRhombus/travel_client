export const IndexHeader = () => {
    return (
        <h1>My Travel Bucket List!</h1>
    )
}

export const DestinationsHeader = () => {
    return (
        <h3 style={{textAlign: 'center', textDecorationLine: 'underline'}}>
            Destinations:
        </h3>
    )
}

export const ThingsToDoHeader = () => {
    return (
        <h3 style={{textAlign: 'center', textDecorationLine: 'underline'}}>
                    Things To Do:
                </h3>
    )
}

export const PlacesShowHeader = ( {place} ) => {
    return (
        <div style={{padding: '25px'}}>
            <h3 style={{textDecorationLine: 'underline' }}>
                {place.city}, {place.country}
            </h3>
            <p>
                {place.visited ? "You've been here before!" : "Haven't visited here just yet."}
            </p>
        </div>
    )
}