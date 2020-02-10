import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";
import './index.css'
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Provider store={store}>
                <App />
        </Provider>
    </Router>, 
    document.getElementById('root')
);