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
