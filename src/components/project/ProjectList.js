import React from 'react';
import ProjectSummary from './ProjectSummary';

{/* map function cycles through project elements in project object */}
{/* Pass individual projects with their corresponding key number */}
{/*projects && used to say do not display anything if there are not projects*/}

const ProjectList = ({projects}) => 
{
    return(
        <div className="project-list section">
            {projects && projects.map(project =>{ 
                return (
                    <ProjectSummary project={project} key={project.id} /> 
                )
            })}
        </div>
    )
}

export default ProjectList;