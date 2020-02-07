import React from 'react'
import { Header, Form, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createNewUser, verifyUser } from '../redux/actionCreators'

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

    processNewUserLogin = () => {
        let newUserFormData = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            birthdate: this.state.birthdate,
            bio: this.state.bio,
            img: this.state.img,
            region: this.state.region
        } 
        this.props.createNewUser(newUserFormData)
    }

    processExistingUserLogin = (event) => {
        let existingUserFormData = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.verifyUser(existingUserFormData)
    }

    
    render() {
        return (
            <Container>
                <Header textAlign='center' inverted size="large">CineSearch</Header>
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
                                name="birthdate" 
                                label="Birthdate"
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)