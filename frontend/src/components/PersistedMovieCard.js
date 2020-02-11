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
                let movieWatchListObj = this.props.currentUser.watch_lists.find( movieWatchListObj => movieWatchListObj.movie.id === this.props.movie.id )
                let movieWatchListId = movieWatchListObj.id
                this.props.removeMovieUserWatchList(movieWatchListId)
            } else if (URLString === favorites) {
                let movieFavoriteObj = this.props.currentUser.favorites.find( favoritesObj => favoritesObj.movie.id === this.props.movie.id )
                let movieFavoriteId = movieFavoriteObj.id
                this.props.removeMovieUserFavorite(movieFavoriteId) 
            } else if (URLString === watched) {
                let movieWatchesObj = this.props.currentUser.movie_watches.find( movieWatchesObj => movieWatchesObj.movie.id === this.props.movie.id )
                let movieWatchesId = movieWatchesObj.id
                this.props.removeMovieUserWatched(movieWatchesId) 
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