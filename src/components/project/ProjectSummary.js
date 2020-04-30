import React from 'react';

//called from projectList

const ProjectSummary = ({project}) => 
{
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by Jleeboyd</p>
                    <p className="grey-text">Apr 24 2020</p>
                </div>
            </div>
        </div>    
           
    )
}
export default ProjectSummary;