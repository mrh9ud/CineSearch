import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Home extends React.Component {

    render() {
        if (this.props.trailerArray.length !== 0) {
            return (
                <Container>
                    <Header as="h1" inverted color="yellow" textAlign="center">
                        {this.props.trailerArray.length === 1 
                        ? 
                        `Top Movie Trailer from ${this.props.trailerArray[0].site}` 
                        : 
                        `Top Movie Trailers from ${this.props.trailerArray[0].site}`}
                    </Header>
                </Container>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser, trailerArray: store.trailerArray })

export default connect(mapStateToProps)(Home)