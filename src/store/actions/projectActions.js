//pausing dispatch, making async call to database, then carry on with route
export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // type: 'ADD_PROJECT', //normal action syntax
        // project: project
        
        //make async call to database
        const firestore = getFirestore(); //reference to firestore database

        //...spreader inputs what prop object elements we are inputting via createProject ie content and title
        firestore.collection('projects').add({
            ...project, 
            authorFirstName:'Jlee',
            authorLastName:'Boyd',
            authorId: 12345,
            createdAt: new Date()
        })
        .then(() => { 
            dispatch({type:'CREATE_PROJECT', project:project})
        })
        .catch((err) => { 
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
       //.then(callback fnc.) to exeucte after async call (promise) is finished
       //if there is error (err) catch it and dispatch error instead to reducer

    }
};