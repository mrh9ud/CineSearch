import { combineReducers } from 'redux'
import { FETCHED_RECOMMENDED_MOVIES, FETCHED_SEARCHED_MOVIES, LOGIN_USER, ADD_TO_WATCH_LIST, ADD_MOVIE_TO_FAVORITES } from './actionType'

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

const currentUserReducer = (oldState=null, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return action.payload
        case ADD_TO_WATCH_LIST:
            const newWatchListItem = {
                ...oldState, watch_lists: [
                    ...oldState.watch_lists, action.payload.movie
                ]
            }
            return newWatchListItem
        case ADD_MOVIE_TO_FAVORITES:
            console.log(oldState, action.payload)
            const newFavorite = {
                ...oldState, favorites: [
                    ...oldState.favorites, action.payload.movie
                ]
            }
            console.log('new favorite return: ', newFavorite)
            return newFavorite
        default:
            return oldState
    }
}

const rootReducer = combineReducers({
    moviesArray: moviesReducer,
    currentUser: currentUserReducer,
})

export default rootReducer