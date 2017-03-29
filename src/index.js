import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import './css/index.css';
import comments from './reducers/comments.js';
import users from './reducers/users.js';

const reducer = combineReducers({
  comments,
  users
});

const store = createStore(
  reducer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
