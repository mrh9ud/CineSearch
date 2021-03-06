import swal from 'sweetalert'
import { FETCHED_RECOMMENDED_MOVIES, LOADING, FETCHED_SEARCHED_MOVIES, LOGIN_USER, 
        ADD_TO_WATCH_LIST, ADD_MOVIE_TO_FAVORITES, ADD_MOVIE_TO_WATCHED, LOGOUT_USER, 
        REMOVE_MOVIE_USER_WATCHLIST, REMOVE_MOVIE_USER_FAVORITE, REMOVE_MOVIE_USER_WATCHED,
        RENDER_RANDOM_TRAILER } from './actionType'

const movieRecURL = 'http://localhost:3000/movies'
const movieSearchURL ='http://localhost:3000/search'
const userCreationURL = 'http://localhost:3000/users'
const userLoginURL = 'http://localhost:3000/login'
const watchListAddURL = 'http://localhost:3000/watch_lists'
const favoritesAddURL = 'http://localhost:3000/favorites'
const watchMovieURL = 'http://localhost:3000/movie_watches'
const deleteMovieUserWatchedURL = 'http://localhost:3000/movie_watches/'
const deleteMovieUserFavoritesURL = 'http://localhost:3000/favorites/'
const deleteMovieUserWatchListURL = 'http://localhost:3000/watch_lists/'
const getRandomMovieTrailerURL = 'http://localhost:3000/trailer'
const deleteCurrentUserURL = 'http://localhost:3000/users/'
const editCurrentUserURL = 'http://localhost:3000/users/'

function fetchedRecommendedMovies(recommendedMoviesArray) { return { type: FETCHED_RECOMMENDED_MOVIES, payload: recommendedMoviesArray } }

function fetchedSearchedMovies(searchedMoviesArray) { return { type: FETCHED_SEARCHED_MOVIES, payload: searchedMoviesArray } }

function fetchedRandomMovieTrailer(movieTrailer) { return { type: RENDER_RANDOM_TRAILER, payload: movieTrailer } }

function loading() { return {type: LOADING} }

function loginUser(userObj) { return { type: LOGIN_USER, payload: userObj} }

function logOutUser() { return { type: LOGOUT_USER } }

function addedMovieToWatchList(movieId) { return { type: ADD_TO_WATCH_LIST, payload: movieId} }

function addedMovieToFavorites(movieId) { return { type: ADD_MOVIE_TO_FAVORITES, payload: movieId} }

function movieWatched(movieId) { return { type: ADD_MOVIE_TO_WATCHED, payload: movieId} }

function movieUserWatchListRemoved(movieWatchListId) { return { type: REMOVE_MOVIE_USER_WATCHLIST, payload: movieWatchListId } }

function movieUserFavoriteRemoved(movieFavoriteId) { return { type: REMOVE_MOVIE_USER_FAVORITE, payload: movieFavoriteId} }

function movieUserWatchedRemoved(movieWatchedId) { return { type: REMOVE_MOVIE_USER_WATCHED, payload: movieWatchedId } }

function editCurrentUser(currentUserObj, currentUserId) {
    return dispatch => {
        let body = {
            currentUserObj
        }
        let editUserConfigObj = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        }
        dispatch(loading())
        fetch(editCurrentUserURL + `${currentUserId}`, editUserConfigObj)
        .then( res => res.json() )
        .then( updatedUserObj => { swal('Changes Accepted'); dispatch(loginUser(updatedUserObj)) } )
    }
}

function deleteCurrentUser(currentUserId) {
    return dispatch => {
        let deleteUserConfigObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        dispatch(loading())
        fetch(deleteCurrentUserURL + `${currentUserId}`, deleteUserConfigObj)
        .then( () => { swal("Account Deletion Successful"); dispatch(logOutUser()) } )
    }
}

function fetchingRandomMovieTrailer() {
    return dispatch => {
        dispatch(loading())
        fetch(getRandomMovieTrailerURL)
        .then( res => res.json())
        .then( movieTrailerArray => dispatch(fetchedRandomMovieTrailer(movieTrailerArray)) )
    }
}

//remove from list of watched movies
function removeMovieUserWatched(watchedMovieJoinId) {
    return dispatch => {
        let movieUserWatchedConfigObj = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        dispatch(loading())
        fetch(deleteMovieUserWatchedURL + `${watchedMovieJoinId}`, movieUserWatchedConfigObj)
        .then( res => res.json())
        .then( movieWatchedId => { ; swal('Item Successfully Removed'); dispatch(movieUserWatchedRemoved(movieWatchedId)) })
    }
}

//delete a movie from a favorites list
function removeMovieUserFavorite(movieFavoriteId) {
    return dispatch => {
        let movieUserFavoriteConfigObj = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        dispatch(loading())
        fetch(deleteMovieUserFavoritesURL + `${movieFavoriteId}`, movieUserFavoriteConfigObj)
        .then( res => res.json())
        .then( movieFavoriteId => { ; swal('Item Successfully Removed'); dispatch(movieUserFavoriteRemoved(movieFavoriteId)) })
    }
}

//delete movie from a to-watch list
function removeMovieUserWatchList(movieWatchListId) {
    return dispatch => {
        let movieUserWatchListConfigObj = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        dispatch(loading())
        fetch(deleteMovieUserWatchListURL + `${movieWatchListId}`, movieUserWatchListConfigObj)
        .then( res => res.json())
        .then( movieWatchListId => { ; swal('Item Successfully Removed'); dispatch(movieUserWatchListRemoved(movieWatchListId)) })
    }
}

//user marking movie as already watched
function watchMovie(currentUserId, movieObj) {
    return dispatch => {
        let body = {
            user_id: currentUserId,
            movie: movieObj
        }
        let movieWatchConfigObj = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'  
            },
            body: JSON.stringify(body)
        }
        dispatch(loading())
        fetch(watchMovieURL, movieWatchConfigObj)
        .then(res => res.json())
        .then( data => { 
            if ('error' in data) {
                swal(`${data.error.message}`)
            } else {
                dispatch(movieWatched(data))
            } 
        })
    }
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
        .then(data => { 
            if ('error' in data) {
                swal(`${data.error.message}`)
            } else {
                dispatch(addedMovieToFavorites(data))
            } 
        })
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
        .then(data => { 
            if ('error' in data) {
                swal(`${data.error.message}`)
            } else {
            dispatch(addedMovieToWatchList(data)) 
            }
        })
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
                swal("Username already taken")
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
                swal('login error')
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
            if ('error' in searchedMoviesArray) {
                swal(`${searchedMoviesArray.error.message}`)
            } else if (searchedMoviesArray.length === 0) {
                swal('No Search Results')
            } else {
                dispatch(fetchedSearchedMovies(searchedMoviesArray))
            }
        })
    }
}

export { fetchingRecommendedMovies, fetchingSearchedMovies, createNewUser, verifyUser, 
        addMovieToWatchList, addMovieToFavorites, watchMovie, logOutUser, removeMovieUserWatchList, 
        removeMovieUserFavorite, removeMovieUserWatched, fetchingRandomMovieTrailer, deleteCurrentUser,
        editCurrentUser }