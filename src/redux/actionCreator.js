export const newLocation = (location) => {
    return{
        type: "NEW_LOCATION",
        payload: location
    }
}

//an action is a function that returns an object with type (SHOULD MATCH REDUCER TYPE)/payload(RELEVANT DATA)
// actions defined here can be called in other components with mapDispatchToProps