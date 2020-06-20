import {createStore, combineReducers} from 'redux';
import personReducer from './reducers/personReducer';
import gameReducer from './reducers/gameReducer';


const AllReducers = combineReducers({game:gameReducer, person:personReducer})

const InitialStates = {
	game:{name:'Football'},
	person:{name:'Patrick'},
}

const store = createStore(
	AllReducers, 
	InitialStates, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;