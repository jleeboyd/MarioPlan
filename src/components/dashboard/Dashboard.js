import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'; //video #19
import {compose} from 'redux'; //video #20?
import {Redirect} from 'react-router-dom'; //video 27 route guarding

//Displays ProjectList -> ProjectSummary

class Dashboard extends Component
{
    render()
    {
        // console.log(this.props)
        const {projects, auth} = this.props; //de structuring for projects and auth

        //if user is not signed in, redirect to signin page
        if (!auth.uid){ 
            return (<Redirect to="/signin" />)
        }
        //if user is signed in display everything
        else{
            return(
                <div className="dashboard container">
                    <div className="row"> {/*materialize grid*/}
                        <div className="col s12 m6"> {/*For project list left. Have 12 cols with small screens. With medium have 6*/}
                            <ProjectList projects = {projects}/> {/*pass store props state to component */}
                        </div>    
                        <div className="col s12 m5 offset-m1">{/*For Notifications list on right*/}
                            <Notifications />
                        </div>    

                    </div>
                </div>
            )
        }
    }
}

//map state from store to props in this component
const mapStateToProps = (state) => {
    console.log(state);
    return{
        // projects: state.project.projects //from projectReducer initState
        projects: state.firestore.ordered.projects, //load in data from firestore
        auth: state.firebase.auth //grab auth, for auth.uid from store video #27
    }
}

//firestoreConnect: anytime change is made in firebase, this function will re-grab the data
//takes an array with an object inside that is the collection we want to sync from firebase
//varies from NN video syntax
export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => ['projects'])
  )(Dashboard);

  //outdated NN syntax
// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//       { collection: 'projects' }
//     ])
//   )(Dashboard);

// export default connect(mapStateToProps)(Dashboard); //without firebase connectivity to state