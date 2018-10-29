import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image, Modal, Container, Popup } from 'semantic-ui-react'
import {removeRestaurant, getCoordinates} from '../redux/actionCreator'
//import {Link} from 'react-router-dom'
import RouletteWheel from './RouletteWheel';


const RestaurantList = ({savedRestaurants, removeRestaurant, getCoordinates}) => {
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
            <Popup trigger={<Button basic color='blue' onClick={()=>getCoordinates(restaurant.coordinates)}> Navigate </Button>} content='Coming soon for V2 !)' />
            <Button onClick={() => removeRestaurant(restaurant) } basic color='red'>
              Remove
            </Button>
          </div>
        </Card.Content>
      </Card>
      )
    })
  }

  return(
    <Container>
          <Modal trigger={<Button onClick={ () => <RouletteWheel />}>Make my Choice</Button>}>
              <Modal.Header>Muncher Roulette</Modal.Header>
              <Modal.Content>
              <RouletteWheel />
              </Modal.Content>
          </Modal>
  <Card.Group>
    {renderSavedRestaurantCards(savedRestaurants, removeRestaurant)}
  </Card.Group>
    </Container>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, {removeRestaurant, getCoordinates})(RestaurantList)