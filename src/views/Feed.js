import React, {useState , useEffect} from 'react'
import FeedAdvert from '../components/FeedAdvert'
import axios from 'axios'

const adList = [
    {   
        id : 1,
        comp_name : 'A company',
        comp_website : 'www.testwebsite.com',
        internship_position : 'Software Engineering',
        comp_logo : 'A',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
    },
    {   
        id : 2,
        comp_name : 'A company',
        comp_website : 'www.testwebsite.com',
        internship_position : 'Software Engineering',
        comp_logo : 'A',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
    },
    {   
        id : 3,
        comp_name : 'A company',
        comp_website : 'www.testwebsite.com',
        internship_position : 'Software Engineering',
        comp_logo : 'A',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
    },
    {   
        id : 4,
        comp_name : 'A company',
        comp_website : 'www.testwebsite.com',
        internship_position : 'Software Engineering',
        comp_logo : 'A',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
    },
    {   
        id : 5,
        comp_name : 'A company',
        comp_website : 'www.testwebsite.com',
        internship_position : 'Software Engineering',
        comp_logo : 'A',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus ipsam consequuntur aliquid distinctio voluptatibus repellendus numquam quibusdam laborum amet facilis, iste, ipsum id atque perspiciatis, nemo ratione aperiam porro!'
    },
   
]

function Feed() {

    const [advertList , setAdvertList] = useState([]);

    useEffect(()=>{
        axios
          .get("http://localhost:5000/advert/getAll")
          .then(res => {
            setAdvertList(res.data);
          })
          .catch(err => console.error(err));
    },[])
    return (
        <React.Fragment>
            <div className="feed-home" style={{height:"91vh"}}>
                <div className="feed-body">
                    {advertList.map((advert) =>{
                        return(
                            <FeedAdvert key={advert.ad_id} advert={advert} />
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Feed
