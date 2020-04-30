const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
      ]
};

//return default initial state of initState in projectReducer
const projectReducer = (state = initState, action) => { 
    //need to check createProject
    switch(action.type){
        case 'CREATE_PROJECT':   //if action type is create_project log that action and return state
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR': //if projectAction is an error,
            console.log('create project errpo', action.err)  ;
            return state;
        default:          //default case 
            return state;  
    }
} 

export default projectReducer;