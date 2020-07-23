import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../student_profile/studentheader'
// import Mycv from '../student_profile/cv'
import Saved from '../student_profile/saved'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../student_profile/studentheader'
import Mycv from '../student_profile/cv'
import Saved from '../student_profile/saved'


function Profile() {
    return(
        <div className = "profile">
            <Header/>
            <Saved />
        </div>
            
        
    )
}

export default Profile
