import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
import {connect} from 'react-redux';

//Displays ProjectList -> ProjectSummary

class Dashboard extends Component
{
    render()
    {
        // console.log(this.props)
        const {projects} = this.props; //de structuring 

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

//map state from store to props in this component
const mapStateToProps = (state) => {
    return{
        projects: state.project.projects //from projectReducer initState
    }
}

export default connect(mapStateToProps)(Dashboard);