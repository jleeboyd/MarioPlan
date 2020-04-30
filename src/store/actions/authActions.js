//sends to authReducer with dispatch()

//video #23
//check user sign in with signin credentials in fb
export const signIn = (credentials) =>
{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        //firebase authentication with built in function
        //takes time and returns promise, so use .then
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        })
        .catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err}) //receive error in reducer
        });
    }
}

// video #24 logging out
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => { //built in function. async so it will take time, use .then()
            dispatch({type: 'SIGNOUT_SUCCESS'});

        }); 
    }
}    

//video #28 user sign up
//getFirebase for user authentication service, getFirestore for communication with database collection
//based on auth.uid, connects firebase and firestore
export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword( //built in function async, returns response resp
            newUser.email,
            newUser.password
        )
        .then((resp) => {
            //create a new collection 'users' and give it the same uid as firebase with doc and resp properties
            return firestore.collection("users").doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0] //concat user initials
            });
        })//by this point: created new user, and created new record of user in firestore
        .then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        })//if error catch it and dispatch type: error to reducer
        .catch(err => {
            console.log(err);
            dispatch ({type: 'SIGNUP_ERROR', err})
        })
    }

}