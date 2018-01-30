import { createStore, combineReducers, applyMiddleware } from 'redux';
import users from './reducers/userReducer';
import locations from './reducers/locationReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers({ users, locations }),
    applyMiddleware(logger, thunk)
);
