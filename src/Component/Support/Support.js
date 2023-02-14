import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './support.css'

const Support = () => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div className='containersu'>

          <form className="subcontainersu">
            <div className='subsu'>
              <h4>Contact Us</h4>
              <h5>Feel Free to contact us any time. We will get back to you as soon as we can!.</h5><br />



              <input type="text" class="form-controls" placeholder="Email" required="" /><br />
              <textarea class="form-controls " placeholder="Message" required="" style={{ height: 85 }}></textarea><br />
              <input type="file" class="form-controls" multiple="" required="" /><br />

              <button name="contactus" type="submit" class="btns">Send</button>
            </div>
            <div className='right'>


              <div className="contact_info">
                <h3>Contact Info</h3>

                {/* <i class="fas fa-headset"></i> */}
                <h6>+91 9010761000</h6>


                {/* <i class="fas fa-envelope-open-text"></i> */}
                <a href="https://outlook.office.com/">support@pyrogroup.com</a>


                {/* <i class="fas fa-map-marked-alt"></i> */}
                <h6>India &amp; UAE</h6>


              </div>
            </div>
          </form>


        </div>
      </div>
    </>




  )
}

export default Support