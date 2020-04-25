import React, {Component} from 'react';

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
        console.log(this.state); //log submitted email and password to console
    }
    render()
    {
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
                        <label htmlFor="firstName">First Name</label>      {/*htmlFor specifies which form element label belongs to*/}
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>     
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>      {/*htmlFor specifies which form element label belongs to*/}
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>     
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>       
                </form>
            </div>
        )
    }
}

export default SignUp;