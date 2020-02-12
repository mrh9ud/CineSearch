import React from 'react'
import { connect } from 'react-redux'
import { Card, Container, Header, Button, Message } from 'semantic-ui-react'
import PersistedMovieCard from '../components/PersistedMovieCard'
import uuid from 'react-uuid'
import { withRouter } from 'react-router-dom'

class FavoritesContainer extends React.Component {
    render() {
        return (
            <Container>
                {this.props.currentUser && this.props.currentUser.favorites.length !== 0
                ?
                <React.Fragment>
                    <Header textAlign='center' inverted size="large">Your Favorite Movies</Header>
                    <Card.Group className='stackable' itemsPerRow={5}>
                        {this.props.currentUser.favorites.map( favoriteObj => {
                            if (favoriteObj.movie) {
                                return <PersistedMovieCard key={uuid()} movie={favoriteObj.movie} />
                        } else {
                                return <PersistedMovieCard key={uuid()} movie={favoriteObj} />
                        }})}
                    </Card.Group>
                </React.Fragment>
                :
                <React.Fragment>
                    <Message>
                        <Message.Header as='h2'>None Found!</Message.Header>
                        <p>Click below to search for your favorite films.</p>
                    </Message>
                    <Button
                        onClick={ () => this.props.history.push('/movies')}
                        >Look for Favorites
                    </Button>
                </React.Fragment>
                }
            </Container>
        )
    }
}

const mapStateToProps = store => ({ moviesArray: store.moviesArray, currentUser: store.currentUser })

export default withRouter(connect(mapStateToProps)(FavoritesContainer))