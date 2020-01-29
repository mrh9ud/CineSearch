import { FETCHED_RECOMMENDED_MOVIES, LOADING_RECOMMENDED_MOVIES } from './actionType'

const URL = 'http://localhost:3000/movies'

function fetchedRecommendedMovies(recommendedMoviesArray) {
    return {type: FETCHED_RECOMMENDED_MOVIES, payload: recommendedMoviesArray}
}

function loadingRecommendedMovies() {
    return {type: LOADING_RECOMMENDED_MOVIES}
}

function fetchingRecommendedMovies() {
    return (dispatch) => {
        dispatch(loadingRecommendedMovies())
        fetch(URL)
        .then(res => res.json())
        .then(recommendedMoviesArray => {
            dispatch(fetchedRecommendedMovies(recommendedMoviesArray))
        })
    }
}

export { fetchingRecommendedMovies }