import React from 'react'
import { Header, Form, Button, Container, Label, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createNewUser, verifyUser } from '../redux/actionCreators'
import { withRouter } from 'react-router-dom'

class LoginForm extends React.Component {
    state = {
        newAccount: false,
		username: '',
		password: '',
		name: '',
		birthday: '',
		bio: '',
		img: '',
		region: '',
    }

    toggleSignupForm = () => {
        this.setState({ newAccount: !this.state.newAccount })
    }

    handleFormChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    processNewUserLogin = (event) => {
        let newUserFormData = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            birthday: this.state.birthday,
            bio: this.state.bio,
            img: this.state.img,
            region: this.state.region
        } 
        this.props.createNewUser(newUserFormData)
        event.target.parentNode.reset()
        this.props.history.push('/')
    }

    processExistingUserLogin = (event) => {
        let existingUserFormData = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.verifyUser(existingUserFormData)
        event.target.parentNode.reset()
        this.props.history.push('/')
    }

    
    render() {
        return (
            <Container>
                <Form>
                    <Header textAlign='center' color="yellow" size="large">CineSearch</Header>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <Label style={{color: 'teal'}}>Username</Label>
                            <Input
                                fluid 
                                name="username" 
                                placeholder="user123"
                                onChange={this.handleFormChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Label style={{color: 'teal'}}>Password</Label>
                            <Input
                                fluid 
                                type="password"
                                placeholder="password..."
                                onChange={this.handleFormChange}
                            />
                        </Form.Field> 
                    </Form.Group>
                    {this.state.newAccount
                    ?
                    <React.Fragment>
                        <Form.Group widths='equal'>
                            <Form.Input
                                required
                                fluid 
                                name="name" 
                                label="Full Name"
                                placeholder="Name Here"
                                onChange={this.handleFormChange}
                            />
                            <Form.Input 
                                required
                                fluid 
                                name="region" 
                                label="Region"
                                placeholder="Washington, DC"
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
                                onChange={this.handleFormChange}
                            />
                            <Form.Input 
                                required
                                fluid 
                                name="img" 
                                label="Profile Image"
                                placeholder="www.sweetpics.com/yourimage.jpg"
                                onChange={this.handleFormChange}
                            />
                        </Form.Group>
                            <Form.TextArea
                                required
                                name="bio"
                                label='Bio'
                                placeholder='Just a little bit about you here'
                                onChange={this.handleFormChange}
                            />
                        </React.Fragment>
                        : 
                        null}
                        {!this.state.newAccount
                        ?
                        <Button 
                            floated="right" 
                            primary
                            onClick={this.toggleSignupForm}
                            >New User
                        </Button>
                        :
                        <Button
                            type="submit" 
                            floated="right" 
                            primary
                            onClick={this.processNewUserLogin}
                            >Sign Up
                        </Button>
                        }
                        {!this.state.newAccount
                        ?
                        <Button 
                            type="submit" 
                            floated="right"
                            secondary
                            onClick={this.processExistingUserLogin} 
                            >Sign In
                        </Button>
                        :
                        <Button 
                            floated="right" 
                            secondary 
                            onClick={this.toggleSignupForm}
                            >Existing User
                        </Button>
                        }
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

const mapDispatchToProps = dispatch => {
    return ({ createNewUser: (userObj) => dispatch(createNewUser(userObj)),
                 verifyUser: (userObj) => dispatch(verifyUser(userObj)) })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))