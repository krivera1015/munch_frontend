import {SET_RESTAURANTS} from './actionCreator'
import {SAVE_RESTAURANT} from './actionCreator'
import {DECLINE_RESTAURANT} from './actionCreator'
import {REMOVE_RESTAURANT} from './actionCreator'
import {GET_COORDINATES} from './actionCreator'

//initializing our state in store
const initState = {
    restaurants: [],
    displayedRestaurant: {},
    savedRestaurants: [],
    coordinates: {}
}

//setting my current state in store
const reducer = (state = initState, action) => {
    console.log(state)
    const restaurantIndex = state.restaurants.indexOf(action.payload)
    const saveRestIndex = state.savedRestaurants.indexOf(action.payload)
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
            //console.log("in saveRestaurant")
            return {
                ...state,
                displayedRestaurant: state.restaurants[restaurantIndex + 1],
                savedRestaurants: [...state.savedRestaurants, action.payload]
            }
        
        //will just go to the next while keeping state in tack
        case DECLINE_RESTAURANT:
            return {
                ...state,
                displayedRestaurant: state.restaurants[restaurantIndex + 1]
            }
        case REMOVE_RESTAURANT:
            let chosenRestaurants = [...state.savedRestaurants]
            chosenRestaurants.splice(saveRestIndex, 1)
            return {
                ...state,
                savedRestaurants: chosenRestaurants
            }
        case GET_COORDINATES:
            return {
                ...state,
                coordinates: action.payload
            }
        default:
            return state
    }
}

export default reducer