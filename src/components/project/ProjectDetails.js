import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'; //video #27 route guarding
//called from App

//since no props passed in App, default props is console object
const ProjectDetails = (props) =>
{
    // console.log(props);
    // const id = props.match.params.id; //params from web console props Object, firebase

    const {project, auth} = props; //set project to firebase props
    //video #27 route guarding
    if (!auth.uid)
    {
        return(<Redirect to='/signin' />)
    }
    else{     
        if (project) //check if project exists b4 displaying
        {
            return(
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{project.title} </span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action.grey lighten-4-grey-text">
                            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                            <div>Apr 24 2020</div>
                        </div>
                    </div>
                </div>
            )
        }
        //when data has not transfered from firebase
        else{
            return(
                <div className="container center">
                    <p className="white-text">Loading project...</p>
                </div>
            )
        }
    }    
}
//ternary operator, return if : else
//2nd param ownProps to get props
const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id; //route param id
    const projects = state.firestore.data.projects; //get projects object from firestore
    const project = projects ? projects[id] : null; //get project from projects object with matching id

    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect ([
        {collection: 'projects'}
    ])
)(ProjectDetails);