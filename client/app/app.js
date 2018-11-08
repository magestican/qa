import 'babel-polyfill';// Needed for redux-saga es6 generator support
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './configureStore';
import { initialState } from './state/initialState';
import './style/main.scss';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import App from './containers/app'
import 'semantic-ui-css/semantic.min.css';
import './style/main.scss'
const history = createHistory();
let store = configureStore(initialState, history);


const MOUNT_NODE = document.getElementById('app');

export const appWrapper = (NextApp, injectedStore = store) => {
  return <AppContainer><Provider store={injectedStore}>
    <Router history={history}>
      <NextApp></NextApp>
    </Router>
  </Provider></AppContainer>
}

const render = (NextApp, mountNode = MOUNT_NODE) => {
  ReactDOM.render(appWrapper(NextApp), mountNode);
};

export const launchApp = (renderFun = render, mountNode, AppToRender = App) => {
  if (module.hot) {
    module.hot.accept('containers/app', () => {
      const NextApp = require('containers/app').default;
      renderFun(NextApp, mountNode);
    });
    renderFun(AppToRender, mountNode);
  } else {
    renderFun(AppToRender, mountNode);
  }
}

launchApp();
