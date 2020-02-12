import React from 'react'
import { connect } from 'react-redux'
import { Card, Container, Header, Button, Message } from 'semantic-ui-react'
import PersistedMovieCard from '../components/PersistedMovieCard'
import uuid from 'react-uuid'
import { withRouter } from 'react-router-dom'

class WatchListContainer extends React.Component {
    render() {
        return (
            <Container>
                {this.props.currentUser && this.props.currentUser.watch_lists.length !== 0
                ?
                <React.Fragment>
                    <Header textAlign='center' inverted size="large">Movies You've Selected to Watch</Header>
                    <Card.Group className='stackable' itemsPerRow={5}>
                        {this.props.currentUser.watch_lists.map( watch_listObj => {
                            if (watch_listObj.movie) {
                                return <PersistedMovieCard key={uuid()} movie={watch_listObj.movie} />
                        } else {
                                return <PersistedMovieCard key={uuid()} movie={watch_listObj} />
                        }})}
                    </Card.Group>
                </React.Fragment>
                :
                <React.Fragment>
                    <Message>
                        <Message.Header as='h2'>None Found!</Message.Header>
                        <p>Click below to find films to watch.</p>
                    </Message>
                    <Button
                        onClick={ () => this.props.history.push('/movies')}
                        >Find Movies to Watch
                    </Button>
                </React.Fragment>
                }
            </Container>
        )
    }
}

const mapStateToProps = store => ({ moviesArray: store.moviesArray, currentUser: store.currentUser })

export default withRouter(connect(mapStateToProps)(WatchListContainer))