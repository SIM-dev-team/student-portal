import React,{useState , useEffect} from 'react'
import '../App.css';
import axios from 'axios';
import AdvertService from '../AdvertService';
import Model from 'react-modal';
import { Form , Col } from 'react-bootstrap';
import { storage } from '../firebase';

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

function Advert({match}) {

    const  [advert , setAdvert] = useState({});
    const [saved , setSaved] = useState();
    const [canApply , setCanApply] = useState();
    const [applied , setApplied] = useState();
    const [isModelOpen , setIsModelOpen] = useState(false);
    const [isUploading , setIsUploading] = useState(false);
    const [cv , setCv] = useState(null);

    useEffect(()=>{
        axios
          .get("http://localhost:5000/advert/get/" + match.params.id)
          .then(res => {
              console.log(res.data)
              setAdvert(res.data);
          })
          .catch(err => console.error(err));
    },[match.params.id]);


    useEffect(()=>{setSaved(AdvertService.isSaved(parseInt(match.params.id)))},[]);
    useEffect(()=>{setCanApply(AdvertService.canAppply())},[]);
    useEffect(()=>{
        setApplied(AdvertService.isApplied(match.params.id));
    },[])


    const save = () => {
        console.log('saved');
        AdvertService.saveAdvert(parseInt(match.params.id));
        setSaved(true);
    }
    const unsave = () => {
        console.log('saved');
        AdvertService.removeSavedAdvert(parseInt(match.params.id));
        setSaved(false);
    }

    const handleImageChange = (e) => {
        if(e.target.files[0]){
            setCv(e.target.files[0]);
        }
    }

    const getRandomString = length => {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    const apply = (e)=>{
        setIsUploading(true);
        e.preventDefault();
        try{
            const id = getRandomString(20);
            const UploadCv = storage.ref(`StudentAdvertCvs/${id}`).put(cv);
            UploadCv.on('state_changed' ,
            snapshot => {},
            error => {
                console.log(error)
            },
            ()=>storage
            .ref('StudentAdvertCvs')
            .child(id.toString())
            .getDownloadURL()
            .then(url =>{
                const Data = {
                    token : localStorage.getItem('StudentToken'),
                    advert : match.params.id,
                    link : url
                }
                console.log(Data);
                axios
                  .post(`http://localhost:5000/advert/Apply`,{Data})
                  .then(res => {
                        axios
                        .post("http://localhost:5000/advert/getAppliedAdverts",{token : localStorage.getItem('StudentToken')})
                        .then(resp => {
                            console.log(resp.data);
                            AdvertService.saveAppliedAdverts(resp.data);
                        })
                        .catch(errp => console.error(errp));
                        setIsUploading(false);
                        // window.location.reload();
                    })
                  .catch(err => console.error(err));
            })
            )
        }catch(e){
        }

    }

    return (
        <React.Fragment>
            <div className="feed-home" style={{minHeight:"90vh"}}>
                <div className="feed-content">
                    <div className="row advert-top">
                        <div className="advert-top-left">
                            <div className="row">
                            <div>
                                <img src={advert.profile_pic_url} alt="logo" className="adevrt-company-logo"/>
                                </div>
                            <div className="advert-left-details">
                                <div className="advert-company-name">{advert.comp_name}</div>
                                <div className="advert-company-website">{advert.comp_website}</div>
                            </div>
                            </div>
                        </div>
                        <div className="advert-company-right">
                            {saved ? <button onClick={unsave} className="unpin-button">Unpin</button> :<button onClick={save} className="pin-button">Pin</button>}
                            {applied ? <button className="unpin-button">Applied</button> :<button className="pin-button" onClick={()=>setIsModelOpen(true)}>Apply</button>}
                        </div>
                    </div>
                    <div className="advert-internship-position-title">{advert.intership_position}</div>
                    <div className="advert-internship-position-desc">{advert.position_desc}</div>
                    <div className="advert-internship-position-desc">{advert.job_desc}</div>
                    <div className="advert-internship-position-desc">{advert.knowledge_skills}</div>
                    <div className="row">
                    <div className="advert-internship-position-desc"><span className="applicants">No of positions :</span>{advert.no_of_positions}</div>
                    <div className="advert-internship-position-desc"><span className="applicants">No of applicants :</span>{advert.no_of_applicants}</div>
                    </div>
                    <div>
                        <img src={advert.attachment_url} className="advert-image" alt="attachment"/>
                    </div>
                </div>
            </div>

            <Model isOpen={isModelOpen} style={editProfileModalStyles}>
            <div className="apply-for-advert-title">Apply for an advert</div>
                {!canApply ? 
                <Form> 
                    <Form.Label>You have already applied for three adverts !!!</Form.Label>
                    <div className="row editProfile-model-buttons ">
                        <button className="btn btn-primary"onClick={()=>setIsModelOpen(false)}>Cancel</button>      
                    </div> 
                </Form>  :
                <Form>
                    <Form.Label>Note : you can apply for upto three (3) adverts.You cannot change applied adverts after applying !!!</Form.Label> 
                    <Form.Group as={Col}>
                    <Form.Label>Select Your Cv ={">"}</Form.Label>
                        <input type="file" onChange={handleImageChange}/>
                    </Form.Group>
                    
                    <div className="row editProfile-model-buttons ">
                        <button className="btn btn-primary"onClick={()=>setIsModelOpen(false)} disabled={isUploading}>Cancel</button>
                        <button 
                            className="btn btn-warning" 
                            onClick={apply}
                            disabled={
                                isUploading
                            }
                            >Apply</button>
                            
                    </div> 
                </Form>}
                <small className="updating-text" hidden={!isUploading}>Uploading ...</small>
            </Model>
        </React.Fragment>
    )
}

export default Advert