import React, { Component } from 'react'
import LocationContainer from './LocationContainer'
import RestaurantContainer from './RestaurantContainer';
import HomePage from '../components/HomePage'
import { Route, Switch } from 'react-router-dom'
import RouletteWheel from '../components/RouletteWheel';
import Map from '../components/Map'

class MainContainer extends Component {

    render () {
        return (
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/location' component={LocationContainer}/>
                    <Route path='/restaurant' component={RestaurantContainer}/>
                    <Route path='/rouletteWheel' component={RouletteWheel}/>
                    <Route path='/map'><Map/></Route>
                </Switch>
            </div>
        )
    }
}

export default MainContainer