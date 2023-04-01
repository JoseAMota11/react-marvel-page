import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';
import allReducers from './reducers';

const store = createStore(allReducers, composeWithDevTools());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
