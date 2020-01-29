import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Menu id="bandmates-nav-bar" inverted>
                <NavLink to='/' exact>
                    <Menu.Item name='logo'>CineSearch</Menu.Item>
                </NavLink>

                <NavLink to='/movies' exact>
                    <Menu.Item name='movies'>Browse Movies</Menu.Item>
                </NavLink>

                <NavLink to='/watchlist' exact>
                    <Menu.Item name='musicians'>Watch List</Menu.Item>
                </NavLink>

                <NavLink to='/favorites' exact>
                    <Menu.Item name='favorites'>Favorites</Menu.Item>
                </NavLink>

                <Menu.Menu position="right" >
                    <Menu.Item>
                        <React.Fragment>
                        <Button >Log Out</Button>
                        </React.Fragment>
                    </Menu.Item>
                </Menu.Menu>
              </Menu>
        </React.Fragment>
        
        )
    }
}

export default NavBar