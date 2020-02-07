import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

class Profile extends React.Component {

    render() {
        return (
            <Header inverted textAlign='center' size='large'>{this.props.currentUser.username + "'s Profile"}</Header>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(Profile)