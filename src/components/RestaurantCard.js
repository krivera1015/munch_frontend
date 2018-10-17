import React from 'react'
import { connect } from 'react-redux'
import {saveRestaurant, declineRestaurant} from '../redux/actionCreator'
import { Container, Card, Image, Icon } from 'semantic-ui-react'
import SwipeableViews from 'react-swipeable-views';

const RestaurantCard = ({restaurants, displayedRestaurant, saveRestaurant, declineRestaurant}) => {
    //it will check if the restaurants we have is greater than 0
    //and will return the information, else it will do 
    if(restaurants.length > 0){
        return(
            
            <Container class="ui centered card">
                <div>
                <Card>
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
                            rating: {displayedRestaurant.rating}
                        </a>
                </Card.Content> 
                </Card>
                </div>
                <Icon onClick={()=>{saveRestaurant(displayedRestaurant)}} color='green' name='add'/>
                <Icon onClick={()=>{declineRestaurant(displayedRestaurant)}} color='red' name='minus'/>
            </Container>
            
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
export default connect(mapStateToProps, {saveRestaurant, declineRestaurant})(RestaurantCard)

