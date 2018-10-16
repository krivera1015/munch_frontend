import React, { Component } from 'react'
import LocationContainer from './LocationContainer'
import RestaurantContainer from './RestaurantContainer';

class MainContainer extends Component {
    render () {
        return (
            <div>
                <LocationContainer/>
                <RestaurantContainer/>
            </div>
        )
    }
}

export default MainContainer