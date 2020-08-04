import React , {Component} from 'react'
import MUIDataTable from 'mui-datatables'
import {CVModal} from './cvModal'
import 'bootstrap/dist/css/bootstrap.css';
import './Student.css'


const columns = [
    'Uploaded CVs',
    {
      Name: 'edit',
      customBodyRenderLite: (dataIndex) => {
        return <button className="btn btn-primary">Edit</button>
      },
    },
    {
        Name: 'delete',
        customBodyRenderLite: (dataIndex) => {
          return <button className="btn btn-primary">Delete</button>
        },
      },
  ]

  

  const options = {
    filterType: 'checkbox',
    responsive: 'vertical',
  }

class Mycv extends Component{
    constructor(props){
      super(props);
      this.state ={uploadModalShow : false}
    }
    
    render(){
      let uploadModalClose =() => this.setState({uploadModalShow: false });
        return(
          <>
            <div className = "my_cv container">
                <h1 >My CV Collection</h1>
                <div className = " container">
                    <MUIDataTable
                        columns={columns}
                        options={{
                        options,
                        download : true,
                        delete: true,
                        print: true,
                        rowsPerPage: 7,
                        rowsPerPageOptions: false,
                        }}
                        /> 
                </div>
                <div className = "container row">
                <button  className="cv_button" onClick={()=> this.setState({uploadModalShow: true})} >
                    Upload File
                </button>
                </div>
            </div>
            <CVModal
            show = {this.state.uploadModalShow}
            onHide = {uploadModalClose}
            />
          </>
        )
        
        
    }
}

export default Mycv