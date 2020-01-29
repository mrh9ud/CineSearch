import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class MovieCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                {console.log(this.props)}
                <Card>
                    <Image src={this.props.movie.backdrop_path} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.movie.original_title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Release Date: {this.props.movie.release_date}</span>
                        </Card.Meta>
                        <Card.Description>
                            {this.props.movie.overview}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        Rating: {this.props.movie.vote_average}
                    </Card.Content>
                </Card>
                
            </React.Fragment>
        )
    }
}

export default MovieCard