import React from 'react'
import MovieCard from '../components/MovieCard'
import { connect } from 'react-redux'
import { Card, Container } from 'semantic-ui-react'

class WatchListContainer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Card.Group className='stackable' itemsPerRow={4}>
                        {this.props.moviesArray.map( movie => <MovieCard key={movie.id} movie={movie} />)}
                    </Card.Group>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({
    moviesArray: store.moviesArray
})

export default connect(mapStateToProps)(WatchListContainer)