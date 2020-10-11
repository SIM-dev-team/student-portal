import React, {useState , useEffect} from 'react'
import FeedAdvert from '../components/FeedAdvert'
import axios from 'axios';

function Feed() {

    const [advertList , setAdvertList] = useState([]);
    const [search , setSearch] = useState('');
    const [filteredAdvertsList , setFilteredAdvertsList] = useState([]);

    useEffect(()=>{
        const filter = advertList.filter(advert => {
          return (advert.position_desc.toLowerCase().includes(search.toLowerCase()) || advert.job_desc.toLowerCase().includes(search.toLowerCase()));
        })
        setFilteredAdvertsList(filter);
    },[search , advertList])

    useEffect(()=>{
        axios
          .get("http://localhost:5000/advert/getAllApproved")
          .then(res => {
              console.log(res.data)
              setAdvertList(res.data);
          })
          .catch(err => console.error(err));
    },[])
    return (
        <React.Fragment>
            <div className="feed-home" style={{minHeight:"91vh"}}>
                <div className="searchbar">
                <input 
                            type="text" 
                            name="" 
                            className="company-list-searchbox" 
                            placeholder="Search for a keyword..."
                            onChange={(e)=>{
                                setSearch(e.target.value);
                            }}/>
                </div>
                <div className="feed-body">
                    {filteredAdvertsList.map((advert) =>{
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
