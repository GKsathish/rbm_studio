
import React,{useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import {AiOutlineArrowLeft} from 'react-icons/ai'
// import Header from '../Header/Header'
import './corousel.css';


const Corousel = () => {
 
const [ datetime, setDatetime ] = useState(0);
                          function handleChange(ev) {
                            if (!ev.target['validity'].valid) return;
                            const dt= ev.target['value'] + ':00Z';
                            setDatetime(dt);
                          }


const [schedule,setSchedule]=useState(false)  
const [now,setNow]=useState(true)  
                          const Now=()=>{
                            setNow(true);
                            setSchedule(false);
                          }
                          const Schedule=()=>{
                            setNow(false);
                            setSchedule(true);
                          }



// cards steps
const [activestep,setActivestep]=useState(2);



 


                          function activeHande (){
                            if( activestep <5) {
                            setActivestep(activestep+1)
                              
                            }else{
                              window.alert('only five cards');

                              setActivestep(activestep=5);

                            }
                          }

                          
                          function removebtn(){
                            if(activestep >2){
                            setActivestep(activestep-1)
                            }
                            else{
                              window.alert('two cards must')
                            }
                          }
                          


  return (
    <>
      <div id="wrapper">

 
        <Sidebar />
        <div className='textcontcor'>
          <h4 className='crtitle'>Corousel</h4>



          <div className='row my-5'>


            <div className='col-md-6 p-3 bg-white m-2'>

              <div class="form-groupcreat">
                <label className="p-2">Campaign Name</label>

                <input type="text" name="" class="form-controlcreat " id="carddesc" placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10" />
              </div>

              <div class="form-groupcreat">
                <label>Select agent</label>
                <select class="form-controlcreat" name="agent" required>
                  <option>Select Agent</option>


                </select>
              </div>


              <div class="card1">
                  <div style={{display:'flex' }}>
                  <div class="page-header">
                  <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 1</p>
             
                </div>
                  <div className=" cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
              
                  </div>
                <div class="form-groupcreat">
                  <label>Upload</label>
                  <input type="file" class="form-controlcreat reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupcreat">
                  <label>Card Title</label>
                  <input type="text" class="form-controlcreat reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupcreat">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlcreat  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupcreat">
                  <label>URL</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupcreat">
                  <label>URL Title</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>

             <div class="card2">
             <div style={{display:'flex' }}>
                  <div class="page-header">
                  <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 2</p>
             
                </div>
                  <div className=" cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
              
                  </div>                <div class="form-groupcreat">
                  <label>Upload</label>
                  <input type="file" class="form-controlcreat reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupcreat">
                  <label>Card Title</label>
                  <input type="text" class="form-controlcreat reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupcreat">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlcreat  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupcreat">
                  <label>URL</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupcreat">
                  <label>URL Title</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>
       {activestep >= 3 ? <div class="card3">
       <div style={{display:'flex' }}>
                  <div class="page-header">
                  <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 3</p>
             
                </div>
                  <div className=" cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
              
                  </div>
                <div class="form-groupcreat">
                  <label>Upload</label>
                  <input type="file" class="form-controlcreat reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupcreat">
                  <label>Card Title</label>
                  <input type="text" class="form-controlcreat reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupcreat">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlcreat  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupcreat">
                  <label>URL</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupcreat">
                  <label>URL Title</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div> :''}

              
            {activestep >=4 ? <div class="card4">
            <div style={{display:'flex' }}>
                  <div class="page-header">
                  <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 4</p>
             
                </div>
                  <div className=" cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
              
                  </div>
                <div class="form-groupcreat">
                  <label>Upload</label>
                  <input type="file" class="form-controlcreat reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupcreat">
                  <label>Card Title</label>
                  <input type="text" class="form-controlcreat reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupcreat">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlcreat  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupcreat">
                  <label>URL</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupcreat">
                  <label>URL Title</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>:''}
              
              {activestep >=5 ?<div class="card5">
              <div style={{display:'flex' }}>
                  <div class="page-header">
                  <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 5</p>
             
                </div>
                  <div className=" cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
              
                  </div>
                <div class="form-groupcreat">
                  <label>Upload</label>
                  <input type="file" class="form-controlcreat reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupcreat">
                  <label>Card Title</label>
                  <input type="text" class="form-controlcreat reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupcreat">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlcreat  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupcreat">
                  <label>URL</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupcreat">
                  <label>URL Title</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>:''}
              <button className='btn btn-warning text-white  float-right' onClick={activeHande} type='button' >Add +</button><br/><br/>

              <div class="form-groupcreat">
                <label>No of Corousels</label><br />
                <select class="form-controlcreat" name="rcsfilenamerich" required>
                  <option>{activestep}</option>


                </select>
              </div>
              <div class="form-groupcreat ">
		<label>Scheduler</label><br/>
<div class= "form-check-group chbk_rdio pt-2 pl-4 ">
<label class="form-check-label chbk_lbl" > 		<input type="radio"  name="Scheduler" value="now"id= "sched1" class="form-check-input sched"   onChange={Now} />
Now</label>

<label class="form-check-label chbk_lbl">		<input type="radio"  name="Scheduler" value= "Schedule" id= "sched2" class="form-check-input sched"  onChange={Schedule}   />
 Schedule</label>
</div>

	{ now?(	<input type="text" name="Scheduler"  value ="now" class="form-controlcreat scheduler1" id="scheduler1" readonly />):''}   

{schedule ?	<input type="datetime-local" name="date17" value={(datetime || '').toString().substring(0, 16)} id ="scheduler2" class="form-controlcreat scheduler2" onChange={handleChange} /> :''}
   
     </div>
              
              <div class="form-groupcreat">
                <label>Select Base File</label><br />
                <select class="form-controlcreat" name="rcsfilenamerich" required>
                  <option>Select File</option>


                </select>
              </div>
             

              <button type="submit" name="textsubmit" class="btncr " >Test Campaign</button>
              <button type="submit" name="settest" class="btncr1" >Set Campaign</button>






            </div>

            <div className='col-md-5 p-1 bg-white m-2'>

 <div id="richcard">
                                        		 <center>Carousel Preview</center>

          <div class="mystT">

                            <div >

                                <div class="larger-banner">
                                
				    <small>
<i class="fa fa-arrow-left" aria-hidden="true"></i>
                  <br id="agenttarget" style={{marginLeft: '5px'}} />
                                    </small>
                                </div>
                                <div class="corcard1preview">
                                    <div class="previewscroll">
                                        <div class="orcard1img ">
                                            <img id="corcard1pre"   src="#" style={{width:'100%'}} />
                                            <div class="orcard1titlepre" id="orcard1titleprestyle"></div>
                                            <div class="card1url" id="card1url1style"></div>
                                            <div class="despre1" id="despre1"></div>
                                        </div>

                                        <div class="orcard2img">
                                            <img id="corcard2pre" src="#"  style={{width:'100%'}} />
					    <div class="orcard2titlepre" id="orcard1titleprestyle"></div>
					    <div class="card1url2" id="card1url1style"></div>
                                            <div class="despre2" id="despre2"></div>
                                        </div>

                                        <div class="orcard3img">
                                            <img id="corcard3pre" src="#" style={{width:'100%'}} />
					    <div class="orcard3titlepre" id="orcard1titleprestyle"></div>
					    <div class="card1url3" id="card1url1style"></div>
                                            <div class="despre3" id="despre3"></div>
                                        </div>

                                        <div class="orcard4img">
                                            <img id="corcard4pre" src="#"  style={{width:'100%'}} />
					    <div class="orcard4titlepre" id="orcard1titleprestyle"></div>
					    <div class="card1url4" id="card1url1style"></div>
                                            <div class="despre4" id="despre4"></div>
                                        </div>

                                        <div class="orcard5img">
                                            <img id="corcard5pre" src="#" style={{width:'100%'}} />
					    <div class="orcard5titlepre" id="orcard1titleprestyle"></div>
					    <div class="card1url5" id="card1url1style"></div>
                                            <div class="despre5" id="despre5"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
             </div>


          </div>
        </div>
      </div>
      </div>
    </>



  )
}

export default Corousel
