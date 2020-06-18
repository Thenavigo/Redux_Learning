import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';

const personReducer = (state ={}, {type, payload}) => {
	if(type === 'UPDATE_PERSON'){
		return {name:payload}
	}
	return state
}


const gameReducer = (state = {}, {type, payload}) => {
	if(type === 'UPDATE_GAME'){
		return {name:payload}
	}
	return state
}


const AllReducers = combineReducers({game:gameReducer, person:personReducer})

const InitialStates = {
	game:{name:'Football'},
	person:{name:'Patrick'},
}

const store = createStore(AllReducers, InitialStates)

console.log(store.getState());

store.dispatch({type:'UPDATE_PERSON', payload:'Isaac'})
store.dispatch({type:'UPDATE_GAME', payload:'Natation'})

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
