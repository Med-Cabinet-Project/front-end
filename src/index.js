import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import Reducer from './Reducers/reducers'
import thunk from 'redux-thunk';

const store= createStore(Reducer, applyMiddleware(thunk));

const rootElement= document.getElementById('root');

ReactDOM.render(
    <Provider store ={store}>
      <App />
    </Provider>,
      rootElement
);
    
