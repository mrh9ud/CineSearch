import React from 'react'
import { Card, Image, Modal, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PersistedMovieModal from './PersistedMovieModal'
import { removeMovieUserWatchList, removeMovieUserFavorite, removeMovieUserWatched } from '../redux/actionCreators'

class PersistedMovieCard extends React.Component {
    
    removeMovieUserAssoc = () => {
        let URLString = window.location.href.split('/').pop()
        if (this.props.currentUser) {
            let watchList = 'watchlist'
            let favorites = 'favorites'
            let watched = 'watched'

            if (URLString === watchList) {
                let movieWatchListObjId = this.props.currentUser.watch_lists.map( movieWatchListObj => {
                    if (movieWatchListObj.movie.id === this.props.movie.id) {
                        return movieWatchListObj.id
                    }
                })
                this.props.removeMovieUserWatchList(movieWatchListObjId)
            } else if (URLString === favorites) {
                let movieFavoriteObjId = this.props.currentUser.favorites.map( favoritesObj => {
                    if (favoritesObj.movie.id === this.props.movie.id) {
                        return favoritesObj.id
                    }
                })
                this.props.removeMovieUserFavorite(movieFavoriteObjId) 
            } else if (URLString === watched) {
                let movieWatchesObjId = this.props.currentUser.movie_watches.map( movieWatchesObj => {
                    if (movieWatchesObj.movie.id === this.props.movie.id) {
                        return movieWatchesObj.id
                    }
                })
                this.props.removeMovieUserWatched(movieWatchesObjId) 
            }
        } else {
            alert('You Must be Logged in.')
        }
    }

    render() {
        let { poster_path } = this.props.movie
        
        return (
                <Modal trigger={<Card> 
                                    <Image 
                                        src={poster_path} 
                                        wrapped ui={false} />
                                    <Button
                                        onClick={ () => this.removeMovieUserAssoc() }
                                        >Remove
                                    </Button>  
                                </Card>}>
                    <Modal.Content image >
                        <PersistedMovieModal movie={this.props.movie}/>
                    </Modal.Content>
                </Modal>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

const mapDispatchToProps = dispatch => { 
    return { removeMovieUserWatchList: (watchListId) => dispatch(removeMovieUserWatchList(watchListId)),
              removeMovieUserFavorite: (favoriteId) => dispatch(removeMovieUserFavorite(favoriteId)),
               removeMovieUserWatched: (watchedId) => dispatch(removeMovieUserWatched(watchedId)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersistedMovieCard)