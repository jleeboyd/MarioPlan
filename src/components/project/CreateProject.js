import React, {Component} from 'react';
import { connect } from 'react-redux';
import {createProject} from '../../store/actions/projectActions'; //from projectActions 
import {Redirect} from 'react-router-dom'; //video #27 route guarding


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
        // console.log(this.state); //log submitted email and password to console
        this.props.createProject(this.state); //to mapDispatchToProps
    }
    render()
    {
        //redirect user to signin if not logged in
        const {auth} = this.props;
        if(!auth.uid) {
            return( <Redirect to="/signin" /> )
        }
        else{
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
                            <button className="btn pink lighten-1 z-depth-0">Create</button>
                        </div>       
                    </form>
                </div>
            )
        }
    }
}
// video #27
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

//when call props.createProject run map function, perform dispatch, 
//which will return projectActions function that can halt dispatch and make async call.
const mapDispatchToProps = (dispatch) => {
    return {
        createProject:(project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject); //null for mapStateToProps placeholder