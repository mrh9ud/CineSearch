import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MovieContainer from './MovieContainer'
import SearchBar from '../components/SearchBar'
import WatchListContainer from './WatchListContainer'
import FavoritesContainer from './FavoritesContainer'
import MovieShow from '../components/MovieShow'
import LoginForm from '../components/LoginForm'

class MainContainer extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/movies' exact render={ () =>
                    <React.Fragment>
                        <SearchBar />
                        <MovieContainer />
                    </React.Fragment>
                }/>
                <Route path='/watchlist' exact component={WatchListContainer}/>
                <Route path='/favorites' exact component={FavoritesContainer}/>
                <Route path='/movies/:id' exact component={MovieShow}/>
                <Route path='/login' exact component={LoginForm} />
            </Switch>
        )
    }
}

export default MainContainer
