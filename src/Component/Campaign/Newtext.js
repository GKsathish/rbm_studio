import React from 'react'
import {Row,Col} from 'react-bootstrap';
import './text.css'

const Newtext = () => {
  return (
    
    <div className='Row'>

      
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
          <div className='fieldcontT'>

              <div class="form-groupT">
                <label className="p-2">Campaign  Name</label><br/>

                <input type="text" name="" class="form-controlT" id="carddesc" placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10"/>
              </div>

              <div class="form-groupT">
                <label>Select agent</label><br/>
                <select class="form-controlT"  name="agent" required>
                  <option>--Select Agent--</option>


                </select>
              </div>
            
           

              <div class="form-groupT">
                <label>Message</label><br/>
                
                <textarea class="form-controlT" id="messagetext" name="textmessage" rows="5" placeholder="Please enter text message" minlength="10" maxlength="320" size="320" required></textarea>
              </div>
              
              <div class="form-groupT">
                <label>Select Base File</label><br/>
                <select class="form-controlT"  name="rcsfilenamerich" required>
                  <option>--Select File--</option>


                </select>
              </div>
              <button type="submit" name="textsubmit" class="btnT " >Test Campaign</button>
              <button type="submit" name="settest" class="btnT1" >Set Campaign</button>
            
          
      
</div>


          </div>
      
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
          
                      <div className='fieldcontT'>
                          <center>Message Preview</center><br/>
                          <div className='myst'>

                          <div className="larger-banner"><br/>
                                  <small>
                                      <center ><b id="agenttarget">user name</b></center>
                                  </small>
                              </div>
                              <div className="cardsviewdetails">
                                  <p id="textpreview"><span id="textpreview2"></span></p>

                              </div>

                          </div>
                              
                        
                      
               </div> 
              
            </div>


          
    </div>
  )
}

export default Newtext