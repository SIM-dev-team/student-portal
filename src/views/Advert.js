import React,{useState , useEffect} from 'react'
import '../App.css';

const ad = {   
    id : 1,
    comp_name : 'A company',
    comp_website : 'www.testwebsite.com',
    internship_position : 'Software Engineering',
    comp_logo : 'A',
    no_of_positions : 5,
    no_of_applicants : 3,
    pic_url : '' ,
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
}
function Advert({match}) {

    const  [advert , setAdvert] = useState({});

    useEffect(()=>{
        setAdvert(ad);
    },[]);

    return (
        <React.Fragment>
            <div className="feed-home" style={{minHeight:"90vh"}}>
                <div className="feed-content">
                    <div className="row advert-top">
                        <div className="advert-top-left">
                            <div className="row">
                            <div className="adevrt-company-logo">{advert.comp_logo}</div>
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
                    <div className="advert-internship-position-desc">{advert.description}</div>
                    <div className="advert-image">
                        image
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Advert