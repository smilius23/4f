import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';

import MainPanel from './containers/MainPanel';

() => {
  const mainContainer = document.createElement('div');
  const store = configureStore();

  document.body.appendChild(mainContainer);

  ReactDOM.render(
    <Provider store={store}>
        <MainPanel />
    </Provider >
    , mainContainer)
}();


