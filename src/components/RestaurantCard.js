import React from 'react'
import { connect } from 'react-redux'
import {nextRestaurant} from '../redux/actionCreator'
import { Card, Image, Icon } from 'semantic-ui-react'
import SwipeableViews from 'react-swipeable-views';

const RestaurantCard = ({restaurants, displayedRestaurant, nextRestaurant}) => {
    //it will check if the restaurants we have is greater than 0
    //and will return the information, else it will do nothing
    if(restaurants.length > 0){
        return(
            <SwipeableViews>
            <div class="ui centered card">
            <Card onClick={()=>{nextRestaurant(displayedRestaurant)}}>
                <Image src={displayedRestaurant.image_url} alt={displayedRestaurant.name}/>
                <Card.Content>
                <Card.Header>{displayedRestaurant.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Category: {displayedRestaurant.categories[0].title}</span>
                </Card.Meta>
                {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description> */}
                </Card.Content>
                <Card.Content extra>
                    <a>
                <Icon name='user' />
                        rating: {displayedRestaurant.rating}
                    </a>
            </Card.Content> 
            </Card>
            </div>
            </SwipeableViews>
        )
        }else{
            return null
        }
}

const mapStateToProps = state => {
    return state
}

//getting my current states and dispatching my action to get
//next restaurant by using code in reducer
export default connect(mapStateToProps, {nextRestaurant})(RestaurantCard)

