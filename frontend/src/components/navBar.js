import React from 'react'
import { Menu, Button, Modal } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import LoginForm from './LoginForm'

class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Menu id="bandmates-nav-bar" inverted>
                <NavLink to='/movies'>
                    <Menu.Item name='logo'>CineSearch</Menu.Item>
                </NavLink>

                <NavLink to='/movies'>
                    <Menu.Item name='movies'>Browse Movies</Menu.Item>
                </NavLink>

                <NavLink to='/favorites'>
                    <Menu.Item name='favorites'>Favorites</Menu.Item>
                </NavLink>
                
                <NavLink to='/watchlist'>
                    <Menu.Item name='musicians'>Watch List</Menu.Item>
                </NavLink>
                
                <Menu.Menu position="right" >
                    <Menu.Item>
                        
                        <Modal trigger={<Button circular={true}>Login</Button>}> 
                            <Modal.Content image >
                                <LoginForm />
                            </Modal.Content>
                        </Modal>

                    </Menu.Item>
                </Menu.Menu>
              </Menu>
        </React.Fragment>
        )
    }
}

export default NavBar