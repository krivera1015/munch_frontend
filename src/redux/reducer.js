import {SET_RESTAURANTS} from './actionCreator'
//import {NEXT_RESTAURANT} from './actionCreator'
import {SAVE_RESTAURANT} from './actionCreator'
import {DECLINE_RESTAURANT} from './actionCreator'

//initializing our state in store
const initState = {
    restaurants: [],
    displayedRestaurant: {},
    savedRestaurants: [] 
}

//setting my current state in store
const reducer = (state = initState, action) => {
    //console.log(action.type)
    const index = state.restaurants.indexOf(action.payload)
    switch (action.type) {
        case SET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload.businesses,
                displayedRestaurant: action.payload.businesses[0]
            }
            //here we are getting our index of the object 
            //we are passing by finding it in our restaurants
            //we pass that index plus one to our displayedRest
        // case NEXT_RESTAURANT:
        //     return {
        //         ...state,
        //         displayedRestaurant: state.restaurants[index + 1]
        //     }

        //this will do the same as above but also save into my component
        case SAVE_RESTAURANT:
            console.log("in saveRestaurant")
            return {
                ...state,
                displayedRestaurant: state.restaurants[index + 1],
                savedRestaurants: [...state.savedRestaurants, action.payload]
            }
        
        //will just go to the next while keeping state in tack
        case DECLINE_RESTAURANT:
            return {
                ...state,
                displayedRestaurant: state.restaurants[index + 1]
            }
        default:
            return state
    }
}

export default reducer