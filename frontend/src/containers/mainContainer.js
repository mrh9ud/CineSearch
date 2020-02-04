import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MovieContainer from './MovieContainer'
import SearchBar from '../components/SearchBar'
import WatchListContainer from './WatchListContainer'
import FavoritesContainer from './FavoritesContainer'
import MovieShow from '../components/MovieShow'
import LoginForm from '../components/LoginForm'
import Profile from '../components/Profile'
import { connect } from 'react-redux'
import Home from '../components/Home'

class MainContainer extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/movies/:id' render = { () => {
                    let movieId = parseInt(window.location.href.split('/').pop())
                    let foundMovie = this.props.moviesArray.find(movie => movie.id === movieId) || {}
                    return <MovieShow foundMovie={foundMovie}/>
                }} />
                <Route exact path='/movies' render={ () =>
                    <React.Fragment>
                        <SearchBar />
                        <MovieContainer />
                    </React.Fragment>
                }/>
                <Route exact path='/watchlist' component={WatchListContainer}/>
                <Route exact path='/favorites' component={FavoritesContainer}/>
                
                
                <Route exact path='/login' component={LoginForm} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path ='/' component={Home} />
            </Switch>
        )
    }
}

const mapStateToProps = store => ({ moviesArray: store.moviesArray })

export default connect(mapStateToProps)(MainContainer)
