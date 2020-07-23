import React , {useState , useEffect} from 'react'
import CompanyListItem from './CompanyListItem';
import '../App.css';

const compList = [
    {   
        id : 1,
        logo : 'A',
        name : 'A company',
        description : 'A company description'
    },
    {
        id : 2,
        logo : 'B',
        name : 'B company',
        description : 'B company description'
    },
    {
        id : 3,
        logo : 'C',
        name : 'C company',
        description : 'C company description'
    },
    {
        id : 4,
        logo : 'D',
        name : 'D company',
        description : 'D company description'
    },
    {
        id : 5,
        logo : 'E',
        name : 'E company',
        description : 'E company description'
    },
    {   
        id : 6,
        logo : 'F',
        name : 'F company',
        description : 'F company description'
    },
    {
        id : 7,
        logo : 'G',
        name : 'G company',
        description : 'G company description'
    },
    {
        id : 8,
        logo : 'I',
        name : 'I company',
        description : 'I company description'
    },
    {
        id : 9,
        logo : 'J',
        name : 'J company',
        description : 'J company description'
    },
    {
        id : 10,
        logo : 'K',
        name : 'K company',
        description : 'K company description'
    
    }
]
function CompanyList() {
    const [companyList , setCompanyList] = useState([]);
    const [search , setSearch] = useState('');
    const [filteredCountriesList , setFilteredCountriesList] = useState([]);

    useEffect(()=>{
        setCompanyList(compList);
    },[])

    useEffect(()=>{
        const filter = companyList.filter(company => {
          return company.name.toLowerCase().includes(search.toLowerCase());
        })
        setFilteredCountriesList(filter);
    },[search , companyList])

    return (
        <div className="company-section">
            <div className="company-list-top-bar">
                <div className="company-search">
                        <input 
                            type="text" 
                            name="" 
                            className="company-list-searchbox" 
                            placeholder="Search for a company..."
                            onChange={(e)=>{
                                setSearch(e.target.value);
                            }}/>
                </div>
            </div>
            {filteredCountriesList.map((company) =>{
                return(
                    <CompanyListItem key={company.id} company={company} />
                );
            })}
        </div>
    )
}

export default CompanyList
