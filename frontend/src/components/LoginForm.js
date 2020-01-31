import React from 'react'
import { Header, Form, Image, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { validatedUser } from '../redux/actionCreators'

class LoginForm extends React.Component {
    state = {
        newAccount: false,
		username: '',
		password: '',
		name: '',
		birthdate: '',
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

    processNewUser = () => {

        this.props.validatedUser(this.state)
    }

    processExistingUser = (event) => {
        console.log(event)
    }
    
    render() {
        return (
            <Container>
                <Header>Profile Details</Header>
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Input 
                        fluid 
                        name="username" 
                        label="Username"
                        placeholder="user123"
                        onChange={this.handleFormChange}
                    />
                    <Form.Input 
                        fluid 
                        type="password"
                        name="password" 
                        label="Password"
                        placeholder="password..."
                        onChange={this.handleFormChange}
                    />
                    </Form.Group>
                    {this.state.newAccount
                    ?
                    <React.Fragment>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                fluid 
                                name="name" 
                                label="Full Name"
                                placeholder="Name Here"
                                onChange={this.handleFormChange}
                            />
                            <Form.Input 
                                fluid 
                                name="region" 
                                label="Region"
                                placeholder="Washington, DC"
                                onChange={this.handleFormChange}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                fluid 
                                name="birthdate" 
                                label="Birthdate"
                                placeholder="Jan 20, 1978"
                                onChange={this.handleFormChange}
                            />
                            <Form.Input 
                                fluid 
                                name="img" 
                                label="Profile Image"
                                placeholder="www.sweetpics.com/yourimage.jpg"
                                onChange={this.handleFormChange}
                            />
                        </Form.Group>
                            <Form.TextArea
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
                            onClick={this.processNewUser}
                            >Sign Up
                        </Button>
                        }
                        {!this.state.newAccount
                        ?
                        <Button 
                            type="submit" 
                            floated="right"
                            secondary
                            onClick={this.processExistingUser} 
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

const mapStateToProps = store => ({ currentUser: store.userObj, usersArray: store.users })

const mapDispatchToProps = dispatch => {
    return ({ validatedUser: (userObj) => dispatch(validatedUser(userObj)) })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)