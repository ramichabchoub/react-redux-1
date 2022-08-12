import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { moviesReducer } from '../reducer/movieReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// 1) Create a Redux store
const store = createStore(moviesReducer, applyMiddleware(thunk));

export default store;