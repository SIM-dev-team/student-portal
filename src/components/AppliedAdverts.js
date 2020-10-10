import React,{useEffect, useState}  from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import AdvertService from '../AdvertService';
import axios from 'axios';

function AppliedAdvert(params) {

    const [advert , setAdvert] = useState([]);
    const [advertLink , setAdvertLink] = useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:5000/advert/get/" + params.advert)
        .then(res => {
            console.log(res.data)
            setAdvert(res.data);
        })
        .catch(err => console.error(err));
    },[]);

    useEffect(()=>{
        const x = AdvertService.getAppliedAdvert(params.advert);
        setAdvertLink(x);
    },[]);

    return (
        <div>
           <div className="feed-content">
                <div className="row short-advert-top-row">
                    <div className="short-advert-top-row-left">
                    <div>
                        <img src={advert.profile_pic_url} className="short-advert-company-logo" alt="logo"/>
                    </div>
                    <div className="short-advert-company-details">
                        <div className="short-advert-company-name">{advert.comp_name}</div>
                        <div className="short-advert-company-website">{advert.comp_website}</div>
                    </div>
                    </div>
                    <div className="short-advert-top-row-right">
                        <Link to={`/advert/${advert.ad_id}`}><button className="pin-button">View more</button></Link>
                        <a href = {advertLink} target = "_blank"><button className="view-cv-button">View Cv</button></a>
                    </div>
                </div>
                <hr/>
                <div className="short-advert-posisiton-name">{advert.internship_position}</div>
            <div className="short-advert-posisiton-desc-title">Short Description about position</div>
            <div className="short-advert-position-decs-content">{advert.position_desc}</div>
           </div>
        </div>
    )
}

export default AppliedAdvert