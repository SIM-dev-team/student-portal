import React from 'react'
import {Link} from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const CompanyTooltip = (params) =>{
    return(
        <div className="company-tool-tip"> Compant tool tip
        <div>{params.desc}</div>
        </div>
    )
}
function CompanyListItem(params) {
    return (
        <div>
            <Tippy content={<CompanyTooltip desc={params.company.description}/>} placement='left'>
                <Link to ={`/company/${params.company.id}`}>
                <div className="row company-list-item">
                    <div className="company-list-item-logo">
                        {params.company.logo}
                    </div>
                    <div className="company-list-item-name">
                        {params.company.name}
                    </div>
                </div>
                </Link>
           </Tippy> 
        </div>
    )
}

export default CompanyListItem
