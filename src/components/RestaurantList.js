import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image, Modal, Container, Header } from 'semantic-ui-react'
import {removeRestaurant} from '../redux/actionCreator'
import {Link} from 'react-router-dom'

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
    <Container>
      <Link to='/rouletteWheel'>
          <Modal trigger={<Button>Make my Choice</Button>}>
              <Modal.Header>Muncher Roulette</Modal.Header>
              <Modal.Content image>
                  <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                  <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>We've found the following gravatar image associated with your e-mail address.</p>
                  <p>Is it okay to use this photo?</p>
                  </Modal.Description>
              </Modal.Content>
          </Modal>
      </Link>
  <Card.Group>
    {renderSavedRestaurantCards(savedRestaurants, removeRestaurant)}
  </Card.Group>
    </Container>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, {removeRestaurant})(RestaurantList)