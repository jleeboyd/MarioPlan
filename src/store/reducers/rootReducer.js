import authReducer from './authReducer';
import projectReducer from './projectReducer';

import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';// video #19
import {firebaseReducer} from 'react-redux-firebase';//video #22
//premade reducer made for syncing our firestore data with our state in background

//combine both reducers into single rootReducer

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer ,
    firebase: firebaseReducer //use this to connect to firebase
});
//video #19
//needs to know what data to sync ie component link import
export default rootReducer