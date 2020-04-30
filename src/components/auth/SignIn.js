import React, {Component} from 'react';
import {connect} from 'react-redux'; //video #23
import {signIn} from '../../store/actions/authActions'; //connect with actions from dispatch
import {Redirect} from 'react-router-dom'; //video #27 route guarding

class Signin extends Component
{
    state = {
        email: "",
        password: ""
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
        this.props.signIn(this.state); //state is email and pass to authActions
    }
    render()
    {
        const {authError, auth} = this.props;
        //redirects if user IS signed in video #27
        if (auth.uid)
        {
            return(<Redirect to='/' />)
        }
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">   {/**No parenthesis handleSubmit() so it will be fired on change not by page load */}
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">                       {/*materialize css */}
                        <label htmlFor="email">Email</label>            {/*htmlFor specifies which form element label belongs to*/}
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>      {/*htmlFor specifies which form element label belongs to*/}
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>     
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className = "red-text" center>
                            {authError ? <p>{authError}</p> : null} {/**if authError = null = false. authError from authAction->authReducer*/}
                        </div>
                    </div>       
                </form>
            </div>
        )
    }
}

//video #23
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError, //state.auth for root reducer, authError for authReducer 
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return{
        signIn: (creds) => dispatch(signIn(creds)) //creds from authActions
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin); //connect(mapState,mapDispatch)