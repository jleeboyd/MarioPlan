//video #23
//associated with auth: authReducer in rootReducer, authActions via dispatch
//data stored in OUR auth property not firebase
const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type) { //check action type from authActions
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state, //spreader for other state
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null //because there is no longer an error
            }
        //#24 signout    
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return {
                state
            }
         //video #28 signup   
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state, //spreader for other state
                authError: null 
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message //err passed in through authActions signup
            }
        //need default case
        default: 
            return state;
    }
} //set reducer and state to initial 

export default authReducer;