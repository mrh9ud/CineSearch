import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

class MovieShow extends React.Component {
    
    findMovieToShow = () => {
        this.props.moviesArray.filter( movie => {
            // console.log(movie)
            return movie.id === this.props.match.params.id
        })
    }
    movieToShow = this.findMovieToShow()
    
    render() {
        console.log(this.findMovieToShow())
        // console.log(this.props.match.params.id, this.props.moviesArray)
        // console.log(this.movieToShow)
        return (
            <React.Fragment>
                <Container>
                    <Card>
                        {null}
                    </Card>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({
    moviesArray: store.moviesArray
})

export default connect(mapStateToProps)(MovieShow)