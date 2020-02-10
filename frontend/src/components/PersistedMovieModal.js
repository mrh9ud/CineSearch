import React from 'react'
import { Card, Image, Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PersistedMovieModal extends React.Component {
    
    render() {
        let { api_id, poster_path, original_title, release_date, overview, vote_average } = this.props.movie

        return (
            <React.Fragment>
                <Modal.Header>{original_title}</Modal.Header>
                <React.Fragment>
                    <Card.Content>
                        <Image src={poster_path} size='medium' />
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
                <Link to={`/movies/${api_id}`} >
                        <Button>
                            More Info
                        </Button>
                </Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(PersistedMovieModal)