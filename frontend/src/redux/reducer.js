import { combineReducers } from 'redux'
import { FETCHED_RECOMMENDED_MOVIES } from './actionType'

const moviesReducer = (oldState=[], action) => {
    // console.log(action)
    switch(action.type) {
        case FETCHED_RECOMMENDED_MOVIES:
            return action.payload
        default:
            return oldState
    }
}

const rootReducer = combineReducers({
    recommendedMovies: moviesReducer
})

export default rootReducer