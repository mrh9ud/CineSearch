import React from 'react'
import MovieCard from '../components/MovieCard'
import { connect } from 'react-redux'

class MovieContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.recommendedMovies.map( movie => <MovieCard key={movie.id} movie={movie} />)}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store) => ({
    recommendedMovies: store.recommendedMovies
})

export default connect(mapStateToProps)(MovieContainer)