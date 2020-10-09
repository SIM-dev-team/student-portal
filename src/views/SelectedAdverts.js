
import React from 'react';
import '../App.css';
import PinnedAdvert from '../components/PinnedAdvert'
import AppliedAdvert from '../components/AppliedAdverts'
import 'bootstrap/dist/css/bootstrap.css';

import AdvertService from '../AdvertService';

function SelectedAdverts() {
    return(
        <React.Fragment>
        <div className = "profile" style={{minHeight:"91vh"}}>
            <div className = "profile_background" style={{minHeight:"70vh"}}>
                <div className="profile-saved-advert-header">Applied Adverts</div>
                <div className="pinned-section">
                  {AdvertService.getAppliedAdverts().map((advert) =>{
                          return(
                              <AppliedAdvert key={advert.a_id} advert={advert.a_id} />
                          );
                      })}
                </div>
                <div className="profile-saved-advert-header">Pinned Adverts</div>
                <div className="pinned-section">
                  {AdvertService.getSavedAdverts().map((advert) =>{
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