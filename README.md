# WE COVER

*Full React Redux with testing Tutorial *

# Table of Contents

1. [What is Redux]()
2. [What Redux include]()
3. [Implement simplest Redux]()
4. [Create Redux store with ReactJs]()
5. [Adding Actions and Reducers to store]()
6. [Redux Devtool]()
7. [Combine Reducers]()
8. [Providers]()
9. [Connects]()
10. [Redux thunk]()
11. [Testing]()





### 1. What is Redux — `#`

- Redux is a predictable state container for JavaScript apps.
- Run in different environments(client, server and native)
- It is tiny (2KB, including dependencies)



### 2. What Redux include — `#`

![Preview](https://github.com/patbi/Redux_Learning/blob/master/structure_of_redux.JPG)


### 3. Three principes of Redux — `#`

![Preview](https://github.com/patbi/Redux_Learning/blob/master/three_principles_redux.JPG)


### 4. Implement simplest Redux — `#`

- Create React App 

```bash
npm install create-react-app && create-react-app your_application_name
```

- Run Project

```bash
npm start
```
- Install Redux

```bash
npm install redux
```

### 5. Adding Actions and Reducers to store — `#`

- In your src->index.js

```bash
import {createStore} from 'redux';
```

Next create store

```bash
const store = createStore();
```

An error will be displayed due to the absence of the reducer function.
to correct this error you just have to create the reducer function as follows, before create store.

```bash
const reducer = () => {}
```

```bash
const store = createStore(reducer)
```

```bash
console.log(store);
```

- can see 

dispatch, subscribe, getState, replaceReducer...

- We're going to look at the getState

```bash
console.log(store.getState());
```

- undefined message -> because our application does not yet have a state


- So we create our state this way

```bash
const reducer = () => {
	return {name:'Patrick'}
}
```

- run 

```bash
console.log(store.getState());
```

- So we can see our state.

- Then we move on to our state update.


```bash
const reducer = (state, actions) => {
	 if(actions.type=== 'UPDATE_NAME'){
		return {name:actions.payload}
	 }
	return {name:'Patrick'}
}
```

- add the method dispatch() for update 

```bash
store.dispatch({type:'UPDATE_NAME', payload:'Isaac'})
```

```bash
console.log(store.getState());
```

So the three elements to remember are the following:

- Create reducer

- Create store

- Create actions


### 6. Redux Devtool — `#`

[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#usage)



 Next step Combine Reducers

### 7. Combine Reducers — `#`

So what does this step consist of? Just manipulating two reducers. And to do that we proceed as follows:


add combineReducers in import elements like this

```bash
import {createStore, combineReducers} from 'redux';
```

Create two reducer like this

- reducer one

```bash
const personReducer = (state ={}, {type, payload}) => {
	if(type === 'UPDATE_PERSON'){
		return {name:payload}
	}
	return state
}
```
- reducer two

```bash
const gameReducer = (state = {}, {type, payload}) => {
	if(type === 'UPDATE_GAME'){
		return {name:payload}
	}
	return state
}
```

Next we use combineReducers like this

 ```bash
const AllReducers = combineReducers({game:gameReducer, person:personReducer})
```

Next Initialize state like this


 ```bash
const InitialStates = {
	game:{name:'Football'},
	person:{name:'Patrick'},
}
```

Next create store like this

 ```bash
const store = createStore(AllReducers, InitialStates)
```

We can quickly check what's going on from our console with 

 ```bash
console.log(store.getState());
```

Next we add actions that will allow us to modify our initial state. Like This


 ```bash
store.dispatch({type:'UPDATE_PERSON', payload:'Isaac'})
```

Then we can observe the changes with a 

 ```bash
console.log(store.getState());
```


So what have we improved?

### 8 & 9. Providers - Connects  `#`

- The architecture of the redux project

![Preview](https://github.com/patbi/Redux_Learning/blob/master/new_structure.JPG)

- We have installed react-redux to better handle the Provider & Connect

 ```bash
npm install react-redux --save
```

Then, as previously announced, the following milestones have just been exported and imported.


- Create reducer

- Create store

- Create actions

But also to have our tool, we went on this page to get

[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#usage)

src -> store-> index.js

 ```bash
const store = createStore(
	AllReducers, 
	InitialStates, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
```

And to operate our store we just did this. 

in src -> index.js

```bash
import store from './store/index.js';
import {Provider} from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>

, document.getElementById('root'));	
```

And to operate our state we just did this. 

in src -> App.js

```bash
import React from 'react';
import './App.css';
import store from './store/index';
import update_person from './store/actions/personActions';
import update_game from './store/actions/gameActions';
import {connect} from 'react-redux';

function updatePerson () {
  store.dispatch(update_person);
}

function updateGame () {
  store.dispatch(update_game);
}



function App() {
  return (
    <div className="App">
        <h1>Redux Tutorial </h1>

        Person Name : {store.getState().person.name}
        <button onClick={updatePerson}>update person </button>

        <br/><br/>

        Game Name : {store.getState().game.name}
        <button onClick={updateGame}>update game </button>
    </div>
  );
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(App);
```



### 10. Redux Thunk — `#`

In order to be able to execute asynchronous actions, like a request to an external API we need to use a middleware which is redux-thunk 

Install redux-thunk

```bash
npm install redux-thunk --save	
```

After this installation we'll need to import 

- applyMiddleware & compose from redux like this

src -> store -> index.js

```bash
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
```

Next import thunk from 'redux-thunk' like this

src -> store -> index.js

```bash
import thunk from 'redux-thunk';
```

Next create userReducer like this

```bash
import {UPDATE_USER} from '../actions/userActions'

const userReducer = (state ={}, {type, payload}) => {
	switch(type) {
		case UPDATE_USER:
			return payload
		default:
			return state
	}
}

export default userReducer;
```

Next create userActions like this

```bash
export const UPDATE_USER = 'UPDATE_USER'

const fetch_user = (dispatch) => {
	fetch('https://reqres.in/api/users')
		.then(res => res.json())
		.then(res => dispatch({type:UPDATE_USER, payload:res.data}))
}

export default fetch_user;
```


Next update personReducer like this


```bash
import {UPDATE_PERSON} from '../actions/personActions'

const personReducer = (state ={}, {type, payload}) => {
	switch(type) {
		case UPDATE_PERSON:
			return Object.assign({},state,{name:payload})
		default:
			return state
	}
}

export default personReducer;
```

Next update index.js like this

src -> store > index.js

```bash
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
```

Next update App.js like this

src -> App.js 

```bash
import React from 'react';
import './App.css';
import update_person from './store/actions/personActions';
import update_game from './store/actions/gameActions';
import fetch_user from './store/actions/userActions';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
        <h1>Redux Tutorial </h1>

        Person Name : {props.person.name}
        <button onClick={props.updatePerson}>update person </button>

        <br/><br/>

        Game Name : {props.game.name}
        <button onClick={props.updateGame}>update game </button>
    
        <br/><br/>

        Users : <button onClick={props.fetchUsers}>Fetch Users </button>

        {
          props.users.length === 0 ? <p>No User found</p>:

          props.users.map(user => <p key={user.id}>{user.id} - {user.first_name} - {user.email}</p>)
        }

    </div>
  );
}

const mapStateToProps = state => {
    return {
      game:state.game,
      
      person:state.person,

      users:state.users
    }
}

const mapDispatchToProps = dispatch => {
  return {
      updateGame: () => {dispatch(update_game)},
      updatePerson: () => {dispatch(update_person)},
      fetchUsers: () => {dispatch(fetch_user)}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
```

Tomorrow we finish with the Testing and we continue with TypeScript

























