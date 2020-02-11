import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MovieContainer from './MovieContainer'
import SearchBar from '../components/SearchBar'
import WatchListContainer from './WatchListContainer'
import FavoritesContainer from './FavoritesContainer'
import WatchedContainer from './WatchedContainer'
import TrailerContainer from './TrailerContainer'
import MovieShow from '../components/MovieShow'
import LoginForm from '../components/LoginForm'
import Profile from '../components/Profile'
import { connect } from 'react-redux'
import Home from '../components/Home'

class MainContainer extends React.Component {

    findMovieToShow = () => {
        let URLId = parseInt(window.location.href.split('/').pop())
        let foundApiMovie = this.props.moviesArray.find( movie => movie.id === URLId)
        
        if (this.props.currentUser) {
            let watchListMovie = this.props.currentUser.watch_lists.find( watchListObj => watchListObj.movie.api_id === URLId )
            let favoriteListMovie = this.props.currentUser.favorites.find( favoriteObj => favoriteObj.movie.api_id === URLId )
            if (favoriteListMovie !== undefined) {
                return favoriteListMovie.movie
            } 
            if (watchListMovie !== undefined) {
                return watchListMovie.movie
            }
            if (foundApiMovie !== undefined) {
                return foundApiMovie
            }
        } else {
            return foundApiMovie
        }
    }

    render() {
        return this.props.moviesArray.length > 0
            ?
            (
            <Switch>
                <Route exact path='/movies/:id' render = { () => {
                    return <MovieShow foundMovie={this.findMovieToShow()} />
                }} />

                <Route exact path='/movies' render={ () =>
                    <React.Fragment>
                        <SearchBar />
                        <MovieContainer />
                    </React.Fragment>
                }/>

                <Route exact path='/watchlist' render={ () => (this.props.currentUser === null)
                    ? <Redirect to='/login' /> : <WatchListContainer/>} />

                <Route exact path='/favorites' render={ () => (this.props.currentUser === null)
                    ? <Redirect to='/login' /> : <FavoritesContainer/>} />

                <Route exact path='/watched' render={ () => (this.props.currentUser === null)
                    ? <Redirect to='/login' /> : <WatchedContainer/>} />
                <Route exact path='/login' component={LoginForm} />

                <Route exact path='/profile' render={ () => (this.props.currentUser === null)
                    ? <Redirect to='/login' /> : <Profile/>} />
                    
                <Route exact path ='/' render = { () => 
                    <React.Fragment>
                        <Home/>
                        <TrailerContainer/>
                    </React.Fragment>} />
            </Switch>
            )
            :
            <h1>Loading</h1>
    }
}

const mapStateToProps = store => ({ moviesArray: store.moviesArray, currentUser: store.currentUser })

export default connect(mapStateToProps)(MainContainer)
