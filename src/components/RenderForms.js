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

export const FilterCountriesForm = props => {
    const countries = props.places.map( place => {
        return (
            place.country
        )
    }).sort()

    const uniqCountries = [...new Set(countries)]

    const filterOptions = uniqCountries.map( (c, i) => {
        return (
            <option key={i} value={c}>
                {c}
            </option>
        )
    })

    return (
        <form>
            <label>
                Filter By Country: &nbsp;
                <select
                    id="countries"
                    onChange={props.handleOnSelect}
                >
                    <option key='all' value=''>All Countries</option>
                    {filterOptions}
                </select>
            </label>
        </form>
    )
}

export const FilterEventsForm = props => {
    const eventCountries = props.events.map( event => {
        return event.place.country
    })

    const uniqEventCountries = ([...new Set(eventCountries)]).sort()

    const eventFilterOptions = uniqEventCountries.map( (c, i) => {
        return (
            <option key={i} value={c}>
                {c}
            </option>
        )
    })

    return (
        <form>
            <label>
                Filter By Country: &nbsp;
                <select
                    id="eventCountries"
                    onChange={props.handleOnSelect}
                >
                    <option key='allEvents' value=''>All Events</option>
                    {eventFilterOptions}
                </select>
            </label>
        </form>
    )
}
