import React from 'react';

const ProjectDetails = (props) =>
{
    console.log(props);
    const id = props.match.params.id; //params from web console props Object
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>lorem ipsum </p>
                </div>
                <div className="card-action.grey lighten-4-grey-text">
                    <div>Posted by Jleeboyd</div>
                    <div>Apr 24 2020</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails;