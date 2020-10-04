import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import profile from '../images/profile.png'
import {EditModal} from './editModal'
import 'bootstrap/dist/css/bootstrap.css';
import './Student.css'


class studentheader extends Component {

    constructor(props){
        super(props);
        this.state ={editModalShow : false}
    }


    render(){
        let editModalClose =() => this.setState({editModalShow: false });
        return (
            <>
            <div className = "student_header container">
                <div className = "user_details row">
                    <button className = "edit_profile" onClick={()=> this.setState({editModalShow: true})}>
                        Edit Profile
                    </button> 
                    <div className = "student_image">
                       <img src = {profile} alt = "Student Profile" style={{ height:'100px' , width:'100px' , borderRadius:'50px' }}/>
                    </div>
                    <div className = "user_edit">
                        <div className = "User_name">
                            <h4> KASUN KARUNANAYAKE </h4>
                        </div>
                        <div className = " row button_settings">
                            <Link to="/Mycv">
                            <button className = "button_link">
                                My CV
                            </button>
                            </Link>
                            <Link to="/Saved">
                            <button className = "button_link">
                                Saved
                            </button>
                            </Link>
                            <Link to="/Notification">
                            <button className = "button_link">
                                Notifications
                            </button>
                            </Link>
                        </div>
                        
                        <div className = "selection_advert row">
                        <Link to="/Prefer"> <h6 style = {{ margin:'10px 15px' ,  textDecoration: 'underline'}}>SELECTED ADVERTS</h6> </Link>
                            <div className = "bullet_prefer tp-bullets simplebullets round hovered row ">
                                <button className = "selection "> 1 </button>
                                <button className = "selection "> 2 </button>
                                <button className = "selection"> 3 </button>
                                <button className = "selection"> 4 </button>
                                <button className = "selection"> 5 </button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div >
            </div>
            <EditModal
            show = {this.state.editModalShow}
            onHide = {editModalClose}
            />
            </>
        )
    }


    
}

export default studentheader
