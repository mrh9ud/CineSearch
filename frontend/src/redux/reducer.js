import { combineReducers } from 'redux'
import { FETCHED_RECOMMENDED_MOVIES, FETCHED_SEARCHED_MOVIES } from './actionType'

const moviesReducer = (oldState=[], action) => {
    switch(action.type) {
        case FETCHED_RECOMMENDED_MOVIES:
            return action.payload
        case FETCHED_SEARCHED_MOVIES:
            return action.payload
        default:
            return oldState
    }
}

const rootReducer = combineReducers({
    moviesArray: moviesReducer
})

export default rootReducer