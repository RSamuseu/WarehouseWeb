import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux'
import reducer from './reducers/index'
import './index.css';
import thunk from 'redux-thunk'
import App from './components/app/app';
import { getAllProducts } from './action'

const middleware = [ thunk ];
const store = createStore(reducer, applyMiddleware(...middleware));
store.dispatch(getAllProducts())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
