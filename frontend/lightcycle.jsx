import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';

//TESTING IMPORTS
import {fetchPins} from './actions/pin_actions';

document.addEventListener('DOMContentLoaded', () => {
  
  //bootstrapping
  let store;
  if (window.currentPlayer) {
    const preloadedState = {
      session: { id: window.currentPlayer.id },
      entities: {
        players: { [window.currentPlayer.id]: window.currentPlayer }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentPlayer;
  } else {
    store = configureStore();
  }

  //TESTING BELOW
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.fetchPins = fetchPins
  //TESTING ABOVE
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})