import React from 'react'
import { Header, Grid, Segment, Image, Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addMovieToWatchList, addMovieToFavorites, watchMovie } from '../redux/actionCreators'
import swal from 'sweetalert'
import { withRouter } from 'react-router-dom'

class MovieShow extends React.Component {

    findMovieToAddWatchList = () => {
        if (this.props.currentUser) {
            let URLId = parseInt(window.location.href.split('/').pop())
            let movieObj = this.props.moviesArray.find( movie => {
                return movie.id === URLId})
            let currentUserId = parseInt(this.props.currentUser.id)
            this.props.addMovieToWatchList(currentUserId, movieObj)
        } else {
            swal('You must be logged in')
        }
    }

    findMovieToFavorite = () => {
        if (this.props.currentUser) {
            let URLId = parseInt(window.location.href.split('/').pop())
            let movieObj = this.props.moviesArray.find( movie => movie.id === URLId)
            let currentUserId = parseInt(this.props.currentUser.id)
            this.props.addMovieToFavorites(currentUserId, movieObj)
        } else {
            swal('You must be logged in')
        }
    }
    
    watchMovie = () => {
        if (this.props.currentUser) {
            let currentUserId = this.props.currentUser.id
            let currentMovie = this.props.foundMovie
            this.props.watchMovie(currentUserId, currentMovie)
        } else {
            swal("You must be logged in")
        }
    }

    hasUserFavoritedMovie = () => {
            if (this.props.currentUser.favorites.find( favoriteObj => favoriteObj.movie.id === this.props.foundMovie.id) !== undefined) {
                return true
            } else {
                return false
            }
    }

    hasUserWatchedMovie = () => {
            if (this.props.currentUser.movie_watches.find( movieWatchesObj => movieWatchesObj.movie.id === this.props.foundMovie.id) !== undefined) {
                return true
            } else {
                return false
            }
    }

    isMovieOnUserWatchList = () => {
        if (this.props.currentUser.watch_lists.find( watchListObj => watchListObj.movie.id === this.props.foundMovie.id) !== undefined) {
            return true
        } else {
            return false
        }
    }

    render() {
        if (this.props.foundMovie === undefined) {
            return <h1>Loading</h1>
        } else {
            let { original_title, release_date, overview, vote_average, poster_path, backdrop_path } = this.props.foundMovie
            return (
                <React.Fragment>
                    <Container>
                        <Header as="h1" textAlign="center" color='yellow' >{original_title}</Header>
                        <Grid columns={2} divided>
                            <Grid.Row stretched>
                                <Grid.Column>

                                    <Segment id='MovieShowDiv'>
                                        {!this.props.currentUser
                                        ?
                                        <React.Fragment>
                                            <Header as="h3">Movie Cover</Header>
                                            <Image wrapped size='medium' src={poster_path} alt={original_title} />
                                                <Button
                                                    fluid={true}
                                                    onClick={ () => this.props.history.push('/login')}
                                                    >Login to Start Tracking this Movie!
                                                </Button>
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <Header as="h3">Movie Cover</Header>
                                            <Image wrapped size='medium' src={poster_path} alt={original_title} />
                                            {this.hasUserWatchedMovie() === false
                                            ?
                                            <Button
                                                floated="left"
                                                primary
                                                onClick={this.watchMovie}
                                                >Click to Mark as Watched
                                            </Button>
                                            :
                                            <Button
                                                onClick={ () => swal("You've recently seen this movie!") }
                                                secondary
                                                floated="left"
                                                >Recently Watched    
                                            </Button>
                                            }
                                            {this.hasUserFavoritedMovie() === true
                                            ?
                                            <Button
                                                onClick={ () => swal('This movie is already on your favorites list!') }
                                                floated="left"
                                                secondary
                                                >On Your favorites
                                            </Button>
                                            :
                                            <Button 
                                                primary
                                                floated="left"
                                                onClick={this.findMovieToFavorite}
                                                >Favorite
                                            </Button>
                                            }
                                            {this.isMovieOnUserWatchList() === false
                                            ?
                                            <Button 
                                                primary
                                                floated="left"
                                                onClick={this.findMovieToAddWatchList}
                                                >Add to your Watch List
                                            </Button>
                                            :
                                            <Button
                                                onClick={ () => swal('This movie is already on your to-watch list!')}
                                                secondary
                                                floated="left"
                                                >On Your Watch List!
                                            </Button>
                                        
                                            }
                                        </React.Fragment>
                                        }
                                    </Segment>

                                </Grid.Column>
                                <Grid.Column>

                                    <Segment textAlign='left'>
                                        <Header as="h3" floated='left'>Movie Information:</Header>
                                        <br /><br />
                                        <p><b>Description:</b> {overview}</p>
                                        <p><b>Original Release Date:</b> {release_date}</p>
                                        <p><b>Average Viewer Score:</b> {vote_average}</p>
                                    </Segment>

                                    <Segment>
                                        <Header as="h3">Movie Images</Header>
                                        <Image wrapped size="medium" src={backdrop_path} alt={original_title} />
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = store => {
    return ({ currentUser: store.currentUser, moviesArray: store.moviesArray })
}

const mapDispatchToProps = dispatch => {
    return { addMovieToWatchList: (currentUserId, movieObj) => dispatch(addMovieToWatchList(currentUserId, movieObj)),
             addMovieToFavorites: (currentUserId, movieObj) => dispatch(addMovieToFavorites(currentUserId, movieObj)),
                      watchMovie: (currentUserId, movieObj) => dispatch(watchMovie(currentUserId, movieObj)) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieShow))