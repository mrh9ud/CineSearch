import React from 'react'
import { Card, Image, Button, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class PersistedMovieModal extends React.Component {
    
    render() {
        let { api_id, poster_path, original_title, release_date, overview, vote_average } = this.props.movie

        return (
            <React.Fragment>
                <Card.Content>
                    <Header textAlign="center" as='h2'>{original_title}</Header>
                    <Card.Content id="CardModalDiv">
                        <Image centered={true} className='movieCardModal' src={poster_path} size='medium' />
                    </Card.Content>
                    <Card.Content className='cardModalText' textAlign="center">
                        <p><b>Release Date:</b> {release_date.slice(0, 10)}</p>
                        <p><b>Rating:</b> {vote_average}</p>
                        <p><b>Description:</b> {overview}</p>
                    </Card.Content>
                    <Button 
                        id='ModalButton' 
                        positive
                        fluid='true' 
                        onClick={ () => this.props.history.push(`/movies/${api_id}`)}
                        >More Info
                    </Button>
                </Card.Content>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default withRouter(connect(mapStateToProps)(PersistedMovieModal))