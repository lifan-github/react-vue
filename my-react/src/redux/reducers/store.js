import {combineReducers , createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import allOrdersReducers from './allOrdersReducers';
import loginReducers from './loginReducers';

const middlewares = [
  thunk,
  logger
];

const allReducers = combineReducers({
  loginReducers,
  allOrdersReducers
});

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(allReducers);

export default store