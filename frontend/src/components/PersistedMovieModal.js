import React from 'react'
import { Card, Image, Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeMovieUserWatchList, removeMovieUserFavorite, removeMovieUserWatched } from '../redux/actionCreators'

class PersistedMovieModal extends React.Component {
    
    removeMovieUserAssoc = () => {
        let URLString = window.location.href.split('/').pop()
        if (this.props.currentUser) {
            let currentUserId = this.props.currentUser.id
            let watchList = 'watchlist'
            let favorites = 'favorites'
            let watched = 'watched'

            if (URLString === watchList) {
                let movieObj = this.props.currentUser.watch_lists.find( watchListObj => watchListObj.movie.id === this.props.movie.id)
                this.props.removeMovieUserWatchList(movieObj.id, currentUserId) 
            } else if (URLString === favorites) {
                let movieObj = this.props.currentUser.favorites.find( favoritesObj => favoritesObj.movie.id === this.props.movie.id)
                this.props.removeMovieUserFavorite(movieObj.id, currentUserId) 
            } else if (URLString === watched) {
                let movieObj = this.props.currentUser.movie_watches.find( movieWatchesObj => movieWatchesObj.movie.id === this.props.movie.id)
                this.props.removeMovieUserWatched(movieObj.id, currentUserId) 
            }
        } else {
            alert('You Must be Logged in.')
        }
    }

    render() {
        let { api_id, poster_path, original_title, release_date, overview, vote_average } = this.props.movie

        return (
            <React.Fragment>
                <Modal.Header>{original_title}</Modal.Header>
                <React.Fragment>
                    <Card.Content>
                        <Image src={poster_path} size='medium' />
                        <Card.Meta>
                            <span className='date'>Release Date: {release_date}</span>
                        </Card.Meta>
                        <Card.Description>
                            {overview}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        Rating: {vote_average}
                    </Card.Content>
                </React.Fragment>
                <Link to={`/movies/${api_id}`} >
                        <Button>
                            More Info
                        </Button>
                        <Button
                            onClick={this.removeMovieUserAssoc()}
                            >Remove
                        </Button> 
                </Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

const mapDispatchToProps = dispatch => { 
    return { removeMovieUserWatchList: (movieId, currentUserId) => dispatch(removeMovieUserWatchList(movieId, currentUserId)),
              removeMovieUserFavorite: (movieId, currentUserId) => dispatch(removeMovieUserFavorite(movieId, currentUserId)),
               removeMovieUserWatched: (movieId, currentUserId) => dispatch(removeMovieUserWatched(movieId, currentUserId)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersistedMovieModal)