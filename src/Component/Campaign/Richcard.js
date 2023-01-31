import React from 'react'
import  Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

import './richcard.css'

const Richcard = () => {
  return (
    <>
    <Header/>
<Sidebar/>
<div className='textcontR'>
  <div > <h1 >Rich Card</h1>

    </div>   

        <div className='rowcontR'>

          
              <div className='fieldcontR'>
                
                  <div class="from-groupR">
                    <label className="p-2">Campaign  Name</label><br/>

                    <input type="text" name="" class="from-controlR" id="carddesc" placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10"/>
                  </div>

                  <div class="from-groupR">
                    <label>Select agent</label><br/>
                    <select class="from-controlR"  name="agent" required>
                      <option>--Select Agent--</option>


                    </select>
                  </div>

                  <div class="from-groupR">
                <label>Image & Video</label>
                <input type="file" name="imagefile" class="from-controlR" id="imgrichcard" placeholder="" accept=".jpg,.png,.gif,.jpeg" required/>
                <small style={{fontSize: 11}}>For better view use JPG,PNG,JPGE,GIF format and size (1200X900)</small>
              </div>
                
              <div class="from-groupR">
                <label>Card Title</label>
                <input type="text" name="titlerich" class="from-controlR cardtitle" id="cardtitle req1" minlength="4" maxlength="45" size="45" required placeholder="Card Title with Min 4 & Max 45 characters"/>
              </div>
              <div class="from-groupR">
                <label>Description</label>
                <input type="text" name="description" class="from-controlR " id="carddesc" placeholder="Card Description with max 145 characters" required minlength="16" maxlength="145" size="120"/>
              </div>

              <div class="from-groupR">
                <label>Action</label>
                <select class="from-controlR">
                  <option>Select</option>
                  <option>URL</option>
                  <option>Dail</option>
                  <option>Locatoin</option>
                  <option>Calender</option>
                </select>
              </div>
              {/* <div class="form-group">
                <label>URL</label>
                <input type="text" name="url" class="form-control" id="rurl" placeholder="please Enter vaild Url for redirection">
                <small>https://yourdomain.com</small>
              </div> */}
              {/* <div class="form-group">
                <label>URL Title</label>
                <input type="text" name="urltitle" class="form-control" id="urltitlerich" placeholder="please Enter Url Title">
              </div> */}
              <div class="from-groupR">
                <label>Scheduler</label>
                <select class="from-controlR"  name="Scheduler" id="Scheduler">
                  <option>Select</option>
                  <option>Now</option>
                  <option>Schedule</option>
                </select>
	      </div>

                  <div class="from-groupR">
                    <label>Select Base File</label><br/>
                    <select class="from-controlR"  name="rcsfilenamerich" required>
                      <option>--Select File--</option>


                    </select>
                  </div>
                  <button type="submit" name="textsubmit" class="btnR " >Test Campaign</button>
                  <button type="submit" name="settest" class="btnR1" >Set Campaign</button>
                
              
          



              </div>
          
              <div className='fieldcontR1'>
              
                          
                              <center>Card Preview</center><br/>
                              <div className='mystR'>

                              <div className="larger-banner"><br/>
                                      <small>
                                          <center ><b id="agenttarget">user name</b></center>
                                      </small>
                                  </div>
                                  <div className="cardsviewdetails">
                                      <p id="textpreview"></p>

                                  </div>

                              </div>
                                  
                            
                          
                    
                  
                </div>


              
        </div>
  </div>
    </>
  )
}

export default Richcard