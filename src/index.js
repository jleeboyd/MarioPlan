import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux'; //binds reduc to react
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';

const store = createStore(rootReducer, applyMiddleware(thunk)); //root reducer is combo of other indiv reducers

const rrfProps = {
  firebase: fbConfig,
  config: {
    useFirestoreForProfile: true,
    userProfile: 'users'
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
