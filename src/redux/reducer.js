//initializing our state in store
const initState = {
    location: ""
    // restaurant: {}
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "NEW_LOCATION":
            return {...state, location: action.payload};
        default:
            return state
    }
}

export default reducer