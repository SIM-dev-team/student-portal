import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import FeedAdvert from '../components/FeedAdvert';
import axios from 'axios';

// const comp = {   
//     id : 1,
//     comp_name : 'A company',
//     comp_website : 'www.testwebsite.com',
//     comp_logo : 'A',
//     pic_url : '' ,
//     description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
// }

// const adList = [
//     {   
//         id : 1,
//         comp_name : 'A company',
//         comp_website : 'www.testwebsite.com',
//         internship_position : 'Software Engineering',
//         comp_logo : 'A',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
//     },
//     {   
//         id : 2,
//         comp_name : 'A company',
//         comp_website : 'www.testwebsite.com',
//         internship_position : 'Software Engineering',
//         comp_logo : 'A',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
//     },
//     {   
//         id : 3,
//         comp_name : 'A company',
//         comp_website : 'www.testwebsite.com',
//         internship_position : 'Software Engineering',
//         comp_logo : 'A',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
//     },
//     {   
//         id : 4,
//         comp_name : 'A company',
//         comp_website : 'www.testwebsite.com',
//         internship_position : 'Software Engineering',
//         comp_logo : 'A',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
//     },
//     {   
//         id : 5,
//         comp_name : 'A company',
//         comp_website : 'www.testwebsite.com',
//         internship_position : 'Software Engineering',
//         comp_logo : 'A',
//         description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
//     },
   
// ]

function Company({match}) {

    const [company , setcompany] = useState({});
    const [advertList , setAdvertList] = useState([]);
    const [isAdvertsLoaded , setIsAdvertsLoaded] = useState(false);

    useEffect(()=>{
        axios
          .get("http://localhost:5000/advert/getAdvertsByCompanyId/" + match.params.id)
          .then(res => {
            //   console.log(res.data);
              setAdvertList(res.data);
              setIsAdvertsLoaded(true)
          })
          .catch(err => {
              console.error(err);
              setIsAdvertsLoaded(true)
            });
    },[match.params.id])

    useEffect(()=>{
        axios
          .get("http://localhost:5000/company/getCompany/" + match.params.id)
          .then(res => {
            //   console.log(res.data);
              setcompany(res.data);
            })
          .catch(err => console.error(err));
    },[match.params.id]);

    return (
        <React.Fragment>
            <div className="feed-home" style={{minHeight:"90vh"}}>
                <div className="feed-content">
                    <div className="row company-data">
                        <div className="col-md-3 compant-logo">
                            <img src={company.profile_pic_url} className="company-logo" alt="logo"/>
                        </div>
                        <div className="col company-description-box">
                        <div className="company-name">{company.comp_name}</div>
                        <div className="company-description">{company.description}</div>
                        <div className="company-website">{company.comp_website}</div>
                        </div>
                    </div> 
                </div>
                <div className="no-adverts-to-show" hidden={isAdvertsLoaded && advertList.length !== 0}>No Adverts to show</div>
                {advertList.map((advert) =>{
                        return(
                            <FeedAdvert key={advert.ad_id} advert={advert} />
                        );
                    })}
            </div>
        </React.Fragment>
    )
}

export default Company
