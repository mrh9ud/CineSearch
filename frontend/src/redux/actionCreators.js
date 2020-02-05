import { FETCHED_RECOMMENDED_MOVIES, LOADING, FETCHED_SEARCHED_MOVIES, LOGIN_USER, ADD_TO_WATCH_LIST, ADD_MOVIE_TO_FAVORITES } from './actionType'

const movieRecURL = 'http://localhost:3000/movies'
const movieSearchURL ='http://localhost:3000/search'
const userCreationURL = 'http://localhost:3000/users'
const userLoginURL = 'http://localhost:3000/login'
const watchListAddURL = 'http://localhost:3000/watch_lists'
const favoritesAddURL = 'http://localhost:3000/favorites'

function fetchedRecommendedMovies(recommendedMoviesArray) {
    return { type: FETCHED_RECOMMENDED_MOVIES, payload: recommendedMoviesArray }
}

function fetchedSearchedMovies(searchedMoviesArray) {
    return { type: FETCHED_SEARCHED_MOVIES, payload: searchedMoviesArray }
}

function loading() {
    return {type: LOADING}
}

function loginUser(userObj) {
    return { type: LOGIN_USER, payload: userObj}
}

function addedMovieToWatchList(movieId) {
    return { type: ADD_TO_WATCH_LIST, payload: movieId}
}

function addedMovieToFavorites(movieId) {
    return { type: ADD_MOVIE_TO_FAVORITES, payload: movieId}
}

//user adding movie to favorites list
function addMovieToFavorites(currentUserId, movieObj) {
    return dispatch => {
        let body = {
            user_id: currentUserId,
            movie: movieObj
        }
        let favoritesConfigObj = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json' 
            },
            body: JSON.stringify(body)
        }
        
        dispatch(loading())
        fetch(favoritesAddURL, favoritesConfigObj)
        .then(res => res.json())
        .then(data => { dispatch(addedMovieToFavorites(data)); console.log('action creator', data) })
    }
}

//user adding movie to watch list
function addMovieToWatchList(currentUserId, movieObj) {
    return dispatch => {

        let body = {
            user_id: currentUserId,
            movie: movieObj,
        }
        let watchListConfigObj = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(body)
        }

        dispatch(loading())
        fetch(watchListAddURL, watchListConfigObj)
        .then(res => res.json())
        .then(data => { dispatch(addedMovieToWatchList(data)); console.log(data) })
    }
}

//Creates and login New User
function createNewUser(userObj) {
    return dispatch => {
        let userConfigObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(userObj)
        }
        dispatch(loading())
        fetch(userCreationURL, userConfigObj)
        .then(res => res.json())
        .then(data => {
            if (data) {
                dispatch(loginUser(data))
            } else {
                alert("Username already taken")
            }
        })
    }
}

//Verify and login Existing User
function verifyUser(userObj) {
    return dispatch => {
        let userConfigObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(userObj)
        }

        dispatch(loading())
        fetch(userLoginURL, userConfigObj)
        .then(res => res.json())
        .then(data => {
            if (data) {
                dispatch(loginUser(data))
            } else {
                alert("Invalid Login")
            }
        })
    }
}

//fetches recommended movies on page load
function fetchingRecommendedMovies() {
    return (dispatch) => {
        dispatch(loading())
        fetch(movieRecURL)
        .then(res => res.json())
        .then(recommendedMoviesArray => {
            dispatch(fetchedRecommendedMovies(recommendedMoviesArray))
        })
    }
}

//fetches movie upon user search
function fetchingSearchedMovies(searchTerm) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            searchTerm
        })
    }
    return (dispatch) => {
        dispatch(loading())
        fetch(movieSearchURL, configObj)
        .then(res => res.json())
        .then(searchedMoviesArray => {
            dispatch(fetchedSearchedMovies(searchedMoviesArray))
        })
    }
}

export { fetchingRecommendedMovies, fetchingSearchedMovies, createNewUser, verifyUser, addMovieToWatchList, addMovieToFavorites }