//STATELESS HEADER COMPONENT WITH MAIN H1 SIGN IN SIGN UP SIGN OUT AND WELCOME MESSAGE
//If there isn't a user sign in it shows sign in and sign up links else it shows welcome message and sign out link
//import React
import React from 'react';
//import Link
import { Link } from 'react-router-dom';

export default (props) => {

        const { context } = props;
        const authUser = context.authenticatedUser;
        //console.log(authUser);

        return(
            <div className="header">
                <div className="bounds">
                    <Link to="/"><h1 className="header--logo">Courses</h1></Link>
                    <nav>
                        {  authUser
                            ?(
                                <React.Fragment>
                                    <span>Welcome, {authUser.firstName}!</span>
                                    <Link className="signout" to="/signout">Sign Out</Link>
                                </React.Fragment>
                            )
                            :(
                                <React.Fragment>
                                    <Link className="signup" to="/signup">Sign Up</Link>
                                    <Link className="signin" to="/signin">Sign In</Link>
                                </React.Fragment>
                            )
                        }
                    </nav>
                </div>
            </div>
        );
};



