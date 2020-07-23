import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Student.css'
import {ADVERTS} from './card'


class Saved extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            ads: ADVERTS
        };
    }

    render() {
        const menu = this.state.ads.map((ad) => 
            <div key = {ad.id}>
                <div className ="student_card container card mb-3 card">
                    <div className = "row company_information">
                        <div className = "company_image">
                        <img  src = {ad.image} alt="company profile" style = {{height:'3cm' , width:'3cm'}}/>
                        </div>
                        <div className = "company_details">
                            <h5> {ad.name}</h5>
                            <a href>{ad.email}</a>
                        </div>
                        <div className = "company_buttons ">
                            <button className = "button_link">
                                View More
                            </button>
                            <button className = "button_link">
                                Saved
                            </button>
                        </div>
                    </div>
                
                    <div className ="card-body">
                        <h5 className ="card-title">{ad.jobrole}</h5>
                        <p className ="card-text">{ad.description}</p>
                    </div>


                </div>
            </div>
        );

        return (
            <div className="scroller container">
                <h5>Saved Adverts</h5>
                <div className="advert_card row ">
                         {menu}
                   
                </div>
            </div>
        );
    }
}

export default Saved