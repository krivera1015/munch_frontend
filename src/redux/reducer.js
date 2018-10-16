import {SET_RESTAURANTS} from './actionCreator'

//initializing our state in store
const initState = {
    restaurants: [],
    displayedRestaurant: {
    } 
}

//setting my current state in store
const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_RESTAURANTS:
            return { ...state, restaurants: action.payload.businesses, displayedRestaurant: action.payload.businesses[0]}
        case "INCREMENT_UP":
            const index = state.restaurants.indexOf(action.payload)
            return {...state, displayedRestaurant: state.restaurants[index + 1]}
        default:
            return state
    }
}

export default reducer