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

Tomorrow we're going to follow up with "Combine Reducers"








































