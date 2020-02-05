import React from 'react'
import { Header, Grid, Segment, Image, Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addMovieToWatchList, addMovieToFavorites } from '../redux/actionCreators'

class MovieShow extends React.Component {
    //logic for showing different text for favorite and watch list buttons not functional based on status

    findThisMovie = () => {
        return this.props.moviesArray.find( movie => movie.id === parseInt(window.location.href.split('/').pop()))
    }

    findMovieToAddWatchList = () => {
        if (this.props.currentUser) {
            let movieShowId = parseInt(window.location.href.split('/').pop())
            let movieObj = this.props.moviesArray.filter( movie => {
                return movie.id === movieShowId})
            let currentUserId = parseInt(this.props.currentUser.id)
            this.props.addMovieToWatchList(currentUserId, movieObj)
        } else {
            alert('You must be logged in')
        }
    }

    findMovieToFavorite = () => {
        if (this.props.currentUser) {
            let movieShowId = parseInt(window.location.href.split('/').pop())
            let movieObj = this.props.moviesArray.find( movie => movie.id === movieShowId)
            let currentUserId = parseInt(this.props.currentUser.id)
            this.props.addMovieToFavorites(currentUserId, movieObj)
        } else {
            alert('You must be logged in')
        }
    }

    handleMovieViewing = () => {
        let movieObj = this.findThisMovie()
        return this.props.currentUser.watch_lists.find( watchListObj => {
            return watchListObj.id === parseInt(window.location.href.split('/').pop())
        })
    }

    render() {
        //logic exists in the continegency on refresh of page that these deconstructed keys don't exist
        console.log(this.props)   
        // debugger 
        if (Object.keys(this.props.foundMovie).length === 0 || Object.keys(this.props.findPersistedMovie).length === 0) {
            if (Object.keys(this.props.findPersistedMovie).length === 0) {
                var { original_title, poster_path, overview, release_date, vote_average, backdrop_path } = this.props.foundMovie
            } else {
                var { original_title, poster_path, overview, release_date, vote_average, backdrop_path} = this.props.findPersistedMovie.movie
            }
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
                                            onClick={this.handleMovieViewing}
                                            >Watched?
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

const mapStateToProps = store => ({ currentUser: store.currentUser, moviesArray: store.moviesArray })

const mapDispatchToProps = dispatch => {
    return { addMovieToWatchList: (currentUserId, movieObj) => dispatch(addMovieToWatchList(currentUserId, movieObj)),
             addMovieToFavorites: (currentUserId, movieObj) => dispatch(addMovieToFavorites(currentUserId, movieObj)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow)