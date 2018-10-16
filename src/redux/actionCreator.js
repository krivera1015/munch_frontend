export const SET_RESTAURANTS = "SET_RESTAURANTS"


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
export const setRestaurants = data => {
    return {
        type: SET_RESTAURANTS,
        payload: data
    }
}

//an action is a function that returns an object with type (SHOULD MATCH REDUCER TYPE)/payload(RELEVANT DATA)
// actions defined here can be called in other components with mapDispatchToProps