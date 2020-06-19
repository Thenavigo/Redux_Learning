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




 Next step Combine Reducers


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

Tomorrow we'll continue with the -> Providers 





























