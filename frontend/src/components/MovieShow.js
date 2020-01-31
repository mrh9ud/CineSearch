import React from 'react'
import { Header, Grid, Segment, Image, Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class MovieShow extends React.Component {

    findMovieToShow = () => {
        return this.props.moviesArray.filter( movie => {
            return movie.id.toString() === this.props.match.params.id
        })
    }

    render() {
        let movie = this.findMovieToShow()

        return (
            <React.Fragment>
                <Container>
                    <Header as="h1" textAlign="center" color='yellow' >{movie[0].original_title}</Header>
                    <Grid columns={2} divided>
                        <Grid.Row stretched>
                            <Grid.Column>

                                <Segment>
                                    <Header as="h3">Movie Cover</Header>
                                    <Button>
                                        Watched?
                                    </Button>
                                    <Image wrapped size='medium' src={movie[0].poster_path} alt={movie[0].original_title} />
                                    <Button floated="left">
                                        Favorite
                                    </Button>
                                    <Button floated="right">
                                        Add to your Watch List
                                    </Button>
                                </Segment>

                            </Grid.Column>
                            <Grid.Column>

                                <Segment textAlign='left'>
                                    <Header as="h3" floated='left'>Movie Information:</Header>
                                    <br /><br />
                                    <p><b>Description:</b> {movie[0].overview}</p>
                                    <p><b>Original Release Date:</b> {movie[0].release_date}</p>
                                    <p><b>Average Viewer Score:</b> {movie[0].vote_average}</p>
                                </Segment>

                                <Segment>
                                    <Header as="h3">Movie Images</Header>
                                    <Image wrapped size="medium" src={movie[0].backdrop_path} alt={movie[0].original_title} />
                                </Segment>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}
// "release_date", "overview", "vote_average"
const mapStateToProps = store => ({ moviesArray: store.moviesArray })

export default connect(mapStateToProps)(MovieShow)