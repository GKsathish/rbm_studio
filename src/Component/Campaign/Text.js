import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header'
import './text.css';



const Text = () => {


  return (
<>
<Header/>
<Sidebar/>
<div className='textcontT'>
  <div > <h1 >Text Message Campaign</h1>

    </div>   

        <div className='rowcontT'>

          
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
          
              <div className='fieldcontT1'>
              
                          
                              <center>Message Preview</center><br/>
                              <div className='mystT'>

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
  </div></>

  )
}

export default Text