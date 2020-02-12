import React from 'react'
import { connect } from 'react-redux'
import { Card, Container, Header, Button, Message } from 'semantic-ui-react'
import PersistedMovieCard from '../components/PersistedMovieCard'
import uuid from 'react-uuid'
import { withRouter } from 'react-router-dom'

class WatchedContainer extends React.Component {
    render() {
        return (
            <Container>
                {this.props.currentUser && this.props.currentUser.movie_watches.length !== 0
                ?
                <React.Fragment>
                    <Header textAlign='center' inverted size="large">Recently Viewed Movies</Header>
                    <Card.Group className='stackable' itemsPerRow={5}>
                        {this.props.currentUser.movie_watches.map( movie_watchesObj => {
                            if (movie_watchesObj.movie) {
                                return <PersistedMovieCard key={uuid()} movie={movie_watchesObj.movie} />
                        } else {
                                return <PersistedMovieCard key={uuid()} movie={movie_watchesObj} />
                        }})}
                    </Card.Group>
                </React.Fragment>
                :
                <React.Fragment>
                    <Message>
                        <Message.Header as='h2'>None Found!</Message.Header>
                        <p>Click below to search for films you've already seen.</p>
                    </Message>
                    <Button
                        onClick={ () => this.props.history.push('/movies')}
                        >Browse films
                    </Button>
                </React.Fragment>
                }
            </Container>
        )
    }
}

const mapStateToProps = store => ({ moviesArray: store.moviesArray, currentUser: store.currentUser })

export default withRouter(connect(mapStateToProps)(WatchedContainer))