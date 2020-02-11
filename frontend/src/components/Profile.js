import React from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Button, Image, Segment } from 'semantic-ui-react'

class Profile extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header inverted textAlign='center' size='large'>{this.props.currentUser.username + "'s Profile"}</Header>
                <Grid columns={2} divided>
                    <Grid.Row stretched>
                        <Grid.Column>
                            
                            <Segment>
                                <Image src={undefined} alt={undefined} />
                            </Segment>
                                <React.Fragment>
                                    <Button 
                                        negative
                                        onClick={undefined}    
                                        >Delete Profile
                                    </Button>
                                    <Button 
                                        positive
                                        >Edit Profile
                                    </Button>
                                </React.Fragment>

                            <Segment>
                                <p>Age: {undefined }</p>
                                <p>Playing Since: {undefined}</p>
                                <p>Region: {undefined}</p>
                            </Segment>

                            <Segment>
                                <p>Demos:</p>
                                <iframe >
    
                                </iframe>
                            </Segment>
                        
                        </Grid.Column>

                        <Grid.Column>

                            <Segment>
                                <Header as='h1'>{undefined}</Header>

                                <Header as='h1'>{undefined}</Header>
                                <hr/>
                                <Header as="h4">About {undefined}:</Header>
                                <p>{undefined}</p>
                            </Segment>

                            <Segment>
                                <p>Demos:</p>
                                <iframe>

                                </iframe>
                            </Segment>

                        </Grid.Column>
                    </Grid.Row> 
                </Grid> 
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(Profile)