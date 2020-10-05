import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Student.css'
import {ViewModal} from './viewmoreModal'
import {ADVERTS} from './card'


class Saved extends Component {

    constructor(props) {
        super(props);
        this.state ={editModalShow : false}
        this.state = {
            ads: ADVERTS,
            aid: ''
        };
    }

    handleClick = id =>{
        this.setState({
            editModalShow: true,
            
        })
        this.setState({aid: id})

      } 

    render() {
        let editModalClose =() => this.setState({editModalShow: false });

        const menu = this.state.ads.map((ad) => 
            <div key = {ad.id}>
                <div className ="student_card container card mb-3 card">
                    <div className = "row company_information">
                        <div className = "company_image">
                        <img  src = {ad.image} alt="company profile" style = {{height:'3cm' , width:'3cm'}}/>
                        </div>
                        <div className = "company_details">
                            <h5> {ad.name}</h5>
                            <a href = "">{ad.email}</a>

                        </div>
                        <div className = "company_buttons ">
                            <button className = "button_link" onClick={() => this.handleClick(ad.id)} >
                                View More
                            </button>
                            <button className = "button_link">
                                Save/Unsave
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
            <React.Fragment>
            <div className="scroller container">
                <h5>Saved Adverts</h5>
                <div className="advert_card row ">
                         {menu}
                   
                </div>
            </div>
            <ViewModal
            show = {this.state.editModalShow}
            onHide = {editModalClose}
            aid = {this.state.aid}
            />

            </React.Fragment>
        );
    }
}

export default Saved