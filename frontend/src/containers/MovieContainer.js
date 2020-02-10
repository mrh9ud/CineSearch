import React from 'react'
import MovieCard from '../components/MovieCard'
import { connect } from 'react-redux'
import { Card, Container, Header } from 'semantic-ui-react'
import uuid from 'react-uuid'

class MovieContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Header textAlign='center' inverted size="large">Top 20 Recommended Movies for Today</Header>
                    <Card.Group className='stackable' itemsPerRow={5}>
                        {this.props.moviesArray.map( movie => <MovieCard key={uuid()} movie={movie} />)}
                    </Card.Group>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store) => ({
    moviesArray: store.moviesArray
})

export default connect(mapStateToProps)(MovieContainer)