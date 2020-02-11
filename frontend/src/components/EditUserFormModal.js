import React from 'react'
import { connect } from 'react-redux'
import { editCurrentUser } from '../redux/actionCreators'
import { Form, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class EditUserFormModal extends React.Component {
    
    state = {
        username: this.props.currentUser.username,
        password: this.props.currentUser.password,
        name: this.props.currentUser.name,
        birthday: this.props.currentUser.birthday,
        bio: this.props.currentUser.bio,
        img: this.props.currentUser.img,
        region: this.props.currentUser.region,
    }

    handleSubmit = (event) => {
        this.props.editCurrentUser(this.state, this.props.currentUser.id)
        event.target.parentNode.reset()
        this.props.history.push('/')
    }

    handleFormChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        console.log(this.props)
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        name="username" 
                        label="Username"
                        placeholder="user123"
                        value={this.state.username}
                        onChange={this.handleFormChange}
                    />
                    <Form.Input 
                        fluid 
                        type="password"
                        name="password" 
                        label="Password"
                        placeholder="password..."
                        value={this.state.password}
                        onChange={this.handleFormChange}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input
                        required
                        fluid 
                        name="name" 
                        label="Full Name"
                        placeholder="Name Here"
                        value={this.state.name}
                        onChange={this.handleFormChange}
                    />
                    <Form.Input 
                        required
                        fluid 
                        name="region" 
                        label="Region"
                        placeholder="Washington, DC"
                        value={this.state.region}
                        onChange={this.handleFormChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input
                        required 
                        fluid 
                        name="birthday" 
                        label="Birthday"
                        placeholder="Jan 20, 1978"
                        value={this.state.birthday}
                        onChange={this.handleFormChange}
                    />
                    <Form.Input 
                        required
                        fluid 
                        name="img" 
                        label="Profile Image"
                        placeholder="www.sweetpics.com/yourimage.jpg"
                        value={this.state.img}
                        onChange={this.handleFormChange}
                    />
                </Form.Group>
                    <Form.TextArea
                        required
                        name="bio"
                        label='Bio'
                        placeholder='Just a little bit about you here'
                        value={this.state.bio}
                        onChange={this.handleFormChange}
                    />
                    <Button 
                        floated="right" 
                        primary
                        onClick={this.handleSubmit}
                        >Submit Your Changes
                    </Button>
            </Form>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

const mapDispatchToProps = dispatch => ({
    editCurrentUser: (editUserObj, currentUserId) => dispatch(editCurrentUser(editUserObj, currentUserId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUserFormModal))