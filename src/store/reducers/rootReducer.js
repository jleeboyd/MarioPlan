import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';

//combine both reducers into single rootReducer

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer