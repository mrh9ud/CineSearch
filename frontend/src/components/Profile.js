import React from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Button, Image, Segment } from 'semantic-ui-react'

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
                                <Image src={img} alt={'Profile Picture'} />
                            </Segment>
                                  
                                <Button 
                                    positive
                                    >Edit Profile
                                </Button>

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
                                    onClick={undefined}    
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

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(Profile)