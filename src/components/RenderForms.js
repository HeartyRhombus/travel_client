import PlacesForm from '../containers/PlacesForm'
import EventsForm from '../containers/EventsForm'


export const IndexForm = () => {
    return (
        <>
            Where would you like to go?
            <PlacesForm />
        </>
    )
}

export const DestinationsForm = () => {
    return (
        <div style={{textAlign: 'center'}}>
            Add a Destination:
            <br/>
            <PlacesForm />
        </div>
    )
}

export const ThingsToDoForm = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h5>Have you found something else to do?</h5>
            <EventsForm />
        </div>
    )
}

