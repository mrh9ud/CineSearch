import { FETCHED_RECOMMENDED_MOVIES, LOADING, FETCHED_SEARCHED_MOVIES, LOGIN_USER } from './actionType'

const movieRecURL = 'http://localhost:3000/movies'
const movieSearchURL ='http://localhost:3000/search'
const userCreationURL = 'http://localhost:3000/users'
const userLoginURL = 'http://localhost:3000/login'

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

export { fetchingRecommendedMovies, fetchingSearchedMovies, createNewUser, verifyUser }