import React from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Button, Image, Segment, Modal } from 'semantic-ui-react'
import { deleteCurrentUser, editCurrentUser } from '../redux/actionCreators'
import EditUserFormModal from './EditUserFormModal'

class Profile extends React.Component {

    render() {
        let { username, name, birthday, region, img, bio } = this.props.currentUser

        return (
            <React.Fragment>
                <Header inverted textAlign='center' size='large'>{username + "'s Profile"}</Header>
                <Grid columns={2} divided>
                    <Grid.Row stretched>
                        <Grid.Column>
                            
                            <Segment>
                                <Header as='h4'>Avatar</Header>
                                <Image src={img} alt={'Profile Picture'} />
                            </Segment>
                                <Modal trigger={ 
                                    <Button 
                                        positive
                                        >Edit Profile
                                    </Button>}> 
                                    <Modal.Content>
                                        <EditUserFormModal/>
                                    </Modal.Content>
                                </Modal> 
                               
                            <Segment>
                                <p>Birthday: {birthday}</p>
                                <p> {undefined}</p>
                                <p>Region: {region}</p>
                            </Segment>

                            <Segment>
                                <p>paragraph</p>
                                <iframe >
    
                                </iframe>
                            </Segment>
                        
                        </Grid.Column>

                        <Grid.Column>

                            <Segment>
                                <Header as='h1'>{name}</Header>

                                <Header as='h4'>{"About Me:"}</Header>
                                <hr/>
                                <Header as="h4">{bio}:</Header>
                                <p>{undefined}</p>
                            </Segment>

                            <Segment>
                                <p>paragraph</p>
                                <iframe>

                                </iframe>
                                <Button 
                                    float='right'
                                    negative
                                    onClick={ () => this.props.deleteCurrentUser(this.props.currentUser.id)}    
                                    >Delete Profile
                                </Button>
                            </Segment>  

                        </Grid.Column>
                    </Grid.Row> 
                </Grid> 
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        deleteCurrentUser: (userId) => dispatch(deleteCurrentUser(userId)),
  editCurrentUser: (currentUserObj) => dispatch(editCurrentUser(currentUserObj)) })
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps, mapDispatchToProps)(Profile)