import {combineReducers , createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import allOrdersReducers from './allOrdersReducers';

const middlewares = [
  thunk,
  logger
];

const allReducers = combineReducers({
  allOrdersReducers
});

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(allReducers);

export default store