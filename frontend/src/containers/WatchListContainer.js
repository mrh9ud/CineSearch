import React from 'react'
import { connect } from 'react-redux'
import { Card, Container } from 'semantic-ui-react'
import WatchListFavoriteCard from '../components/WatchListFavoriteCard'

class WatchListContainer extends React.Component {
    //if else logic takes into account differences in nested keys for movies that were already added and those that were just added 
    //based on a re-render or not
    render() {
        return (
            <React.Fragment>
                <Container>
                    {this.props.currentUser && this.props.currentUser.watch_lists.length !== 0
                    ?
                    <Card.Group className='stackable' itemsPerRow={4}>
                        {this.props.currentUser.watch_lists.map( watch_listObj => {
                            if (watch_listObj.movie) {
                                return <WatchListFavoriteCard key={watch_listObj.movie.id} movie={watch_listObj.movie} />
                        } else {
                                return <WatchListFavoriteCard key={watch_listObj.id} movie={watch_listObj} />
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