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
const reducer = (state, actions) => {}
```

I'll be back tomorrow with more details about what you see next! 





























