import React from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Home extends React.Component {

    render() {
        if (this.props.trailerArray.length !== 0) {
            return (
                <React.Fragment>
                    <Header as="h1" inverted color="yellow" textAlign="center">
                        {this.props.trailerArray.length === 1 
                        ? 
                        `Top Movie Trailer from ${this.props.trailerArray[0].site}` 
                        : 
                        `Top Movie Trailers from ${this.props.trailerArray[0].site}`}
                    </Header>
                </React.Fragment>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser, trailerArray: store.trailerArray })

export default connect(mapStateToProps)(Home)