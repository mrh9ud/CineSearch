import React from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.currentUser
                ?
                <Header textAlign='center' inverted size="large" >Welcome to CineSearch {this.props.currentUser.username}</Header>
                :
                <Header textAlign='center' inverted size='large' >Welcome to CineSearch</Header>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(Home)