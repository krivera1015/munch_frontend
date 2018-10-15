import React, { Component } from 'react';
import LocationForm from '../components/LocationForm';
import { connect } from 'react-redux';
import {newLocation} from '../redux/actionCreator'

class LocationContainer extends Component {
    
    //setting location state locally
    state = {
        text: ""
    }

    handleOnChange = (e) => {
        this.setState({text: e.target.value})
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        //using redux to get newLocation through dispatch
        //this.props.newLocation(this.state.text)
        
        //fetching from my local server to get my restaurants
        fetch('http://localhost:3000/api/v1/find_restaurants', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
              },
              //setting backend locations params to local state
            body: JSON.stringify({location: this.state.text})
        })
        .then(resp => resp.json())
        .then(console.log)
    }

    render(){
        console.log(this.state.text)
        return (
            <div>
                <LocationForm onChange={this.handleOnChange} onSubmit={this.handleOnSubmit} text={this.state.text}/>
            </div>
        )
    }

}

//using redux to set state through dispatch action
const mapDispatchToProps = dispatch => {
    return {
        newLocation: (location) => dispatch(newLocation(location))
    }
}

export default connect(null, mapDispatchToProps)(LocationContainer)
