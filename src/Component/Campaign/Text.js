import React from 'react'
import './text.css';



const Text = () => {


  return (
<div className='textcont'>
  <div > <h1 >Text Message Campaign</h1>

    </div>   

        <div className='rowcont'>

          
              <div className='fieldcont'>
                
                  <div class="form-group">
                    <label className="p-2">Campaign  Name</label><br/>

                    <input type="text" name="" class="form-control " id="carddesc" placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10"/>
                  </div>

                  <div class="form-group">
                    <label>Select agent</label><br/>
                    <select class="form-control1"  name="agent" required>
                      <option>--Select Agent--</option>


                    </select>
                  </div>
                  <div class="form-group">
                    <label>Message</label><br/>
                    
                    <textarea class="form-control" id="messagetext" name="textmessage" rows="5" placeholder="Please enter text message" minlength="10" maxlength="320" size="320" required></textarea>
                  </div>
                  
                  <div class="form-group">
                    <label>Select Base File</label><br/>
                    <select class="form-control1"  name="rcsfilenamerich" required>
                      <option>--Select File--</option>


                    </select>
                  </div>
                  <button type="submit" name="textsubmit" class="btn " >Test Campaign</button>
                  <button type="submit" name="settest" class="btn1" >Set Campaign</button>
                
              
          



              </div>
          
              <div className='fieldcont1'>
              
                          
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

export default Text