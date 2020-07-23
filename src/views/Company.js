import React from 'react'

function Company({match}) {
    return (
        <React.Fragment>
            <div className="feed-home" style={{height:"91vh"}}>
                   {match.params.id} 
            </div>
        </React.Fragment>
    )
}

export default Company
