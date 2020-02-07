import React from 'react'
import { Menu, Button, Modal, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { logOutUser } from '../redux/actionCreators'

class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Menu id="cinesearch-nav-bar" inverted>
                <NavLink to='/'>
                    <Menu.Item name='logo'>CineSearch</Menu.Item>
                </NavLink>

                <NavLink to='/movies'>
                    <Menu.Item name='movies'>Browse Movies</Menu.Item>
                </NavLink>

                <NavLink to='/favorites'>
                    <Menu.Item name='favorites'>Favorites</Menu.Item>
                </NavLink>
                
                <NavLink to='/watchlist'>
                    <Menu.Item name='watch_lists'>Watch List</Menu.Item>
                </NavLink>
                
                <Menu.Menu position="right" >
                    <Menu.Item>
                        
                        {!this.props.currentUser
                        ?
                        <Modal trigger={<Button circular={true}>Login</Button>}> 
                            <Modal.Content image >
                                <LoginForm />
                            </Modal.Content>
                        </Modal>
                        :
                        <React.Fragment>
                            <NavLink to='/profile'>
                                <Menu.Item name='profile'><Image fluid src={this.props.currentUser.img} alt={'profile picture'}/></Menu.Item>
                            </NavLink>
                            <Button
                                floated="right"
                                onClick={this.props.logOutUser}
                                >Logout
                            </Button>
                        </React.Fragment>
                        }

                    </Menu.Item>
                </Menu.Menu>
              </Menu>
        </React.Fragment>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

const mapDispatchToProps = dispatch => {
    return { logOutUser: () => dispatch(logOutUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)