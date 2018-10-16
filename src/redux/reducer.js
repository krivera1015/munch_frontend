import {SET_RESTAURANTS} from './actionCreator'

//initializing our state in store
const initState = {
    restaurants: []
}

//setting my current state in store
const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_RESTAURANTS:
            return { ...state, restaurants: action.payload.businesses}
        default:
            return state
    }
}

export default reducer