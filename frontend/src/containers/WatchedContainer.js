import React from 'react'
import { connect } from 'react-redux'
import { Card, Container, Header } from 'semantic-ui-react'
import PersistedMovieCard from '../components/PersistedMovieCard'

class WatchedContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Header textAlign='center' inverted size="large">Recently Viewed Movies</Header>
                    {this.props.currentUser && this.props.currentUser.movie_watches.length !== 0
                    ?
                    <Card.Group className='stackable' itemsPerRow={5}>
                        {this.props.currentUser.movie_watches.map( movie_watchesObj => {
                            if (movie_watchesObj.movie) {
                                return <PersistedMovieCard key={movie_watchesObj.movie.id} movie={movie_watchesObj.movie} />
                        } else {
                                return <PersistedMovieCard key={movie_watchesObj.id} movie={movie_watchesObj} />
                        }})}
                    </Card.Group>
                    :
                    <h3>You haven't watched any movies lately!</h3>}
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ moviesArray: store.moviesArray, currentUser: store.currentUser })

export default connect(mapStateToProps)(WatchedContainer)