import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { Menu, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
//importing routes and switch to go somewhere depending on action
//import { Route, Switch } from 'react-router-dom'

class RestaurantContainer extends Component {

    state = {
        activeItem: 'Nearby Restaurants'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        const { activeItem } = this.state
        console.log('whats up', this.props)
        return (
            <Container>
                <Menu tabular>
                    <Menu.Item name="Nearby Restaurants" active={activeItem === "Nearby Restaurants"} onClick={this.handleItemClick}/>
                    <Menu.Item name="My Restaurants" active={activeItem === "My Restaurants"} onClick={this.handleItemClick}/>
                </Menu>
                {/*using ternary to display component based on what activeItem is*/}
                {activeItem === 'My Restaurants' ? <RestaurantList/> : <RestaurantCard/>}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(RestaurantContainer)