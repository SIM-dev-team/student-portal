import React , {Component} from 'react'
import MUIDataTable from 'mui-datatables'
import 'bootstrap/dist/css/bootstrap.css';
import './Student.css'
import {ADVERTS} from './card'


class Prefer extends Component{
    constructor(props){
      super(props);
      this.state = {
        ads: ADVERTS,
    };
 
    }
    
    render(){
        let preferid = this.props.aid;
        let array = [];

        //for(let i = 0; array.length < 5; i++){
        //    array.push(preferid);
        //}

        //for(let i = 0; i< array.length; i++){
         //   if (array)
       // }
        
        const menu = this.state.ads.filter(function (ad) { 
            return ad.id === preferid; 
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
            <div className = "container scroller">
                <h4>preference will be displayed here as card </h4>
                <div className="advert_card row ">
                         {menu}
                   
                </div>
                   
            </div>
        )
        
        
    }
}

export default Prefer