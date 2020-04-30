import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

//called from dashboard

{/* map function cycles through project elements in project object */}
{/* Pass individual projects with their corresponding key number */}
{/*projects && used to say do not display anything if there are not projects in object*/}
// Link to different route, where project.id is the firebase collection id.
const ProjectList = ({projects}) => 
{
    return(
        <div className="project-list section">
            {projects && projects.map(project =>{ 
                return (
                    <Link to={'/project/' + project.id}>
                        <ProjectSummary project={project} key={project.id} />
                    </Link> 
                )
            })}
        </div>
    )
}

export default ProjectList;