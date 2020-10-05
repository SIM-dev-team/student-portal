import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Modal, Button, Form} from 'react-bootstrap';
import {ADVERTS} from './card'

export class ViewModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            ads: ADVERTS,
            aid: ''
        };
    }

    handleClick = id =>{
        this.setState({aid: id})

      } 


    render(){
        let id = this.props.aid;
        const menu = this.state.ads.filter(function (ad) { 
            return ad.id === id; 
        }).map(function (ad) { 
            return (
                <div className ="container">
                    <div className = "row company_information">
                        <div className = "company_image">
                        <img  src = {ad.image} alt="company profile" style = {{height:'3cm' , width:'3cm'}}/>
                        </div>
                        <div className = "company_details">
                            <h5> {ad.name}</h5>
                            <a href = "">{ad.email}</a>

                        </div>
                    </div>
                
                    <div className ="card-body">
                        <h5 className ="card-title">{ad.jobrole}</h5>
                        <p className ="card-text">{ad.description}</p>
                    </div>
                </div>
            );
        }) 
        
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className = "container">
                    {menu}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div class="row">
                    <div className="col-sm-6 text-left">
                    <Link to="/Prefer"> <Button className="btn btn-primary" onClick={() => this.handleClick(id)}>preference</Button></Link>
                    </div>
                    <div className="col-sm-6 text-right">
                    <Button className="btn btn-secondary" onClick={this.props.onHide} >Close</Button>
                    </div>
                </div>
            </Modal.Footer>
            </Modal>
        );
    }
}