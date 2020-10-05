import React from 'react'
import '../App.css'

function Project(params) {
    return (
        <div>
           <div className="project">
                <div className="project-name">project name</div> 
                <div className="project-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda accusantium voluptatum eaque consequatur ad, architecto voluptates deserunt quae, sapiente mollitia nemo sint voluptas deleniti non excepturi doloremque explicabo pariatur necessitatibus.</div>
                <div className="project-tech">Java | Spring</div>
                <div className="project-link">Link</div>
           </div>
        </div>
    )
}

export default Project