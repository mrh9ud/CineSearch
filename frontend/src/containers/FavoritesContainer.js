import React from 'react'
import { connect } from 'react-redux'
import { Card, Container } from 'semantic-ui-react'
import WatchListFavoriteCard from '../components/WatchListFavoriteCard'

class FavoritesContainer extends React.Component {
    //if else logic takes into account differences in nested keys for movies that were already added and those that were just added 
    //based on a re-render or not
    render() {
        return (
            <React.Fragment>
                <Container>
                    {this.props.currentUser 
                    ?
                    <Card.Group className='stackable' itemsPerRow={4}>
                        {this.props.currentUser.favorites.map( favoriteObj => {
                            if (favoriteObj.movie) {
                                return <WatchListFavoriteCard key={favoriteObj.movie.id} movie={favoriteObj.movie} />
                        } else {
                                return <WatchListFavoriteCard key={favoriteObj.id} movie={favoriteObj} />
                        }})}
                    </Card.Group>
                    :
                    <h3>Your Favorites is Empty</h3>}
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ moviesArray: store.moviesArray, currentUser: store.currentUser })

export default connect(mapStateToProps)(FavoritesContainer)