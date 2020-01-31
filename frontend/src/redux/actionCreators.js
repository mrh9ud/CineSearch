import { FETCHED_RECOMMENDED_MOVIES, LOADING, FETCHED_SEARCHED_MOVIES } from './actionType'

const movieRecURL = 'http://localhost:3000/movies'
const movieSearchURL ='http://localhost:3000/search'

function fetchedRecommendedMovies(recommendedMoviesArray) {
    return { type: FETCHED_RECOMMENDED_MOVIES, payload: recommendedMoviesArray }
}

function fetchedSearchedMovies(searchedMoviesArray) {
    return { type: FETCHED_SEARCHED_MOVIES, payload: searchedMoviesArray }
}

function loading() {
    return {type: LOADING}
}

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

export { fetchingRecommendedMovies, fetchingSearchedMovies }