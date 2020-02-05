import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class WatchListFavoriteCard extends React.Component {
    state = {
        detailsActive: false
    }

    handleDetailsClick = () => {
        this.setState({ detailsActive: !this.state.detailsActive })
    }

    // findMovieDetails = () => {
    //     returnthis.props.currentUser.watch_lists.find( watchListObj => {
    //         return watchListObj.movie.id === parseInt(window.location.href.split('/').pop())
    //     })
    // }

    render() {
        // console.log(this.props)
        let { id, poster_path, original_title, release_date, overview, vote_average } = this.props.movie
        
        return (
            <React.Fragment>
                {this.props.currentUser
                ?
                <Card>
                    <Image src={poster_path} wrapped ui={false} />
                    {this.state.detailsActive 
                    ?
                    <React.Fragment>
                        <Card.Content>
                        <Card.Header>{original_title}</Card.Header>
                            <Card.Meta>
                                <span className='date'>Release Date: {release_date}</span>
                            </Card.Meta>
                            <Card.Description>
                                {overview}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            Rating: {vote_average}
                        </Card.Content>
                    </React.Fragment>
                    : 
                    null}
                    {this.state.detailsActive 
                    ? 
                    <Link to={`/movies/${id}`} >
                        <Button fluid={true}>
                            More Info
                        </Button>
                    </Link>
                    :
                    <Button 
                        position="left" 
                        onClick={this.handleDetailsClick}
                        >Details
                    </Button>
                    }
                </Card>
                :
                <h3>You must be logged in to see your favorites!</h3>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(WatchListFavoriteCard)