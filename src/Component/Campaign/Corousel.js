import React from 'react';
import './corousel.css';


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

               
                  <div class="card1">
		<div class="page-header">
		<p value="card 1" name="cardname1" class="page-title cr" style={{border: 'none'}}>Card 1</p>
   	     </div>
              <div class="form-group">
                <label>Upload</label>
                <input type="file" class="form-control reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg"/> 
                <small style={{fontSize: 11}}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
              </div>
              <div class="form-group">
                <label>Card Title</label>
                <input type="text" class="form-control reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required=""/>
              </div>
              <div class="form-group">
                <label>Card Description</label>
		<textarea type="text" class="form-control  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
		<div class="show" id="counter"></div>
              </div>
              <div class="form-group">
                <label>URL</label>
                <input type="text" class="form-control reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required=""/>
                <small>Ex.format : https://yourdomain.com</small>
              </div>
              <div class="form-group">
                <label>URL Title</label>
                <input type="text" class="form-control reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required=""/>
	      </div>
		
		</div>
    <div class="card1">
		<div class="page-header">
		<p value="card 1" name="cardname1" class="page-title cr" style={{border: 'none'}}>Card 1</p>
   	     </div>
              <div class="form-group">
                <label>Upload</label>
                <input type="file" class="form-control reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg"/> 
                <small style={{fontSize: 11}}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
              </div>
              <div class="form-group">
                <label>Card Title</label>
                <input type="text" class="form-control reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required=""/>
              </div>
              <div class="form-group">
                <label>Card Description</label>
		<textarea type="text" class="form-control  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
		<div class="show" id="counter"></div>
              </div>
              <div class="form-group">
                <label>URL</label>
                <input type="text" class="form-control reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required=""/>
                <small>Ex.format : https://yourdomain.com</small>
              </div>
              <div class="form-group">
                <label>URL Title</label>
                <input type="text" class="form-control reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required=""/>
	      </div>
		
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
                              <div className='mystC'>

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