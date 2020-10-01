import React from 'react'
import {Link} from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const CompanyTooltip = (params) =>{
    return(
        <div className="company-tool-tip">
        <div>{params.company.comp_name}</div>
        <div>{params.company.comp_website}</div>
        <div>{params.company.description}</div>
        </div>
    )
}
function CompanyListItem(params) {
    return (
        <div>
            <Tippy content={<CompanyTooltip company={params.company}/>} placement='left'>
                <Link to ={`/company/${params.company.comp_id}`}>
                <div className="row company-list-item">
                    <div >
                        <img src={params.company.profile_pic_url} className="company-list-item-logo" alt="logo"/>
                    </div>
                    <div className="company-list-item-name">
                        {params.company.comp_name}
                    </div>
                </div>
                </Link>
           </Tippy> 
        </div>
    )
}

export default CompanyListItem
