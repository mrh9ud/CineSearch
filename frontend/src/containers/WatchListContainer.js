import React from 'react'
import { connect } from 'react-redux'
import { Card, Container } from 'semantic-ui-react'
import WatchListCard from '../components/WatchListCard'

class WatchListContainer extends React.Component {

    render() {
        // debugger
        return (
            <React.Fragment>
                <Container>
                    {this.props.currentUser 
                    ?
                    <Card.Group className='stackable' itemsPerRow={4}>
                        {this.props.currentUser.watch_lists.map( watch_listObj => <WatchListCard key={watch_listObj.movie.id} movie={watch_listObj.movie} />)}
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