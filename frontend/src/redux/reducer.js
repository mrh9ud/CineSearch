import { combineReducers } from 'redux'
import { FETCHED_RECOMMENDED_MOVIES, FETCHED_SEARCHED_MOVIES, LOGIN_USER, 
        ADD_TO_WATCH_LIST, ADD_MOVIE_TO_FAVORITES, LOGOUT_USER, ADD_MOVIE_TO_WATCHED, 
        REMOVE_MOVIE_USER_WATCHED, REMOVE_MOVIE_USER_WATCHLIST, REMOVE_MOVIE_USER_FAVORITE,
        RENDER_RANDOM_TRAILER, SHOW_MOVIE } from './actionType'

const movieShowReducer = (oldState=[], action) => {
    debugger
    switch(action.type) {
        case SHOW_MOVIE:
            return action.payload
        default:
            return oldState
    }
}

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

const movieTrailerReducer = (oldState=[], action) => {
    switch(action.type) {
        case RENDER_RANDOM_TRAILER:
            return action.payload
        default:
            return oldState
    }
}

const currentUserReducer = (oldState=null, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return action.payload

        case LOGOUT_USER:
            return null

        case REMOVE_MOVIE_USER_FAVORITE:
            const remainingFavoritedMovies = {
                ...oldState, favorites: [
                    ...oldState.favorites.filter( favoriteMovieObj => favoriteMovieObj.id !== action.payload.id )
                ]
            }
            return remainingFavoritedMovies

        case REMOVE_MOVIE_USER_WATCHLIST:
            const remainingWatchListMovies = {
                ...oldState, watch_lists: [
                    ...oldState.watch_lists.filter( watchListMovieObj => watchListMovieObj.id.toString() !== action.payload.id )
                ]
            }
            return remainingWatchListMovies

        case REMOVE_MOVIE_USER_WATCHED:
            const remainingMoviesWatched = {
                    ...oldState, movie_watches: [ 
                        ...oldState.movie_watches.filter( watchedMovieObj => watchedMovieObj.id.toString() !== action.payload.id )
                    ]
            }
            return remainingMoviesWatched

        case ADD_TO_WATCH_LIST:
            const newWatchListItem = {
                ...oldState, watch_lists: [
                    ...oldState.watch_lists, action.payload
                ]
            }
            return newWatchListItem

        case ADD_MOVIE_TO_FAVORITES:
            const newFavorite = {
                ...oldState, favorites: [
                    ...oldState.favorites, action.payload
                ]
            }
            return newFavorite

        case ADD_MOVIE_TO_WATCHED:
            const newWatchedMovie = {
                ...oldState, movie_watches: [
                    ...oldState.movie_watches, action.payload
                ]
            }
            return newWatchedMovie

        default:
            return oldState
    }
}

const rootReducer = combineReducers({
    moviesArray: moviesReducer,
    currentUser: currentUserReducer,
    trailerArray: movieTrailerReducer,
    movieShowArray: movieShowReducer
})

export default rootReducer