import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { Menu, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
//importing routes and switch to go somewhere depending on action
import { Link } from 'react-router-dom'
//import LocationForm from '../components/LocationForm'
import {clearRestaurants} from '../redux/actionCreator'

class RestaurantContainer extends Component {

    state = {
        activeItem: 'Nearby Restaurants'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    selectedTab = () => {
        if (this.state.activeItem === 'My Restaurants') {
            return <RestaurantList/>
        } else if (this.state.activeItem === 'Nearby Restaurants') {
            return <RestaurantCard/>
        } else if (this.state.activeItem === 'Different Location') {
            this.props.clearRestaurants()
            // return <NavLink to='/location'></NavLink>
        }
    }

    render () {
        const { activeItem } = this.state
        console.log('whats up', activeItem)
        return (
            <Container>
                <Menu tabular>
                    <Menu.Item name="Nearby Restaurants" active={activeItem === "Nearby Restaurants"} onClick={this.handleItemClick}/>
                    <Menu.Item name="My Restaurants" active={activeItem === "My Restaurants"} onClick={this.handleItemClick}/>
                    <Link to='/location'>
                        <Menu.Item name="Different Location" active={activeItem === "C"} onClick={(e) => {this.props.clearRestaurants(); this.handleItemClick(e, 'Different Location')}}/>
                    </Link>
                </Menu>
                {/*using ternary to display component based on what activeItem is*/}
                {/* {activeItem === 'My Restaurants' ? <RestaurantList/> : <RestaurantCard/>} */}
                {this.selectedTab()}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {clearRestaurants})(RestaurantContainer)