import React from 'react'
/// import { Sidebar } from 'react-pro-sidebar'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './dashboard.css'

const Dashboard = () => {
  return (
    <>
    <div className='cnt'>
    <Header/>
    <Sidebar/>
    </div>

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

        </div>
        <div className='right-card'>
        <h3>Tested Devices</h3>
        <hr></hr>

        </div>
      </div>
      <div className='fourth-card'>
      <div className='one-card'>
        <h3>Campaigns</h3>
        <hr></hr>

        </div>
      </div>
    </div>
</>
  )
}

export default Dashboard