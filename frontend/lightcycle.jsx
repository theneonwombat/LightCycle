import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import { login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
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
  //TESTING ABOVE
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})