//pausing dispatch, making async call to database, then carry on with route
export const createProject = (project) => {
    return (dispatch, getState) => {
        // type: 'ADD_PROJECT', //normal action syntax
        // project: project
        
        //make async call to database
        dispatch({type:'CREATE_PROJECT', project:project})

    }
};