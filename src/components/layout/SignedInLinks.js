import React from 'react';
import {NavLink} from 'react-router-dom'; //allows use of <NavLink> tag. Use of active link?

//video #24 logging out, we want to dispatch action creator here
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {

    return(
        <ul className="right"> {/*classname materialize sets links to right side */}
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick = {props.signOut}>Log Out</a></li> {/*anchortag <a>, and props.signOut no () so not to fire when page loads*/}
            <li><NavLink to='/' className='btn btn-floating pink lighten -1'>{props.profile.initials}</NavLink></li> {/*styled to be a circle with materialize. video #29 props.initls seen in console when signed in*/}
        </ul>
    )
}

//video #24 allow this component to access dispatch in redux
//dispatch action creator in this component

//when Log Out is clicked, signOut function dispatches action import signOut which calls authAction signout that signs user out, which links to authReducer SIGNOUT_SUCCESS
const mapDispatchToProps = (dispatch) => {
    //returns object with signOut function
    return{
        signOut: () => dispatch(signOut()) //dispatch(action creator)
    }
}

//connect to redux
export default connect(null, mapDispatchToProps)(SignedInLinks);