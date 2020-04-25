import React from 'react';
import {NavLink} from 'react-router-dom'; //allows use of <NavLink> tag. Use of active link?


const SignedInLinks = () => {
    return(
        <ul className="right"> {/*classname materialize sets links to right side */}
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten -1'>NN</NavLink></li> {/*styled to be a circle with materialize*/}
        </ul>
    )
}

export default SignedInLinks;