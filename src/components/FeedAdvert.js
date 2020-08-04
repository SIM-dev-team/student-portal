import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function FeedAdvert(params) {
    return (
        <div>
           <div className="feed-content">
                <div className="row short-advert-top-row">
                    <div className="short-advert-top-row-left">
                    <div>
                        <img src={params.advert.profile_pic_url} className="short-advert-company-logo" alt="logo"/>
                    </div>
                    <div className="short-advert-company-details">
                        <div className="short-advert-company-name">{params.advert.comp_name}</div>
                        <div className="short-advert-company-website">{params.advert.comp_website}</div>
                    </div>
                    </div>
                    <div className="short-advert-top-row-right">
                        <Link to={`/advert/${params.advert.ad_id}`}><button>View more</button></Link>
                        <button>Save</button>
                    </div>
                </div>
                <hr/>
                <div className="short-advert-posisiton-name">{params.advert.internship_position}</div>
            <div className="short-advert-posisiton-desc-title">Short Description about position</div>
            <div className="short-advert-position-decs-content">{params.advert.position_desc}</div>
           </div>
        </div>
    )
}

export default FeedAdvert
