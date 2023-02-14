import React from 'react'
import { MDBDataTable } from 'mdbreact';


import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Delchart from '../Chart/Delchart';
import Readchart from '../Chart/Readchart';
import './dashboard.css'



const Dashboard = () => {
  // var CanvasJS = CanvasJSReact.CanvasJS;
  // var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
        Telco: 'Airtel',
        status: 'Rejected',

        date: '01-01-2023',
        Remark: '*'
      },


      {
        Telco: 'BSNL,IND',
        status: 'Approved',

        date: '01-01-2023',
        Remark: '*'

      },
      {
        Telco: 'Jio',
        status: 'Requested',

        date: '01-01-2023',
        Remark: '*'
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


      },
      {
        mobilenumber: '919705234523',

        status: '22',

      }

    ]
  };

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div className='countct'>

          <h4 className='titledash'>Dashboard</h4>
          <div className='first-card'>
            <div className='ban-card1'>
              <h5 className='dashtitle'>Total Campaigns</h5>
              <h4 className='dashtitle'>464</h4>

            </div>
            <div className='ban-card2'>
              <h5 className='dashtitle'>Sent</h5>
              <h4 className='dashtitle'>29.5</h4>
            </div>
            <div className='ban-card3'>

              <h5 className='dashtitle'>Delivered</h5>
              <h4 className='dashtitle' >43M</h4>
            </div>
            <div className='ban-card4'>
              <h5 className='dashtitle'>Read</h5>
              <h4 className='dashtitle'>9.3M</h4>
            </div>
          </div>

          <div className='second-card'>
            <div className='left-card'>
              <h5>Read</h5>
              <hr></hr>
              <Readchart />
              {/* <Delchart/> */}
            </div>
            <div className='right-card'>
              <h5>Delivered</h5>
              <hr></hr>
              {/* <Bar data={graphdata}/> */}
              <Delchart />
            </div>

          </div>
          <div className='third-card'>
            <div className='left-card'>
              <h5>Agent Details</h5>
              <hr></hr>
              <h6>MOBILEMASALA <span className='text-success'>Approved</span></h6>
              <MDBDataTable
                striped

                small
                // <button onclick="Export()" className="rbtn">Export</button> 
                responsive
                noBottomColumns
                data={reportstel}
                className="tablecont"
              />

            </div>
            <div className='right-card'>
              {/* <div className='d-flex flex-row'> */}
              <button type="submit" id="button" className="btn btn-gradient-primary mr-2" name="set" >Invite Tester</button>
              <h5>Tested Devices</h5>

              <hr style={{ color: 'grey' }}></hr>
              <MDBDataTable entries={5} responsive noBottomColumns data={reportstest} className="tablecont" />

              <div className="more">
                <a href="/Devicedetails" style={{ color: '#763B75' }}>More..</a>
              </div>

            </div>
          </div>
          <div className='fourth-card'>
            <div className='one-card'>
              <h5>Campaigns</h5>
              <hr></hr>




              <MDBDataTable
                noBottomColumns
                responsive
                data={reports}
                className="tablecont"
              />


            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard