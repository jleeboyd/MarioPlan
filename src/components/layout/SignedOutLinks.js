import React from 'react';
import {NavLink} from 'react-router-dom'; //allows use of <NavLink> tag. Use of active link?


const SignedOutLinks = () => {
    return(
        <ul className="right"> {/*classname materialize sets links to right side */}
            <li><NavLink to='/signup'>Signup</NavLink></li> {/*using routes set up in App.js */}
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;