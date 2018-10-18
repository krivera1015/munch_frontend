import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'
import {removeRestaurant} from '../redux/actionCreator'

const renderSavedRestaurantCards = (restaurants, removeRestaurant) => {
  return restaurants.map( restaurant => {
    return (
      <Card>
      <Card.Content>
        <Image floated='right' size='small' src={restaurant.image_url} />
        <Card.Header>{restaurant.name}</Card.Header>
        <Card.Meta>Rating: {restaurant.rating}</Card.Meta>
        <Card.Description>
        <strong>Category:{restaurant.categories[0].title}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='blue'>
            Navigate
          </Button>
          <Button onClick={() => removeRestaurant(restaurant) } basic color='red'>
            Remove
          </Button>
        </div>
      </Card.Content>
    </Card>
    )
  })
}
const RestaurantList = ({savedRestaurants, removeRestaurant}) => {
  return(
  <Card.Group>
    {renderSavedRestaurantCards(savedRestaurants, removeRestaurant)}
  </Card.Group>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, {removeRestaurant})(RestaurantList)