import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './fpass.css'

const Forgotpassword = () => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div className='contpas'>
          <form className='password-box'>

            {/* <img src="/home/satish/rbm_studio/public/logo192.png" alt="fgshdj" className='ima '/> */}

            <h2 style={{ fontSize: 30, fontWeight: 'bold' }} >
              Change your account Password
            </h2>


            <div >

              <label for="password" class="form-groupf">Current Password</label>
              <input type="password" id="password" name="cpassword" class="form-controlf" required="" />
            </div>



            <div >

              <label class="form-groupf">New Password</label>
              <input type="password" id="password" class="form-controlf" name="newpassword" required="" />
            </div>

            <div >

              <label class="form-groupf" >Confirm Password</label>
              <input type="password" id="confirmPassword" class="form-controlf" name="confirmPassword" />
            </div>

            {/* <div class="buttonWrapper"> */}
            <button type="submit" name="changepassword" id="submitButton" class="btnfaa" >
              <span>Continue</span>
              <span id="loader" style={{ display: 'none' }}></span>
            </button>
            {/* </div> */}

          </form>
        </div>
      </div>
    </>

  )
}

export default Forgotpassword