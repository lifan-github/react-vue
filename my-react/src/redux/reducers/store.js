import {combineReducers , createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import loginReducers from './loginReducers';
import allOrdersReducers from './allOrdersReducers';
import noticeReducers from './noticeReducers';

const middlewares = [
  thunk,
  logger
];

const allReducers = combineReducers({
  loginReducers,
  allOrdersReducers,
  noticeReducers
});

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(allReducers);

export default store