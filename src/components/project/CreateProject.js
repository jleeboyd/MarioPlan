import React, {Component} from 'react';

class CreateProject extends Component
{
    state = {
        title: "",
        content: ""
    }

    //React e for event
    handleChange = (e) => 
    {
        // console.log(e.timeStamp); time since last change ms
        console.log(e);

        //this will save the state for whichever input id is being altered. email or password
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>
    {
        e.preventDefault(); // prevent default reload of page on submission
        console.log(this.state); //log submitted email and password to console
    }
    render()
    {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">   {/**No parenthesis handleSubmit() so it will be fired on change not by page load */}
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">                       {/*materialize css */}
                        <label htmlFor="title">Title</label>            {/*htmlFor specifies which form element label belongs to*/}
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>      {/*htmlFor specifies which form element label belongs to*/}
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>     
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>       
                </form>
            </div>
        )
    }
}

export default CreateProject;