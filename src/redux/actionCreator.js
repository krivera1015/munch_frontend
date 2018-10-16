//exporting my type as a variable so that 
//it can error out if there was a mistake
//instead of returning default state
//which can have you looking for a bug forever
export const SET_RESTAURANTS = "SET_RESTAURANTS"
export const NEXT_RESTAURANT = "NEXT_RESTAURANT"

//fetching from my backend by using thunk to use 
//dispatch function on my setRestaurants action
//passing in my fetched data
export const fetchRestaurants = location => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/find_restaurants', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            //setting backend locations params to local state
            body: JSON.stringify({ location })
        })
        .then(resp => resp.json())
        .then(data => dispatch(setRestaurants(data)))
    }
}

//getting my data object of restaurants 
//to speak to reducer
const setRestaurants = data => {
    return {
        type: SET_RESTAURANTS,
        payload: data
    }
}

//we are getting the current restaurant so we
//can go to the next, this code is in my reducer
export const nextRestaurant = displayedRestaurant => {
    return{
        type: NEXT_RESTAURANT,
        payload: displayedRestaurant
    }
}

//an action is a function that returns an object with type (SHOULD MATCH REDUCER TYPE)/payload(RELEVANT DATA)
// actions defined here can be called in other components with mapDispatchToProps