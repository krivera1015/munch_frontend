import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { connect } from 'react-redux';

class RestaurantContainer extends Component {
    render () {
        console.log('whats up', this.props.restaurants)
        return (
            <div>
                <RestaurantCard/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(RestaurantContainer)