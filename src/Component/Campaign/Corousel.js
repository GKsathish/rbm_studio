import React from 'react';
import './text.css';


const Corousel = () => {
  return (
    <div className='textcont'>
  <div > <h1 >Corousel</h1>

    </div>   

        <div className='rowcont'>

          
              <div className='fieldcont'>
                
                  <div class="form-group">
                    <label className="p-2">Campaign Name</label><br/>

                    <input type="text" name="" class="form-control " id="carddesc" placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10"/>
                  </div>

                  <div class="form-group">
                    <label>Select agent</label><br/>
                    <select class="form-control1"  name="agent" required>
                      <option>Select Agent</option>


                    </select>
                  </div>
                  <div class="form-group">
                    <label>No of Corousels</label><br/>
                    <select class="form-control1"  name="rcsfilenamerich" required>
                      <option>2</option>


                    </select>
                  </div>
                  <div class="form-group">
                    <label>Scheduler</label><br/>
                    <select class="form-control1"  name="rcsfilenamerich" required>
                      <option> Select</option>


                    </select>
                  </div>
                  <div class="form-group">
                    <label>Select Base File</label><br/>
                    <select class="form-control1"  name="rcsfilenamerich" required>
                      <option>Select File</option>


                    </select>
                  </div>
                  <button type="submit" name="textsubmit" class="btn " >Test Campaign</button>
                  <button type="submit" name="settest" class="btn1" >Set Campaign</button>
                
              
          



              </div>
          
              <div className='fieldcont1'>
              
                          
                              <center>Corousel Preview</center><br/>
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

export default Corousel