import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import * as reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(thunk.withExtraArgument(services)) //Buena practica, le inyectamos como un prop un servicio preconfigurado a todos los actions thunk
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
