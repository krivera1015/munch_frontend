import React, { Component } from 'react'
import RestaurantItem from './RestaurantItem'
import { connect } from 'react-redux'

class RestaurantCard extends Component {

    displayedRestaurant = () => {
        return <RestaurantItem restaurant={this.props.displayedRestaurant}/> 
    }

    render () {
        return (
            <div>
                {this.props.restaurants.length > 0 ? this.displayedRestaurant() : null}
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(RestaurantCard)