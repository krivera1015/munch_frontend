import React, { Component } from 'react'
import {connect} from 'react-redux'

class Map extends Component {

    API_KEY = process.env.HERE_API_KEY
    APP_CODE = process.env.HERE_APP_CODE

    getMap = () => {
        fetch(`https://image.maps.api.here.com/mia/1.6/routing?app_id=${this.API_KEY}&app_code=${this.APP_CODE}&poix0=${this.state.coordinates.latitude},${this.state.coordinates.longitude}&poix1=${this.state.coordinates.latitude},${this.state.coordinates.longitude}&waypoint0=geo!${this.state.coordinates.latitude},${this.state.coordinates.longitude}&waypoint1=geo!${this.state.coordinates.latitude},${this.state.coordinates.longitude}`)
            .then(resp => resp.json())
            .then(data => console.log("yo", data))
    }


    render () {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Map)