import React from 'react';
import {Link} from 'react-router-dom'; //allows use of <Link> tag. react docs. provides navigation around app.
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
        <nav className="nav.nav-wrapper grey darken-3"> {/*darken by 3 shades (materialize class)*/}
            <div className="container">
                <Link to='/' className='brand-logo'>MarioPlan</Link> {/*/when clicked redirects to home. brand-logo-> materialize.css*/}
                <SignedInLinks />
                <SignedOutLinks />
            </div>
         </nav>   
    )
}

export default Navbar;