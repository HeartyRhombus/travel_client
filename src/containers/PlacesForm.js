import React, { Component } from 'react';

class PlacesForm extends Component {
    
    render() {
        return (
            <form>
                <input name="city" type="text" placeholder="City" />
                <input name="country" type="text" placeholder="Country" />
                <br/>
                <label>
                    Been There?
                    <input name="visited" type="checkbox" placeholder="Yes" />
                </label>
                <br/>
                <input type="submit" />
            </form>
        );
    }
}

export default PlacesForm;
