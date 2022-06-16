import React from 'react'
import ReactDOM from 'react-dom'
import 'react-bootstrap/dist/react-bootstrap.min.js';
import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import './style/stylesheet.css'

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);    

