import React from 'react'
import { connect } from 'react-redux'
import TrailerCard from '../components/TrailerCard'
import { Grid, Container, Header, Message, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class TrailerContainer extends React.Component {
    
    render() {
        if (this.props.trailerArray.length !== 0) {
            return (
                <Container>
                    <Grid columns={2} divided>
                        <Grid.Row stretched>
                            {this.props.trailerArray.map( trailer => { return <TrailerCard key={trailer.id} trailer={trailer} />})}
                        </Grid.Row>
                    </Grid>
                </Container>
            )
        } else {
            return (
                <React.Fragment>
                    <Message>
                        <Message.Header as='h2'>Woops! No Movie trailers were found!</Message.Header>
                        <p>Click below to find films to watch. {!this.props.currentUser ? " Make sure to login to start tracking movies!" : null} </p>
                    </Message>
                    <Button.Group>
                        <Button
                            onClick={ () => this.props.history.push('/movies')}
                            >Find Movies to Watch
                        </Button>
                        <Button
                            onClick={ () => this.props.history.push('/login')}
                            >Login
                        </Button>
                    </Button.Group>
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = store => ({ trailerArray: store.trailerArray })

export default withRouter(connect(mapStateToProps)(TrailerContainer))