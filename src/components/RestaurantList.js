import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'

const renderSavedRestaurantCards = (restaurants) => {
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
          {/* <Button basic color='green'>
            Approve
          </Button> */}
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    )
  })
}
const RestaurantList = ({savedRestaurants}) => {
  return(
  <Card.Group>
    {renderSavedRestaurantCards(savedRestaurants)}
  </Card.Group>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(RestaurantList)