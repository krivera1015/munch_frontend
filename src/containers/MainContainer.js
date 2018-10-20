import React, { Component } from 'react'
import LocationContainer from './LocationContainer'
import RestaurantContainer from './RestaurantContainer';
import HomePage from '../components/HomePage'
import { Route, Switch } from 'react-router-dom'
import RouletteWheel from '../components/RouletteWheel';

class MainContainer extends Component {

    render () {
        return (
            <div className='App'>
                <RouletteWheel/>
                <Switch>
                    <Route path='/homepage'><HomePage/></Route>
                    <Route path='/location'><LocationContainer/></Route>
                    <Route path='/restaurant'><RestaurantContainer/></Route>
                </Switch>
            </div>
        )
    }
}

export default MainContainer