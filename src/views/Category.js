import React from 'react'

function Category({match}) {
    return (
        <React.Fragment>
            <div className="feed-home" style={{minHeight:"90vh"}}>
                   {match.params.id} 
            </div>
        </React.Fragment>
    )
}

export default Category