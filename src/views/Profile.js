
import React,{useState , useEffect} from 'react';
import '../App.css';
import { useHistory , Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Project from '../components/ProjectsInvolved';
import { Form , Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios';
import Model from 'react-modal';
import { storage } from '../firebase';
import auth from '../auth';
import Notification from '../components/notification'
// import Header from '../student_profile/studentheader'
// import Saved from '../student_profile/saved'
// import Mycv from '../student_profile/cv'
// import Notification from '../student_profile/notification'
const modalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding                : '20px'
    }
  };
  
  const editProfileModalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding               : '20px',
      width                 : '50%'

    }
  };
Model.setAppElement('#root');

function Profile() {
    const history = useHistory();
    const  [user , setUser] = useState({});
    const [isdataloaded,setisdataloaded] = useState(false);
    const [interested , setInterested] = useState(false);
    const [projects , setProjects] = useState(false);
    const [isEditProfileModelOpen , setIsEditProfileModelOpen] = useState(false);
    const [isNotificationModelOpen , setIsNotificationModelOpen] = useState(false);
    const [isProject1ModelOpen , setIsProject1ModelOpen] = useState(false);
    const [isProject2ModelOpen , setIsProject2ModelOpen] = useState(false);
    const [isProject3ModelOpen , setIsProject3ModelOpen] = useState(false);
    const [islogoutModelOpen , setIslogoutModelOpen] = useState(false);
    const [isUpdating , setIsUpdating] = useState(false);
    const [profileImage , setProfileImage] = useState(null);
    const [currentUser , setCurrentUser] = useState({
                    profile_pic_url: '',
                    reg_no:'',
                    interested_1: '',
                    interested_2: '',
                    interested_3: '',
                    project_1 : '',
                    project_2 : '',
                    project_3 : ''
                });

    useEffect(()=>{
        axios
          .post("http://localhost:5000/student/getStudentData",{token : localStorage.getItem('StudentToken')})
          .then(res => {
              setUser(res.data);
              setCurrentUser(res.data);
              setisdataloaded(true);
              if(user.interested_1 === '' && user.interested_2 === '' && user.interested_3 === ''){
                setInterested(false);
              }else{
                setInterested(true);
              }
              if(user.projects_1 === 0 && user.projects_1 === 0 && user.projects_1 === 0){
                setProjects(false);
              }else{
                setProjects(true);  
              }
              console.log(res.data);
          })
          .catch(err => console.error(err));
    },[]);

    const onSubmit = (e) =>{}

    const formikTwo = useFormik({
        initialValues : currentUser,
        enableReinitialize:true,
        onSubmit
    });

    const formikP1 = useFormik({
        initialValues : {name: '', desc:'', tech:'', link:''},
        enableReinitialize:true,
        onSubmit
    });

    const formikP2 = useFormik({
        initialValues : {name: '', desc:'', tech:'', link:''},
        enableReinitialize:true,
        onSubmit
    });

    const formikP3 = useFormik({
        initialValues : {name: '', desc:'', tech:'', link:''},
        enableReinitialize:true,
        onSubmit
    });




    const updateProfile = (e)=>{
        setIsUpdating(true);
        e.preventDefault();
        try{
            const UploadImage = storage.ref(`StudentProfilePictures/${user.reg_no}`).put(profileImage);
            UploadImage.on('state_changed' ,
            snapshot => {},
            error => {
                console.log(error)
            },
            ()=>storage
            .ref('StudentProfilePictures')
            .child(user.reg_no.toString())
            .getDownloadURL()
            .then(url =>{
                const updatedData = {
                    profile_pic_url: url,
                    reg_no:user.reg_no,
                    interested_1: formikTwo.values.interested_1,
                    interested_2: formikTwo.values.interested_2,
                    interested_3: formikTwo.values.interested_3,
                    project_1 : 0,
                    project_2 : 0,
                    project_3 : 0
                }
                axios
                  .post(`http://localhost:5000/student/update`,{updatedData})
                  .then(res => {
                      console.log(res);
                      setIsUpdating(false);
                      window.location.reload();
                    })
                  .catch(err => console.error(err));
            })
            )
        }catch(e){
            const updatedData = {
                    profile_pic_url: user.profile_pic_url,
                    reg_no: user.reg_no,
                    interested_1: formikTwo.values.interested_1,
                    interested_2: formikTwo.values.interested_2,
                    interested_3: formikTwo.values.interested_3,
                    project_1 : 0,
                    project_2 : 0,
                    project_3 : 0
            }
            axios
                .post(`http://localhost:5000/student/update`,{updatedData})
                .then(res => {
                    console.log(res);
                    setIsUpdating(false);
                    window.location.reload();
                  })
                .catch(err => console.error(err));
        }

    }
    const project1add = (e) =>{
        e.preventDefault();
        const data = {  number : 1 ,reg_no : user.reg_no , name : formikP1.values.name , desc : formikP1.values.desc , tech : formikP1.values.tech , link: formikP1.values.link}
        axios
        .post(`http://localhost:5000/student/addProject`,{data})
                .then(res => {
                    console.log(res);
                    setIsUpdating(false);
                    window.location.reload();
                  })
                .catch(err => console.error(err));
    }

    const project2add = (e) =>{
        e.preventDefault();
        const data = {  number : 2 ,reg_no : user.reg_no, name : formikP2.values.name , desc : formikP2.values.desc , tech : formikP2.values.tech , link: formikP2.values.link}
        axios
        .post(`http://localhost:5000/student/addProject`,{data})
                .then(res => {
                    console.log(res);
                    setIsUpdating(false);
                    window.location.reload();
                  })
                .catch(err => console.error(err));
    }

    const project3add = (e) =>{
        e.preventDefault();
        const data = {  number : 3 ,reg_no : user.reg_no, name : formikP3.values.name , desc : formikP3.values.desc , tech : formikP3.values.tech , link: formikP3.values.link}
        axios
        .post(`http://localhost:5000/student/addProject`,{data})
                .then(res => {
                    console.log(res);
                    setIsUpdating(false);
                    window.location.reload();
                  })
                .catch(err => console.error(err));
    }
    const handleImageChange = (e) => {
        if(e.target.files[0]){
            setProfileImage(e.target.files[0]);
        }
    }

    return(
        <React.Fragment>
        <div className = "profile" style={{minHeight:"91vh"}}>
            <div className = "profile_background">
                <div className="profile-complete-bar">
                    <button className="edit-profile-btn" onClick={()=>setIsEditProfileModelOpen(true)}>edit profile</button>
                    <button className="edit-profile-btn" onClick={()=>setIslogoutModelOpen(true)}>logout</button>
                </div>
                <div className="profile-top">
                    <div>
                        <div className="profile-header">Basic Details</div>
                        <div className="profile-details">{user.name}</div>
                        <div className="profile-details"> {user.reg_no}</div>
                        <div className="profile-details"> G.P.A : {user.current_gpa}</div>
                        <div className="profile-details"> {user.email}</div>
                        <div className="profile-details"> {user.contact}</div>
                    </div>
                    <div className="profile-pic">
                        <img src={user.profile_pic_url} alt="profile-pic" className="profile-pic"/>
                    </div>
                </div>
                <hr/>
                <div className="profile-btns">
                    <Link to={`/selectedAdverts`}><button className="profile-btns-btn">Selected Adverts</button></Link>
                    <button className="profile-btns-btn" onClick={()=>setIsNotificationModelOpen(true)}>Notifications</button>
                </div>
                <div className="profile-middle">
                <div className="profile-header">Interested Areas</div>
                <div hidden={interested}>No data added</div>
                <div className="profile-details">{user.interested_1}</div>
                <div className="profile-details">{user.interested_2}</div>
                <div className="profile-details">{user.interested_3}</div>
                </div>
                <div className="profile-middle">
                <div className="profile-header">Projects Involved</div>
                <div hidden={projects}>No data added</div>
                {(user.projects_1 !== 0 && isdataloaded) ? <Project id = {user.projects_1}/> : <button className="add-project-btn" onClick={()=>setIsProject1ModelOpen(true)}>Add project</button>}
                {(user.projects_2 !== 0 && isdataloaded) ? <Project id = {user.projects_2}/> : <button className="add-project-btn" onClick={()=>setIsProject2ModelOpen(true)}>Add project</button>}
                {(user.projects_3 !== 0 && isdataloaded) ? <Project id = {user.projects_3}/> : <button className="add-project-btn" onClick={()=>setIsProject3ModelOpen(true)}>Add project</button>}
                </div>
                </div>
                
            </div>


            <Model isOpen={isEditProfileModelOpen} style={editProfileModalStyles}>
            <div className="edit-profile-title">Edit Profile</div>
                <Form>
                    <Form.Label>Interested Areas</Form.Label>
                    <Form.Row className="form-row">
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="interested_1" 
                        type="text" 
                        value={formikTwo.values.interested_1} 
                        onChange={formikTwo.handleChange} 
                        onBlur={formikTwo.handleBlur}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="interested_2" 
                        type="text" 
                        value={formikTwo.values.interested_2} 
                        onChange={formikTwo.handleChange} 
                        onBlur={formikTwo.handleBlur}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="interested_3" 
                        type="text" 
                        value={formikTwo.values.interested_3} 
                        onChange={formikTwo.handleChange} 
                        onBlur={formikTwo.handleBlur}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group as={Col}>
                    <Form.Label>Select a Profile Picture</Form.Label>
                    <br/>
                        <input type="file" onChange={handleImageChange}/>
                    </Form.Group>
                    
                    <div className="row editProfile-model-buttons ">
                        <button className="btn btn-primary"onClick={()=>setIsEditProfileModelOpen(false)} disabled={isUpdating}>Cancel</button>
                        <button 
                            className="btn btn-warning" 
                            onClick={updateProfile}
                            disabled={
                                isUpdating
                            }
                            >Update</button>
                            
                    </div>
                    
                </Form>
                <small className="updating-text" hidden={!isUpdating}>Updating ...</small>
            </Model>

            <Model isOpen={isNotificationModelOpen} style={editProfileModalStyles}>
            <div className = "container">
                <div className = "notification-title">Notifications</div>
                <div className="profile-bottom-content">
                        <div className="notify-list">
                                <Notification/>
                        </div>
                </div>
                <div className="editProfile-model-buttons ">
                            <button className="btn btn-primary" onClick={()=>setIsNotificationModelOpen(false)}>Cancel</button>   
                </div>   
            </div>
            
            </Model>
            
            <Model isOpen={isProject1ModelOpen} style={editProfileModalStyles}>
            <div className="edit-profile-title">Add new Project</div>
                <Form>
                    <Form.Label>Project Name</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="name" 
                        type="text" 
                        value={formikP1.values.name} 
                        onChange={formikP1.handleChange} 
                        onBlur={formikP1.handleBlur}/>
                    </Form.Group>

                    <Form.Label>Project Description</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="desc" 
                        type="text" 
                        value={formikP1.values.desc} 
                        onChange={formikP1.handleChange} 
                        onBlur={formikP1.handleBlur}/>
                    </Form.Group>

                    <Form.Label>Technology Stack</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="tech" 
                        type="text" 
                        value={formikP1.values.tech} 
                        onChange={formikP1.handleChange} 
                        onBlur={formikP1.handleBlur}/>
                    </Form.Group>

                    <Form.Label>Link</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="link" 
                        type="text" 
                        value={formikP1.values.link} 
                        onChange={formikP1.handleChange} 
                        onBlur={formikP1.handleBlur}/>
                    </Form.Group>
                    
                    <div className="row editProfile-model-buttons ">
                        <button className="btn btn-primary"onClick={()=>isProject1ModelOpen(false)} disabled={isUpdating}>Cancel</button>
                        <button 
                            className="btn btn-warning" 
                            onClick={project1add}
                            disabled={
                                isUpdating
                            }
                            >ADD</button>      
                    </div>       
                </Form>
                <small className="updating-text" hidden={!isUpdating}>Updating ...</small>
            </Model>

            <Model isOpen={isProject2ModelOpen} style={editProfileModalStyles}>
            <div className="edit-profile-title">Add new Project</div>
                <Form>
                    <Form.Label>Project Name</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="name" 
                        type="text" 
                        value={formikP2.values.name} 
                        onChange={formikP2.handleChange} 
                        onBlur={formikP2.handleBlur}/>
                    </Form.Group>

                    <Form.Label>Project Description</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="desc" 
                        type="text" 
                        value={formikP2.values.desc} 
                        onChange={formikP2.handleChange} 
                        onBlur={formikP2.handleBlur}/>
                    </Form.Group>

                    <Form.Label>Technology Stack</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="tech" 
                        type="text" 
                        value={formikP2.values.tech} 
                        onChange={formikP2.handleChange} 
                        onBlur={formikP2.handleBlur}/>
                    </Form.Group>

                    <Form.Label>Link</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="link" 
                        type="text" 
                        value={formikP2.values.link} 
                        onChange={formikP2.handleChange} 
                        onBlur={formikP2.handleBlur}/>
                    </Form.Group>
                    
                    <div className="row editProfile-model-buttons ">
                        <button className="btn btn-primary"onClick={()=>isProject2ModelOpen(false)} disabled={isUpdating}>Cancel</button>
                        <button 
                            className="btn btn-warning" 
                            onClick={project2add}
                            disabled={
                                isUpdating
                            }
                            >ADD</button>      
                    </div>       
                </Form>
                <small className="updating-text" hidden={!isUpdating}>Updating ...</small>
            </Model>

            <Model isOpen={isProject3ModelOpen} style={editProfileModalStyles}>
            <div className="edit-profile-title">Add new Project</div>
                <Form>
                    <Form.Label>Project Name</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="name" 
                        type="text" 
                        value={formikP3.values.name} 
                        onChange={formikP3.handleChange} 
                        onBlur={formikP3.handleBlur}/>
                    </Form.Group>

                    <Form.Label>Project Description</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="desc" 
                        type="text" 
                        value={formikP3.values.desc} 
                        onChange={formikP3.handleChange} 
                        onBlur={formikP3.handleBlur}/>
                    </Form.Group>

                    <Form.Label>Technology Stack</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="tech" 
                        type="text" 
                        value={formikP3.values.tech} 
                        onChange={formikP3.handleChange} 
                        onBlur={formikP3.handleBlur}/>
                    </Form.Group>

                    <Form.Label>Link</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control 
                        name="link" 
                        type="text" 
                        value={formikP3.values.link} 
                        onChange={formikP3.handleChange} 
                        onBlur={formikP3.handleBlur}/>
                    </Form.Group>
                    
                    <div className="row editProfile-model-buttons ">
                        <button className="btn btn-primary"onClick={()=>isProject3ModelOpen(false)} disabled={isUpdating}>Cancel</button>
                        <button 
                            className="btn btn-warning" 
                            onClick={project3add}
                            disabled={
                                isUpdating
                            }
                            >ADD</button>      
                    </div>       
                </Form>
                <small className="updating-text" hidden={!isUpdating}>Updating ...</small>
            </Model>
            <Model isOpen={islogoutModelOpen} style={modalStyles}>

                <div className="logout-modal-title">Logout</div>
                <div className="logout-modal-text">Do you want to logout ?</div>
                <div className="row logout-model-buttons">
                <button className="btn btn-primary" onClick={()=>setIslogoutModelOpen(false)}>Cancel</button>
                <button className="btn btn-danger" 
                        onClick={
                            ()=>{auth.setAuthenticatedFalse(); history.push('/');}
                            }
                            >Logout</button>
                </div>
                
            </Model>


            {/* <Router>
                <Header/>
                <Switch>
                    <Route exact path="/Mycv" component={Mycv}/>
                    <Route exact path="/Prefer" component={Prefer}/>
                    <Route exact path="/Saved" component={Saved}/>
                    <Route exact path="/Notification" component={Notification}/>
                    <Redirect from="/" to="/Prefer" />
                </Switch>
            </Router> */}
        </React.Fragment>    
        
    )
}

export default Profile
