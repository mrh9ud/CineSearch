import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MovieContainer from './MovieContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends React.Component {
    render() {
        return (
            <Switch>
                <Route to='/movies' exact render={ (routerProps) =>
                    <React.Fragment>
                        <SearchBar />
                        <MovieContainer />
                    </React.Fragment>
                }/>
            </Switch>
        )
    }
}

export default MainContainer
