import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux'; //binds reduc to react
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

 //root reducer is combo of other indiv reducers.
 //redux middleware thunk linked with firebase
//@ with extra argument => extra params in projectActions.js return()
//compose() to add store enhancers)
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig) //redux bindings for firestore
    )
  );  

const rrfProps = {
  firebase: fbConfig,
  config: {
    useFirestoreForProfile: true, //video #29 user profile. grab firestore 'users' data 
    userProfile: 'users'
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
