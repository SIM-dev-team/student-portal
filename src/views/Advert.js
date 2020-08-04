import React,{useState , useEffect} from 'react'
import '../App.css';
import axios from 'axios';

// const ad = {   
//     id : 1,
//     comp_name : 'A company',
//     comp_website : 'www.testwebsite.com',
//     internship_position : 'Software Engineering',
//     comp_logo : 'A',
//     no_of_positions : 5,
//     no_of_applicants : 3,
//     pic_url : '' ,
//     description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
// }
function Advert({match}) {

    const  [advert , setAdvert] = useState({});

    useEffect(()=>{
        axios
          .get("http://localhost:5000/advert/get/" + match.params.id)
          .then(res => {
              console.log(res.data)
              setAdvert(res.data);
          })
          .catch(err => console.error(err));
    },[match.params.id]);

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
                            <button>save</button>
                            <button>select</button>
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
        </React.Fragment>
    )
}

export default Advert