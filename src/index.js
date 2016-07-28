import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import FindComponent from './container/FindComponent';
import SearchComponent from './container/SearchComponent'
import {Router, Route, hashHistory} from 'react-router';

const rootElement = document.getElementById('app');

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  thunkMiddleware
)(createStore);


const store = createStoreWithMiddleware(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

reduxRouterMiddleware.listenForReplays(store);

console.log('store', store.getState());

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={FindComponent} />
            <Route path='/search' component={SearchComponent} />
        </Router>
    </Provider>,
    rootElement
);
