import React from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import MainContainer from './containers/MainContainer'
import NavBar from './components/NavBar'
import { fetchingRecommendedMovies, fetchingRandomMovieTrailer } from './redux/actionCreators'
import { connect } from 'react-redux'

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchingRecommendedMovies()
    this.props.fetchingRandomMovieTrailer()
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainContainer />
      </React.Fragment>
    );
  }
}
  
const mapDispatchToProps = (dispatch) => ({
  fetchingRecommendedMovies: () => dispatch(fetchingRecommendedMovies()),
 fetchingRandomMovieTrailer: () => dispatch(fetchingRandomMovieTrailer()) })

export default withRouter(connect(null, mapDispatchToProps)(App));
