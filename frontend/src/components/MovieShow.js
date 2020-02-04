import React from 'react'
import { Header, Grid, Segment, Image, Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addMovieToWatchList } from '../redux/actionCreators'

class MovieShow extends React.Component {

    findMovieToAddWatchList = () => {
        if (this.props.currentUser) {
            let movieShowId = parseInt(window.location.href.split('/').pop())
            let movieObj = this.props.moviesArray.find( movie => movie.id === movieShowId)
            let currentUserId = parseInt(this.props.currentUser.id)
            this.props.addMovieToWatchList(movieShowId, currentUserId, movieObj)
        } else {
            alert('You must be logged in')
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Header as="h1" textAlign="center" color='yellow' >{this.props.foundMovie.original_title}</Header>
                    <Grid columns={2} divided>
                        <Grid.Row stretched>
                            <Grid.Column>

                                <Segment>
                                    <Header as="h3">Movie Cover</Header>
                                    <Button>
                                        Watched?
                                    </Button>
                                    <Image wrapped size='medium' src={this.props.foundMovie.poster_path} alt={this.props.foundMovie.original_title} />
                                    <Button floated="left">
                                        Favorite
                                    </Button>
                                    <Button 
                                        floated="right"
                                        onClick={this.findMovieToAddWatchList}
                                        >Add to your Watch List
                                    </Button>
                                </Segment>

                            </Grid.Column>
                            <Grid.Column>

                                <Segment textAlign='left'>
                                    <Header as="h3" floated='left'>Movie Information:</Header>
                                    <br /><br />
                                    <p><b>Description:</b> {this.props.foundMovie.overview}</p>
                                    <p><b>Original Release Date:</b> {this.props.foundMovie.release_date}</p>
                                    <p><b>Average Viewer Score:</b> {this.props.foundMovie.vote_average}</p>
                                </Segment>

                                <Segment>
                                    <Header as="h3">Movie Images</Header>
                                    <Image wrapped size="medium" src={this.props.foundMovie.backdrop_path} alt={this.props.foundMovie.original_title} />
                                </Segment>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser, moviesArray: store.moviesArray })

const mapDispatchToProps = dispatch => {
    return { addMovieToWatchList: (movieShowId, currentUserId, movieObj) => dispatch(addMovieToWatchList(movieShowId, currentUserId, movieObj)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow)