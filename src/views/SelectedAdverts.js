
import React,{useState , useEffect} from 'react';
import '../App.css';
import PinnedAdvert from '../components/PinnedAdvert'
// import {BrowserRouter as Router , Switch , Route}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Project from '../components/ProjectsInvolved';
import { Form , Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios';
import Model from 'react-modal';
import { storage } from '../firebase';

import AdvertService from '../AdvertService';

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

function SelectedAdverts() {
    return(
        <React.Fragment>
        <div className = "profile" style={{minHeight:"91vh"}}>
            <div className = "profile_background">
                <div className="profile-header">Selected Adverts</div>
                <div className="profile-header">Pinned Adverts</div>
                <div className="pinned-section">
                  {AdvertService.getSavedAdverts().map((advert) =>{
                    console.log(advert);
                          return(
                              <PinnedAdvert key={advert} advert={advert} />
                          );
                      })}
                </div>
            </div>
        </div>
        </React.Fragment>    
        
    )
}

export default SelectedAdverts;