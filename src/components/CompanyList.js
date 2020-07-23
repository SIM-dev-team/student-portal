import React , {useState , useEffect} from 'react'
import CompanyListItem from './CompanyListItem';
import '../App.css';

const compList = [
    {   
        id : 1,
        logo : 'A',
        name : 'A company',
        description : 'A campany description'
    },
    {
        id : 2,
        logo : 'A',
        name : 'A company',
        description : 'A campany description'
    },
    {
        id : 3,
        logo : 'A',
        name : 'A company',
        description : 'A campany description'
    },
    {
        id : 4,
        logo : 'A',
        name : 'A company',
        description : 'A campany description'
    },
    {
        id : 5,
        logo : 'A',
        name : 'A company',
        description : 'A campany description'
    },
    {   
        id : 6,
        logo : 'A',
        name : 'A company',
        description : 'A campany description'
    },
    {
        id : 7,
        logo : 'A',
        name : 'A company',
        description : 'A campany description'
    },
    {
        id : 8,
        logo : 'A',
        name : 'A company',
        description : 'A campany description'
    },
    {
        id : 9,
        logo : 'A',
        name : 'A company',
        description : 'A campany description'
    },
    {
        id : 10,
        logo : 'A',
        name : 'A company',
        description : 'A campany description'
    
    }
]
function CompanyList() {
    const [companyList , setCompanyList] = useState([]);

    useEffect(()=>{
        setCompanyList(compList);
    },[])
    return (
        <div className="company-section">
            <div className="company-list-top-bar">
                <div className="company-search">
                        <input type="text" name="" className="company-list-searchbox" placeholder="Search for a company..."/>
                </div>
            </div>
            {companyList.map((company) =>{
                return(
                    <CompanyListItem key={company.id} company={company} />
                );
            })}
        </div>
    )
}

export default CompanyList
