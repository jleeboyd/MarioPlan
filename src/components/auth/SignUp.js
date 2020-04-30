import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'; //video #27 route guarding
import {connect} from 'react-redux';

import {signUp} from '../../store/actions/authActions'; //video #28 signup

//note, password must be longer than 6 chars
class SignUp extends Component
{
    state = {
        email: "",
        password: "",
        firstName:"",
        LastName:""
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
        this.props.signUp(this.state); //send new user state data into signUp dispatch
    }
    render()
    {
        //route guard video #27
        const {auth, authError} = this.props;
        if (auth.uid)
        {
            return(<Redirect to='/' />)
        }    
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">   {/**No parenthesis handleSubmit() so it will be fired on change not by page load */}
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">                       {/*materialize css */}
                        <label htmlFor="email">Email</label>            {/*htmlFor specifies which form element label belongs to*/}
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>      {/*htmlFor specifies which form element label belongs to*/}
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>     
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>      {/*htmlFor specifies which form element label belongs to*/}
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>     
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>      {/*htmlFor specifies which form element label belongs to*/}
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>     
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit</button>
                        <div className = "red-text" center>
                            {authError ? <p>{authError}</p> : null} {/**if auth fails print to screen from firebase. authError from authAction->authReducer*/}
                        </div>    
                    </div>       
                </form>
            </div>
        )
    }
}
//video #27
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
//video #28
const mapDispatchToProps = (dispatch) =>
{
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);