import React, { Component } from 'react';
import { connect } from 'react-redux'
// map thru places state to render place components
class PlacesContainer extends Component {
    render() {
        return (
            <div>
                This is the places container
            </div>
        );
    }
}



export default connect(mapStateToProps)(PlacesContainer);
