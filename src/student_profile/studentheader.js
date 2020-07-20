import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Student.css'
import profile from '../images/profile.png'


class studentheader extends Component {

    render(){

        return (
            <div className = "student_header ">
                <div className = "edit_button_position">
                    <button className = "edit_profile">
                        Edit Profile
                    </button>
                </div>
    
                <div className = "user_details row">
                    <div className = "student_image">
                       <img src = {profile} alt = "Student Profile" style={{ height:'100px' , width:'100px' , borderRadius:'50px' }}/>
                    </div>
                    <div className = "user_edit">
                        <div className = "User_name">
                            <h4> KASUN KARUNANAYAKE </h4>
                        </div>
                        <div className = " row button_settings">
                            <button className = "button_link">
                                My CV
                            </button>
                            <button className = "button_link">
                                Saved
                            </button>
                            <button className = "button_link">
                                Notifications
                            </button>
                        </div>
                        <div className = "selection_advert row">
                            <h6 style = {{ margin:'10px 15px' ,  textDecoration: 'underline'}}>SELECTED ADVERTS</h6>
                            <div className = "bullet_prefer tp-bullets simplebullets round hovered">
                                <div className = "bullet first"></div>
                                <div className = "bullet"></div>
                                <div className = "bullet"></div>
                                <div className = "bullet"></div>
                                <div className = "bullet last"></div>
                                <div className = "tpclear"></div>

                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }


    
}

export default studentheader
