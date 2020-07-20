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
        const menu = this.state.ads.map((ad) => {
            return (
                <div key = {ad.id} className ="student_card card mb-3 card">
                    <div className = "row company_information">
                        <div className = "company_image">
                        <img  src = {ad.image} alt="Card image cap" style = {{height:'3cm' , width:'3cm'}}/>
                        </div>
                        <div classname = "company_details">
                            <h5> {ad.name}</h5>
                            <a>{ad.email}</a>
                        </div>
                        <div className = "company_buttons ">
                            <button className = "button_link">
                                Saved
                            </button>
                            <button className = "button_link">
                                Notifications
                            </button>
                        </div>
                    </div>
                
                    <div className ="card-body">
                        <h5 className ="card-title">{ad.jobrole}</h5>
                        <p className ="card-text">{ad.description}</p>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Saved