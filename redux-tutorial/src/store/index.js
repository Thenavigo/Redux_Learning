import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import personReducer from './reducers/personReducer';
import gameReducer from './reducers/gameReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';


const AllReducers = combineReducers({game:gameReducer, person:personReducer, users:userReducer})

const InitialStates = {
	game:{name:'Football'},
	person:{name:'Patrick', email:'reactredux@tutorial.pat'},
	users:[]
}

const middleware = [thunk]

const store = createStore(AllReducers, InitialStates, compose(applyMiddleware
	(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;