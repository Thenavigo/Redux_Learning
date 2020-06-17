import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';

const reducer = (state, actions) => {
	console.log(actions);
	// if(actions.type=== 'UPDATE_NAME'){
	// 	return {name:'actions.payload'}
	// }
	return {name:'Patrick'}
}

const store = createStore(reducer)

console.log(store.getState());

store.dispatch({type:'UPDATE_NAME', payload:'Isaac'})

console.log(store.getState());












ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
