import React, {Component} from 'react' 
import { connect } from 'react-redux'
import {saveRestaurant, declineRestaurant} from '../redux/actionCreator'
import { Container, Card, Image, Icon, Modal, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import toWeekday from '../helpers/toWeekday'

class RestaurantCard extends Component {
    //it will check if the restaurants we have is greater than 0
    //and will return the information, else it will do 
    state = {
        open: false,
        attributes: {
            photos: [],
            name: "",
            hours: [
                {
                    is_open_now: "",
                    open: []
                }
            ]
        }
    }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    handleOnClick = () => {
        fetch('http://localhost:3000/api/v1/attributes', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            //setting backend locations params to local state
            body: JSON.stringify({ id: this.props.displayedRestaurant.id })
        })
        .then(resp => resp.json())
        .then(data => {
            if(!data.error){
                console.log(data)
                this.setState({attributes: data})
            }
        })
    }
    
    render(){
        console.log("my attributes", this.state.attributes)
        const {restaurants, displayedRestaurant, saveRestaurant, declineRestaurant} = this.props
        const {open} = this.state
        if(restaurants.length <= 0){
            return <Redirect to='/location'/>
        }else{
            return(
                <div>
                    <div className="plus">
                        <Icon size="huge" onClick={()=>{saveRestaurant(displayedRestaurant)}} color='green' name='add'/>
                    </div>
                <Container className="ui centered card">
                    <div>
                        <Card>
                            <Image src={displayedRestaurant.image_url} alt={displayedRestaurant.name}/>
                            <Card.Content>
                            <Card.Header>{displayedRestaurant.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>Category: {displayedRestaurant.categories[0].title}</span>
                            </Card.Meta>
                            <Card.Description>
                                <Modal trigger={
                                    <Button onClick={this.handleOnClick}>
                                        Restaurant Info
                                    </Button>}>
                                    <Modal.Header>{this.state.attributes.name}</Modal.Header>
                                    <Modal.Content image>
                                        <Carousel>
                                            <div className='image'>
                                                <img src={this.state.attributes.photos[0]}/>
                                            </div>
                                            <div>
                                                <img src={this.state.attributes.photos[1]}/>
                                            </div>
                                            <div>
                                                <img src={this.state.attributes.photos[2]}/>
                                            </div>
                                        </Carousel>
                                    <Modal.Description>
                                        <div>
                                            <br/>
                                            <p>{this.state.attributes.phone}</p>
                                            <br/>
                                            <p>{this.state.attributes.hours && this.state.attributes.hours[0].is_open_now ? "Open" : "Closed"} Now</p>
                                            <ul>
                                                {this.state.attributes.hours && this.state.attributes.hours[0].open.map(obj => {
                                                    return <li>{toWeekday(obj.day)}: {obj.start} - {obj.end}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </Modal.Description>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Modal
                                        open={open}
                                        onOpen={this.open}
                                        onClose={this.close}
                                        size='large'
                                        // trigger={
                                        //     <Button primary icon>
                                        //         More Info <Icon name='right chevron' />
                                        //     </Button>
                                        // }
                                        >
                                            <Modal.Header>Modal #2</Modal.Header>
                                                <Modal.Content>
                                                    <p>That's everything!</p>
                                                </Modal.Content>
                                            <Modal.Actions>
                                                <Button icon='check' content='All Done' onClick={this.close} />
                                            </Modal.Actions>
                                        </Modal>
                                    </Modal.Actions>
                                </Modal>
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                    rating: {displayedRestaurant.rating}
                        </Card.Content> 
                        </Card>
                    </div>
                </Container>
                    <div className="minus">
                        <Icon size="huge" onClick={()=>{declineRestaurant(displayedRestaurant)}} color='red' name='minus'/>
                    </div>
                </div>
            )
            }
    }
}

const mapStateToProps = state => {
    return state
}

//getting my current states and dispatching my action to get
//next restaurant by using code in reducer
export default connect(mapStateToProps, {saveRestaurant, declineRestaurant})(RestaurantCard)

