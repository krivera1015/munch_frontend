import React from 'react'
import {connect} from 'react-redux'
import {nextRestaurant} from '../redux/actionCreator'

const RestaurantItem = ({restaurant, nextRestaurant}) => {
    return (
        <div onClick={()=>{nextRestaurant(restaurant)}}>
            <img src={restaurant.image_url} alt={restaurant.name}/>
            <h2>name: {restaurant.name}</h2>
        </div>
    )
}

    


export default connect(null, {nextRestaurant})(RestaurantItem)