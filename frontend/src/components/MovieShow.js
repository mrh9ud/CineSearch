import React from 'react'
import { Header, Grid, Segment, Image, Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addMovieToWatchList, addMovieToFavorites, watchMovie } from '../redux/actionCreators'

class MovieShow extends React.Component {
    //logic for showing different text for favorite and watch list buttons not functional based on status

    componentDidMount = () => {

    }

    findMovieToAddWatchList = () => {
        if (this.props.currentUser) {
            let URLId = parseInt(window.location.href.split('/').pop())
            let movieObj = this.props.moviesArray.find( movie => {
                return movie.id === URLId})
            let currentUserId = parseInt(this.props.currentUser.id)
            this.props.addMovieToWatchList(currentUserId, movieObj)
        } else {
            alert('You must be logged in')
        }
    }

    findMovieToFavorite = () => {
        if (this.props.currentUser) {
            let URLId = parseInt(window.location.href.split('/').pop())
            let movieObj = this.props.moviesArray.find( movie => movie.id === URLId)
            let currentUserId = parseInt(this.props.currentUser.id)
            this.props.addMovieToFavorites(currentUserId, movieObj)
        } else {
            alert('You must be logged in')
        }
    }
    
    //marks a movie as watched ... toggles boolean
    watchMovie = () => {
        if (this.props.currentUser) {
            let currentUserId = this.props.currentUser.id
            let currentMovie = this.props.foundMovie
            this.props.watchMovie(currentUserId, currentMovie)
        } else {
            alert("You must be logged in")
        }
    }
    //returns a boolean to determine which favoriting button to show
    hasUserFavoritedMovie = () => {

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

                                    <Segment>
                                        <Header as="h3">Movie Cover</Header>
                                        <Button
                                            onClick={this.watchMovie}
                                            >Already Watched?
                                        </Button>
                                        <Image wrapped size='medium' src={poster_path} alt={original_title} />
                                        {/* {!this.props.currentUser.favorites.includes(this.findThisMovie()) */}
                                        {/* ? */}
                                        <Button 
                                            floated="left"
                                            onClick={this.findMovieToFavorite}
                                            >Favorite
                                        </Button>
                                        {/* :
                                        <Button
                                            floated="left"
                                            >On Your favorites
                                        </Button>
                                        } */}
                                        {/* {!this.props.currentUser.watch_lists.includes(this.findThisMovie())
                                        ? */}
                                        <Button 
                                            floated="right"
                                            onClick={this.findMovieToAddWatchList}
                                            >Add to your Watch List
                                        </Button>
                                        {/* :
                                        <Button
                                            floated="right"
                                            >On Your Watch List!
                                        </Button>
                                        } */}
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow)