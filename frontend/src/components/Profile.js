import React from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Button, Image, Segment, Modal, List } from 'semantic-ui-react'
import { deleteCurrentUser, editCurrentUser } from '../redux/actionCreators'
import EditUserFormModal from './EditUserFormModal'

const amazonPrimeLink = 'https://www.https://www.amazon.com/gp/video/offers/ref=dvm_us_dl_sl_go_brp_pv3%7Cc_283448910624_m_NEQXGsdR-dc_s__?ie=UTF8&gclid=EAIaIQobChMI7pXTgebM5wIVBaSzCh1dCQj4EAAYASAAEgIqjvD_BwE.com/b/ref=ods_gw_vicc_shf_Valh1?node=11851273011&pf_rd_p=350cf015-cdf6-4223-8e87-4ee131ca276e&pf_rd_r=9T485AN5WFH63TBQME9K'
const netflixLink = 'https://www.netflix.com/browse'
const huluLink = 'https://www.hulu.com/welcome'
const youtubeLink = 'https://www.youtube.com/'
const vuduLink = 'https://www.vudu.com/'

class Profile extends React.Component {

    render() {
        let { username, name, birthday, region, img, bio } = this.props.currentUser
        console.log(this.props)
        return (
            <React.Fragment>
                <Header inverted textAlign='center' as="h1" color="yellow" size='large'>{username + "'s Profile"}</Header>
                <Grid columns={2} divided>
                    <Grid.Row stretched>
                        <Grid.Column>
                            
                            <Segment>
                                <Header as='h4'>Avatar:</Header>
                                <Image src={img} alt={'Profile Picture'} />
                            </Segment>
                           
                            <Segment>
                                <Header as='h4'>Birthday:</Header>
                                    <Header.Content>{birthday}</Header.Content>
                                    <p> {undefined}</p>
                                <Header  as='h4'>Region:</Header>
                                    <Header.Content>{region}</Header.Content>
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
                                <Button 
                                    float='right'
                                    negative
                                    onClick={ () => this.props.deleteCurrentUser(this.props.currentUser.id)}    
                                    >Delete Profile
                                </Button>
                        
                        </Grid.Column>

                        <Grid.Column>

                            <Segment>
                                <Header as='h1'>{name}</Header>

                                <Header as='h4'>About Me:</Header>
                                <hr/>
                                <Header as="h4">{bio}:</Header>
                                <p>{undefined}</p>
                            </Segment>

                            <Segment>
                                <List>
                                    <List.Header as='h4'>Find Some of Your Favorite Films at the Links below!</List.Header>
                                    <List.Item as='a' target="_blank" href={amazonPrimeLink}>
                                        Amazon Prime
                                    </List.Item>
                                    <List.Item as='a' target='_blank' href={netflixLink}>
                                        Netflix
                                    </List.Item>
                                    <List.Item as='a' target='_blank' href={huluLink}>
                                        Hulu
                                    </List.Item>
                                    <List.Item as='a' target='_blank' href={youtubeLink}>
                                        Youtube
                                    </List.Item>
                                    <List.Item as='a' traget="_blank" href={vuduLink}>
                                        Vudu
                                    </List.Item>
                                </List>
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