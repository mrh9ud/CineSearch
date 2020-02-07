import React from 'react'
import { connect } from 'react-redux'
import { Card, Container, Header } from 'semantic-ui-react'
import PersistedMovieCard from '../components/PersistedMovieCard'

class WatchListContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Header textAlign='center' inverted size="large">Movies You've Selected to Watch</Header>
                    {this.props.currentUser && this.props.currentUser.watch_lists.length !== 0
                    ?
                    <Card.Group className='stackable' itemsPerRow={5}>
                        {this.props.currentUser.watch_lists.map( watch_listObj => {
                            if (watch_listObj.movie) {
                                return <PersistedMovieCard key={watch_listObj.movie.id} movie={watch_listObj.movie} />
                        } else {
                                return <PersistedMovieCard key={watch_listObj.id} movie={watch_listObj} />
                        }})}
                    </Card.Group>
                    :
                    <h3>Your Watch List is Empty</h3>}
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ moviesArray: store.moviesArray, currentUser: store.currentUser })

export default connect(mapStateToProps)(WatchListContainer)