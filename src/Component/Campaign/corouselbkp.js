// import React,{useState ,useEffect} from 'react';
// import Sidebar from '../Sidebar/Sidebar'
// import Header from '../Header/Header'
// import $ from 'jquery'
// import './corousel.css';


// const Corousel = () => {




  
// const [ datetime, setDatetime ] = useState('');

// function handleChange(ev) {
//   if (!ev.target['validity'].valid) return;
//   const dt= ev.target['value'] + ':00Z';
//   setDatetime(dt);
// }
// const [schedule,setSchedule]=useState(false)  
// const [now,setNow]=useState(true)  
// const Now=()=>{
//   setNow(true);
//   setSchedule(false);
// }
// const Schedule=()=>{
//   setNow(false);
//   setSchedule(true);
// }
//   return (
//     <>
//       <div id="wrapper">

 
//         <Sidebar />
//         <div className='textcontcor'>
//           <h4 className='crtitle'>Corousel</h4>



//           <div className='row my-5'>


//             <div className='col-md-6 p-5 bg-white m-2'>

//               <div class="form-groupcr">
//                 <label className="p-2">Campaign Name</label><br />

//                 <input type="text" name="" class="form-controlcr " id="carddesc" placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10" />
//               </div>

//               <div class="form-groupcr">
//                 <label>Select agent</label><br />
//                 <select class="form-controlcr1" name="agent" required>
//                   <option>Select Agent</option>


//                 </select>
//               </div>


//               <div class="card1">
//                 <div class="page-header">
//                   <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 1</p>
//                 </div>
//                 <div class="form-groupcr">
//                   <label>Upload</label>
//                   <input type="file" class="form-controlcr reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
//                   <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
//                 </div>
//                 <div class="form-groupcr">
//                   <label>Card Title</label>
//                   <input type="text" class="form-controlcr reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
//                 </div>
//                 <div class="form-groupcr">
//                   <label>Card Description</label>
//                   <textarea type="text" class="form-controlcr  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
//                   <div class="show" id="counter"></div>
//                 </div>
//                 <div class="form-groupcr">
//                   <label>URL</label>
//                   <input type="text" class="form-controlcr reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
//                   <small>Ex.format : https://yourdomain.com</small>
//                 </div>
//                 <div class="form-groupcr">
//                   <label>URL Title</label>
//                   <input type="text" class="form-controlcr reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
//                 </div>

//               </div>
//               <div class="card1">
//                 <div class="page-header">
//                   <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 1</p>
//                 </div>
//                 <div class="form-groupcr">
//                   <label>Upload</label>
//                   <input type="file" class="form-controlcr reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
//                   <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
//                 </div>
//                 <div class="form-groupcr">
//                   <label>Card Title</label>
//                   <input type="text" class="form-controlcr reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
//                 </div>
//                 <div class="form-groupcr">
//                   <label>Card Description</label>
//                   <textarea type="text" class="form-controlcr  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
//                   <div class="show" id="counter"></div>
//                 </div>
//                 <div class="form-groupcr">
//                   <label>URL</label>
//                   <input type="text" class="form-controlcr reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
//                   <small>Ex.format : https://yourdomain.com</small>
//                 </div>
//                 <div class="form-groupcr">
//                   <label>URL Title</label>
//                   <input type="text" class="form-controlcr reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
//                 </div>

//               </div>

//               <div class="form-groupcr">
//                 <label>No of Corousels</label><br />
//                 <select class="form-controlcr1" name="rcsfilenamerich" required>
//                   <option>2</option>


//                 </select>
//               </div>
//               <div class="form-groupcr ">
// 		<label>Scheduler</label><br/>
// <div class= "form-check-group chbk_rdio pt-2 pl-4 ">
// <label class="form-check-label chbk_lbl" > 		<input type="radio"  name="Scheduler" value="now"id= "sched1" class="form-check-input sched"   onChange={Now} />
// Now</label>

// <label class="form-check-label chbk_lbl">		<input type="radio"  name="Scheduler" value= "Schedule" id= "sched2" class="form-check-input sched"  onChange={Schedule}   />
//  Schedule</label>
// </div>

// 	{ now?(	<input type="text" name="Scheduler"  value ="now" class="form-controlcr scheduler1" id="scheduler1" readonly />):''}   

// {schedule ?	<input type="datetime-local" name="date17" value={(datetime || '').toString().substring(0, 16)} id ="scheduler2" class="form-controlcr scheduler2" onChange={handleChange} /> :''}
   
//      </div>
              
//               <div class="form-groupcr">
//                 <label>Select Base File</label><br />
//                 <select class="form-controlcr1" name="rcsfilenamerich" required>
//                   <option>Select File</option>


//                 </select>
//               </div>
             

//               <button type="submit" name="textsubmit" class="btncr " >Test Campaign</button>
//               <button type="submit" name="settest" class="btncr1" >Set Campaign</button>






//             </div>

//             <div className='col-md-5 p-1 bg-white m-2'>


//               <center>Corousel Preview</center><br />
//               <div className='mystT'>

//                 <div className="larger-banner"><br />
//                   <small>
//                     {/* <center ><b id="agenttarget">user name</b></center> */}
//                   </small>
//                 </div>
//                 <div className="cardsviewdetails">
//                   <p id="textpreview"><span id="textpreview2"></span></p>

//                 </div>

//               </div>





//             </div>



//           </div>
//         </div>
//       </div>
//     </>



//   )
// }

// export default Corousel














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


              <center>Corousel Preview</center><br />
              <div className='mystT'>

                <div className="larger-banner">
                        <AiOutlineArrowLeft style={{ width:'40px', height:'20',marginTop:'10px',paddingRight:'5px'}}/>
                      
                      agent 
                 </div>
                 
                <div className='corousel'>
                  <div>
                    <img src="#" alt="first1" />
                    <center><h6>CH</h6></center>
                    <p>CP1</p>
                  </div>
                  <div>
                    <img src="#" alt="first2" />
                    <center><h6>CH</h6></center>
                    <p>CP2</p>
                  </div> 
                  <div>
                    <img src="#" alt="first3"/>
                    <center><h6>CH</h6></center>
                    <p>CP3</p>
                  </div>
                   <div>
                    <img src="#" alt="first4" />
                    <center><h6>CH</h6></center>
                    <p>CP4</p>
                  </div>
                  <div>
                    <img src="#" alt="first5"/>
                    <center><h6>CH</h6></center>
                    <p>CP5</p>
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



