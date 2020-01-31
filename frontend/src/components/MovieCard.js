import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
    state = {
        detailsActive: false
    }

    handleDetailsClick = () => {
        this.setState({ detailsActive: !this.state.detailsActive})
    }

    render() {
        let { id, poster_path, original_title, release_date, overview, vote_average } = this.props.movie
        
        return (
            <React.Fragment>
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
                
            </React.Fragment>
        )
    }
}

export default MovieCard