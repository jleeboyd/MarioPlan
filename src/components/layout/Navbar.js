import React from 'react';
import {Link} from 'react-router-dom'; //allows use of <Link> tag. react docs. provides navigation around app.
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'; //for export

const Navbar = (props) => {
    const {auth, profile} = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />//if auth.uid exists ie user is signed in show signedinlinks, else signedoutLinks
    return(
        <nav className="nav.nav-wrapper grey darken-3"> {/*darken by 3 shades (materialize class)*/}
            <div className="container">
                <Link to='/' className='brand-logo'>MarioPlan</Link> {/*/when clicked redirects to home. brand-logo-> materialize.css*/}
                {links} {/* ternary operator above to show or hide signin links */}
            </div>
         </nav>   
    )
}

//video #22/ #25 log out
//convert state to props for component
const mapStateToProps = (state) =>
{
    
    console.log(state); //firebase ifEmpty: true if not logged in
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile //video #29 profile from index.js rrf.props
    }
}
export default connect(mapStateToProps) (Navbar);