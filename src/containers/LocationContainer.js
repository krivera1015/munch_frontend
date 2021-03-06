import React, { Component } from 'react';
import LocationForm from '../components/LocationForm';
import { connect } from 'react-redux';
//bringing in the function fetchRestaurants
import { fetchRestaurants } from '../redux/actionCreator'
import { Redirect } from 'react-router-dom'

class LocationContainer extends Component {
    
    //setting location state locally
    state = {
        location: "",
    }

    handleOnChange = (e) => {
        this.setState({location: e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        //using redux to get newLocation through dispatch
        //fetching from my local server to get my restaurants
        //passing in my local state location to fetch in my action
        this.props.fetchRestaurants(this.state.location)
    }

    render(){
        console.log("hello this is my restaurants", this.props)
        let submitted = this.props.restaurants.length > 0 ? (<Redirect to='/restaurant'/>) : (<div>
            <LocationForm onChange={this.handleOnChange} onSubmit={this.handleOnSubmit} location={this.state.location}/>
        </div>)
        return submitted
    }

}

//allows me to see my props/state in console.log
const mapStateToProps = state => {
    return state
}

//allows me to use my fetchRestaurant function as props to pass in my 
//local state location
export default connect(mapStateToProps, { fetchRestaurants })(LocationContainer)
