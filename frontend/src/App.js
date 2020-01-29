import React from 'react';
import './App.css';
import MainContainer from './containers/mainContainer'
import NavBar from './components/navBar'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <MainContainer />
    </React.Fragment>
  );
}

export default App;
