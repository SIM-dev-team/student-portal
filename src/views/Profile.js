import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../student_profile/studentheader'
import Saved from '../student_profile/saved'
import 'bootstrap/dist/css/bootstrap.css';
// import Mycv from '../student_profile/cv'


function Profile() {
    return(
        <div className = "profile">
            <Header/>
            <Saved />
        </div>
            
        
    )
}

export default Profile
