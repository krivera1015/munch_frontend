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
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/homepage'><HomePage/></Route>
                    <Route path='/location'><LocationContainer/></Route>
                    <Route path='/restaurant'><RestaurantContainer/></Route>
                    <Route path='/rouletteWheel'><RouletteWheel/></Route>
                </Switch>
            </div>
        )
    }
}

export default MainContainer