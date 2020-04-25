import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../project/ProjectList';
//Displays ProjectList -> ProjectSummary

class Dashboard extends Component
{
    render()
    {
        return(
            <div className="dashboard container">
                <div className="row"> {/*materialize grid*/}
                    <div className="col s12 m6"> {/*For project list left. Have 12 cols with small screens. With medium have 6*/}
                        <ProjectList />
                    </div>    
                    <div className="col s12 m5 offset-m1">{/*For Notifications list on right*/}
                        <Notifications />
                    </div>    

                </div>
            </div>
        )
    }
}

export default Dashboard;