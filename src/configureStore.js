import React, {Component} from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import logger from 'redux-logger';

import rootReducer from './reducers';

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, apiMiddleware, logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export const configureStore = () => {
  const store = finalCreateStore(rootReducer);
  return store;
}
