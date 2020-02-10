import React from 'react'
import { connect } from 'react-redux'
import { Card, Container, Header } from 'semantic-ui-react'
import PersistedMovieCard from '../components/PersistedMovieCard'
import uuid from 'react-uuid'

class FavoritesContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Header textAlign='center' inverted size="large">Your Favorite Movies</Header>
                    {this.props.currentUser 
                    ?
                    <Card.Group className='stackable' itemsPerRow={5}>
                        {this.props.currentUser.favorites.map( favoriteObj => {
                            if (favoriteObj.movie) {
                                return <PersistedMovieCard key={uuid()} movie={favoriteObj.movie} />
                        } else {
                                return <PersistedMovieCard key={uuid()} movie={favoriteObj} />
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