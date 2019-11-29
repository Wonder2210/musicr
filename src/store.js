import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {findSong} from './reducers';

export const store=createStore(
  combineReducers({findSong}),
  applyMiddleware(thunk)
);
