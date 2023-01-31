import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './support.css'

const Support = () => {
  return (
    <>
    <div className='si'>
    <Header/>
    <Sidebar/>
    </div>
    <div  className='container'>
				  
    <form  className="subcontainer">
      <div style={{padding:30}}>
                                  <h3>Contact Us</h3>
    <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p><br/>
    
  
    
    <input type="text" class="form-controls" placeholder="Email" required=""/><br/>
    <textarea class="form-controls " placeholder="Message" required="" style={{height: 85}}></textarea><br/>
    <input type="file" class="form-controls" multiple="" required=""/><br/>

    <button name="contactus" type="submit" class="btns">Send</button>
    </div>
    <div className='right'>
              
      
      <div className="contact_info">
                          <h4>Contact Info</h4>
                    
                          {/* <i class="fas fa-headset"></i> */}
                          <p>+91 9010761000</p>
                    
                      
                          {/* <i class="fas fa-envelope-open-text"></i> */}
                          <a href="https://outlook.office.com/">support@pyrogroup.com</a>
                      
                      
                          {/* <i class="fas fa-map-marked-alt"></i> */}
                          <p>India &amp; UAE</p>
                    

                  </div>
</div>
    </form>


</div></>
    

                                    
                                
  )
}

export default Support