import React from 'react'
import { MDBDataTable } from 'mdbreact';


import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './dashboard.css'

const Dashboard = () => {
  const reports = {
    columns: [
      {
        label: 'RbmAgent',
        field: 'RbmAgent',
        sort: 'asc',
        width: 150
      },
      {
        label: 'NickName',
        field: 'NickName',
        sort: 'asc',
        width: 270
      },
      {
        label: 'date',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'status',
        field: 'status',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        RbmAgent: 'Tiger Nixon',
        NickName: 'System Architect',
        date: 'Edinburgh',
        status: 'fail',
      
      },
      {
        RbmAgent: 'Garrett Winters',
        NickName: 'Accountant',
        date: 'Tokyo',
        status: 'success',

        
      },
      {
        RbmAgent: 'Ashton Cox',
        NickName: 'Junior Technical Author',
        date: 'San Francisco',
        status: 'fail',
       
      },
      {
        RbmAgent: 'Cedric Kelly',
        NickName: 'Senior Javascript Developer',
        date: 'Edinburgh',
        status: '22',
      
      },
      {
        RbmAgent: 'Airi Satou',
        NickName: 'Accountant',
        date: 'Tokyo',
        status: '33',
        
      }
     
    
    ]
  };

  const reportstel = {
    columns: [
      {
        label: 'Telco',
        field: 'Telco',
        sort: 'asc',
        width: 150
      },
      {
        label: 'status',
        field: 'status',
        sort: 'asc',
        width: 270
      },
      {
        label: 'date',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Remark',
        field: 'Remark',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        Telco:'Airtel',
        status: 'Rejected',

        date: '01-01-2023',
        Remark:'*'
      },
     
     
      {
        Telco:'BSNL,IND',
        status: 'Approved',

        date: '01-01-2023',
        Remark:'*'
      
      },
      {
        Telco:'Jio',
        status: 'Requested',

        date: '01-01-2023',
        Remark:'*'
      }
     
    
    ]
  };
  const reportstest = {
    columns: [
     
      {
        label: 'mobilenumber',
        field: 'mobilenumber',
        sort: 'asc',
        width: 100
      },
      {
        label: 'status',
        field: 'status',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        mobilenumber: '919705234523',
       
        status: '22',
      },
      {
        mobilenumber: '919705234523',
       
        status: '22',

        
      },
      {
        mobilenumber: '919705234523',
       
        status: '22',
     
       
      },
      {
        mobilenumber: '919705234523',
       
        status: '22',
      
      }
     
    
    ]
  };
  
  return (
    <>
    
    <Sidebar/>
  
  <Header />
    

    <div  className='countct'>
      <h4 className='titledash'>Dashboard</h4>
      <div className='first-card'>
        <div className='ban-card1'>
              <h3>Total Campaigns</h3>
              <h2>464</h2>

        </div>
        <div className='ban-card2'>
        <h3>Sent</h3>
              <h2>29.5</h2>
        </div>
        <div className='ban-card3'>

        <h3>Delivered</h3>
              <h2>43M</h2>
        </div>
          <div className='ban-card4'>
          <h3>Read</h3>
              <h2>9.3M</h2>
          </div>
      </div>

      <div className='second-card'>
        <div className='left-card'>
        <h3>Read</h3>
        <hr></hr>

        </div>
        <div className='right-card'>
        <h3>Delivered</h3>
        <hr></hr>

        </div>
       
      </div>
      <div className='third-card'>
      <div className='left-card'>
        <h3>Agent Details</h3>
        <hr></hr>
        <h6>MOBILEMASALA <span className='text-success'>Approved</span></h6>
        <MDBDataTable
  striped
  bordered
  small
  // <button onclick="Export()" className="rbtn">Export</button> 
  responsive
  data={reportstel}
  className="tablecont"
/>

        </div>
        <div className='right-card'>
        <h3>Tested Devices</h3>
        <hr style={{color:'grey'}}></hr>
        <MDBDataTable
  striped
  bordered
  small
  // <button onclick="Export()" className="rbtn">Export</button> 
  responsive
  data={reportstest}
  className="tablecont"
/>

        </div>
      </div>
      <div className='fourth-card'>
      <div className='one-card'>
        <h3>Campaigns</h3>
        <hr></hr>


      

<MDBDataTable
  striped
  bordered
  small
  // <button onclick="Export()" className="rbtn">Export</button> 
  responsive
  data={reports}
  className="tablecont"
/>


        </div>
      </div>
    </div>
    
    
</>
  )
}

export default Dashboard