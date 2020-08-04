import React from 'react'
import {BrowserRouter as Router , Switch , Route}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../student_profile/studentheader'
import Saved from '../student_profile/saved'
import Mycv from '../student_profile/cv'
import Notification from '../student_profile/notification'


function Profile() {
    return(
        <React.Fragment>
        <div className = "profile">
            <Router>
                <Header/>
                
                
                <Switch>
                    <Route exact path="/Mycv" component={Mycv}/>
                    <Route exact path="/Saved" component={Saved}/>
                    <Route exact path="/Notification" component={Notification}/>
            
                </Switch>
            </Router>
        </div>
        </React.Fragment>    
        
    )
}

export default Profile
