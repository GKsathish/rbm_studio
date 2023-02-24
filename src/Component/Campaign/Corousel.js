
import React,{useState ,useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar'
import {AiOutlineArrowLeft} from 'react-icons/ai'

import Header from '../Header/Header'
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

                              setActivestep(activestep=5)

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


            <div className='col-md-6 p-5 bg-white m-2'>

              <div class="form-groupT">
                <label className="p-2">Campaign Name</label><br />

                <input type="text" name="" class="form-controlT " id="carddesc" placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10" />
              </div>

              <div class="form-groupT">
                <label>Select agent</label><br />
                <select class="form-controlT" name="agent" required>
                  <option>Select Agent</option>


                </select>
              </div>


              <div class="card1">
                  <div className="w-100 text-end cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
                <div class="page-header">
                  <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 1</p>
             
                </div>
                <div class="form-groupT">
                  <label>Upload</label>
                  <input type="file" class="form-controlT reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupT">
                  <label>Card Title</label>
                  <input type="text" class="form-controlT reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupT">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlT  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupT">
                  <label>URL</label>
                  <input type="text" class="form-controlT reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupT">
                  <label>URL Title</label>
                  <input type="text" class="form-controlT reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>

             <div class="card2">
                   <div className="w-100 text-end cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
                <div class="page-header">
                  <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 1</p>
                </div>
                <div class="form-groupT">
                  <label>Upload</label>
                  <input type="file" class="form-controlT reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupT">
                  <label>Card Title</label>
                  <input type="text" class="form-controlT reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupT">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlT  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupT">
                  <label>URL</label>
                  <input type="text" class="form-controlT reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupT">
                  <label>URL Title</label>
                  <input type="text" class="form-controlT reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>
       {activestep >= 3 ? <div class="card3">
           <div className="w-100 text-end cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
                <div class="page-header">
                  <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 1</p>
                </div>
                <div class="form-groupT">
                  <label>Upload</label>
                  <input type="file" class="form-controlT reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupT">
                  <label>Card Title</label>
                  <input type="text" class="form-controlT reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupT">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlT  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupT">
                  <label>URL</label>
                  <input type="text" class="form-controlT reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupT">
                  <label>URL Title</label>
                  <input type="text" class="form-controlT reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div> :''}

              
            {activestep >=4 ? <div class="card4">
                 <div className="w-100 text-end cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
                <div class="page-header">
                  <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 1</p>
                </div>
                <div class="form-groupT">
                  <label>Upload</label>
                  <input type="file" class="form-controlT reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupT">
                  <label>Card Title</label>
                  <input type="text" class="form-controlT reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupT">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlT  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupT">
                  <label>URL</label>
                  <input type="text" class="form-controlT reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupT">
                  <label>URL Title</label>
                  <input type="text" class="form-controlT reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>:''}
              
              {activestep >=5 ?<div class="card5">
                   <div className="w-100 text-end cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
                <div class="page-header">
                  <p value="card 1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 1</p>
                </div>
                <div class="form-groupT">
                  <label>Upload</label>
                  <input type="file" class="form-controlT reqcar1" name="card_1_image" id="corcard1" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupT">
                  <label>Card Title</label>
                  <input type="text" class="form-controlT reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupT">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlT  reqcar1 Description-1" rows="3" name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupT">
                  <label>URL</label>
                  <input type="text" class="form-controlT reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupT">
                  <label>URL Title</label>
                  <input type="text" class="form-controlT reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>:''}
              <button className='btn btn-warning text-white  float-right' onClick={activeHande} type='button' >Add +</button><br/><br/>

              <div class="form-groupT">
                <label>No of Corousels</label><br />
                <select class="form-controlT" name="rcsfilenamerich" required>
                  <option>{activestep}</option>


                </select>
              </div>
              <div class="form-groupT ">
		<label>Scheduler</label><br/>
<div class= "form-check-group chbk_rdio pt-2 pl-4 ">
<label class="form-check-label chbk_lbl" > 		<input type="radio"  name="Scheduler" value="now"id= "sched1" class="form-check-input sched"   onChange={Now} />
Now</label>

<label class="form-check-label chbk_lbl">		<input type="radio"  name="Scheduler" value= "Schedule" id= "sched2" class="form-check-input sched"  onChange={Schedule}   />
 Schedule</label>
</div>

	{ now?(	<input type="text" name="Scheduler"  value ="now" class="form-controlT scheduler1" id="scheduler1" readonly />):''}   

{schedule ?	<input type="datetime-local" name="date17" value={(datetime || '').toString().substring(0, 16)} id ="scheduler2" class="form-controlT scheduler2" onChange={handleChange} /> :''}
   
     </div>
              
              <div class="form-groupT">
                <label>Select Base File</label><br />
                <select class="form-controlT" name="rcsfilenamerich" required>
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



// import React, { Component } from 'react';  
// import 'bootstrap/dist/css/bootstrap.min.css';  
// import Sidebar from '../Sidebar/Sidebar';
// import './cos.css';


// function Corousel() {
//   return (
//     <div >
//    <Sidebar/>
//       <div className="main-panel">
//         <div className="content-wrapper" style={{marginLeft: '280px',marginTop:'70px'}}>
//           <div className="page-header">
//             <h4 style={{color:'#763B75'}}> Carousel</h4>
//           </div>
//           <div className="row">
//             <div className="col-md-6 grid-margin stretch-card" >
//               <div className="card" style={{padding:'10px'}}>
//                 <div className="card-body" >
//                   <form action="#" method="post" autoComplete="off" encType="multipart/form-data">
//                     <div className="form-groupTT">
//                       <label>Campaign Name</label>
                     
//                       <input type="text" name="nickname" className="form-controlTT" id="nickname" minLength={4} maxLength={10} size={10} required placeholder="campagin nickname"  />
//                     </div>
//                     <div className="form-groupTT">
//                       <label>Select Agent</label>
                     
//                       <select className="form-controlTT" name="agentname" required >
//                         <option>--Select Agent--</option>
//                       </select>
//                     </div>    
//                     <div className="row align-items-center" id="item-card">
//                       <div className="col-lg-12 col-md-12 col-sm-12 item mb-3 h-100">
//                         <div className="card rounded-0 shadow h-100 " style={{border: '1px solid #763b75',margin:'15px 0px'}}>
//                           <div className="card-body h-100" style={{padding:'15px',margin:'10px 0px'}} >
//                             <div className="w-100 text-end cancel"  >
//                               <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed">
//                                 <i className="fa fa-times" />
//                               </button>
//                             </div>
//                             <div className="page-header">
//                               <p value="card 1" name="cardname1" className="page-title cr" style={{border: 'none',background:'#f6b23c',padding:'10px',margin:'5px'}}>card </p>
//                             </div>
//                             <div className="form-groupTT">
//                               <label>Upload</label>
                             
//                               <input type="file" className="form-controlTT reqcar1" name="card_1_image" id="corcard1" placeholder required accept=".jpg,.png,.gif,.jpeg"  />
                             
//                               <small style={{fontSize:'11px'}}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
//                             </div>
//                             <div className="form-groupTT">
//                               <label>Card Title</label>
                             
//                               <input type="text" className="form-controlTT reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minLength={4} maxLength={45} size={45} placeholder="Card Title with Min 4 & Max 45 characters" required  />
//                             </div>
//                             <div className="form-groupTT">
//                               <label>Card Description</label>
                             
//                               <textarea type="text" className="form-controlTT  reqcar1 Description-1" rows={3} name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minLength={4} maxLength={145} size={120} required defaultValue={""}  />
//                               <div className="show" id="counter" />
//                             </div>
//                             <div className="form-groupTT">
//                               <label>URL</label>
                             
//                               <input type="text" className="form-controlTT reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required />
//                               <small style={{fontSize:'11px'}} >Ex.format : https://yourdomain.com</small>
//                             </div>
//                             <div className="form-groupTT">
//                               <label>URL Title</label>
                             
//                               <input type="text" className="form-controlTT reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required  />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row align-items-center" id="item-card">
//                       <div className="col-lg-12 col-md-12 col-sm-12 item mb-3 h-100">
//                         <div className="rounded-0 shadow h-100 " style={{border: '1px solid #763b75',margin:'15px 0px'}}>
//                           <div className=" h-100" style={{pmargin:'10px '}} >
//                              <div className="w-100 text-end cancel">
//                               <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" >
//                                 <i className="fa fa-times" />
//                               </button>
//                             </div>
//                             <div className="page-header">
//                               <p value="card 1" name="cardname1" className="page-title cr" style={{border: 'none',background:'#f6b23c',padding:'10px',margin:'5px'}}>card </p>
//                             </div>
//                             <div className="form-groupTT">
//                               <label>Upload</label>
//                               <input type="file" className="form-controlTT reqcar1" name="card_1_image" id="corcard1" placeholder required accept=".jpg,.png,.gif,.jpeg"  />
                             
//                               <small style={{fontSize: '11px'}}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
//                             </div>
//                           <div className="form-groupTT">
//                             <label>Card Title</label>
                             
//                             <input type="text" className="form-controlTT reqcar1 reqcar2first" name="card_1_title" id="cardtitle req1" minLength={4} maxLength={45} size={45} placeholder="Card Title with Min 4 & Max 45 characters" required  />
//                           </div>
//                           <div className="form-groupTT">
//                             <label>Card Description</label>
                             
//                             <textarea type="text" className="form-controlTT  reqcar1 Description-1" rows={3} name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minLength={4} maxLength={145} size={120} required defaultValue={""}  />
//                             <div className="show" id="counter" />
//                           </div>
//                           <div className="form-groupTT">
//                             <label>URL</label>
                             
//                             <input type="text" className="form-controlTT reqcar1" name="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required  />
                             
//                             <small>Ex.format : https://yourdomain.com</small>
//                           </div>
//                           <div className="form-groupTT">
//                             <label>URL Title</label>
                             
//                             <input type="text" className="form-controlTT reqcar1" name="card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required  />
//                           </div>
//                         </div>
//                       </div>
//                       </div>
//                     </div>
//                     <div className="mb-2 admore1" id="new_item">
//                       <div className=" " id="plus">
//                         <a href="javascript:void(0)" id="new-item-btn" className=" fw-bolder fs-1   text-decoration-none">
//                           <div className="d-flex   align-items-center justify-content-center adbox " style={{fontSize: '18px'}}>
//                           <p>Add<span className="plusmores">+</span></p>
//                             {/*<FontAwesomeIcon icon="fa-solid fa-plus" />*/}
//                           </div>
//                         </a>
//                       </div>
//                       <noscript id="el-clone" className="elclone">
//         &lt;div class=" item mb-3 h-100"&gt;
//         &lt;!-- &lt;form action="#" method="POST" id="contact-form"&gt; --&gt;
//         &lt;div class="row align-items-center" id="item-card"&gt;
//         &lt;div class="col-lg-12 col-md-12 col-sm-12 item mb-3 h-100"&gt;
//         &lt;div class="card rounded-0 shadow h-100" style="border: 1px solid #763b75;"&gt;
//         &lt;div class="card-body h-100"&gt;
//         &lt;div class="w-100 text-end cancel"&gt;
//         &lt;button class="btn btn-outline-danger btn-sm rounded-0 remove-item" type="button" id="closed"&gt;
//         &lt;b&gt;X&lt;/&gt;
//         &lt;/button&gt;
//         &lt;/div&gt;
//         &lt;div class="page-header"&gt;
//         &lt;p value="card 1" name="cardname1" class="page-title cr" style="border: none;background:#f6b23c;padding:10px;margin:5px;"&gt;card &lt;/p&gt;
//         &lt;/div&gt;
//         &lt;div class="form-groupTT"&gt;
//         &lt;label&gt;Upload&lt;/label&gt;
//         &lt;input type="file" class="form-controlTT reqcar1" name = "card_1_image" id="corcard1" placeholder="" required accept=".jpg,.png,.gif,.jpeg"&gt;
//         &lt;small style="    font-size: 11px;" &gt;use JPG,PNG,JPGE,GIF format only and size (1200X900)&lt;/small&gt;
//         &lt;/div&gt;
//         &lt;div class="form-groupTT"&gt;
//         &lt;label&gt;Card Title&lt;/label&gt;
//         &lt;input type="text" class="form-controlTT reqcar1 reqcar2first" name = "card_1_title"id="cardtitle req1" minlength="4" maxlength="45" size="45"  placeholder="Card Title with Min 4 &amp; Max 45 characters" required&gt;
//         &lt;/div&gt;
//         &lt;div class="form-groupTT"&gt;
//         &lt;label&gt;Card Description&lt;/label&gt;
//         &lt;textarea type="text" class="form-controlTT  reqcar1 Description-1" rows = "3"name = "Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters"  minlength="4" maxlength="145" size="120" required&gt;&lt;/textarea&gt;
//         &lt;div class = "show"id="counter"&gt;&lt;/div&gt;
//         &lt;/div&gt;
//         &lt;div class="form-groupTT"&gt;
//         &lt;label&gt;URL&lt;/label&gt;
//         &lt;input type="text" class="form-controlTT reqcar1" name ="card_1_url" id="rurl" placeholder="please Enter vaild Url for redirection" required&gt;
//         &lt;small&gt;Ex.format : https://yourdomain.com&lt;/small&gt;
//         &lt;/div&gt;
//         &lt;div class="form-groupTT"&gt;
//         &lt;label&gt;URL Title&lt;/label&gt;
//         &lt;input type="text" class="form-controlTT reqcar1" name = "card_1_url_title" id="card1urltitle req1" placeholder="please Enter Url Title" required&gt;
//         &lt;/div&gt;
//         &lt;/div&gt;
//         &lt;/div&gt;
//         &lt;/div&gt;
//         &lt;/div&gt;
//         &lt;/div&gt;
//       </noscript>
//                     </div>
//                     {/*     <div class="row justify-content-center">
//               <button class="btn btn-primary bg-gradient col-md-4 btn-large rounded-pill" type="button" id="submit-form">Submit Data</button>
//             </div> */}
//                     <div className="form-groupTT">
//                       <label>No of Carousels</label>
//                       <select className="form-controlTT" id="Carousels_count" name="carouselcount" required>
//                         <option value={2}>2</option>
//                       </select>
//                     </div>
//                     <div className="form-groupTT">
//                       <label>Scheduler</label>
//                       <select className="form-controlTT" name="Scheduler" id="Scheduler">
//                         <option>Select</option>
//                         <option value="now">Now</option>
//                         <option value="Schedule">Schedule</option>
//                       </select>
//                     </div>
//                     <div className="form-groupTT form-login datetime">
//                       <label style={{float: 'left'}}><b /></label>
//                       <div style={{width: '100%', float: 'left'}}>
//                         {/*<input type="text" name="date17" defaultValue />*/}
//                       </div>
//                     </div>
//                     <div className="form-groupTT">
//                       <label>Select Base File</label>
//                       <select className="form-controlTT" name="rcsfilenamerich" required>
//                         <option>--Select File--</option>
//                       </select>
//                     </div>
//                     <button type="submit" className="btn btn-gradient-primary" name="carouselset" style={{float: 'left', width: '45%',background:'#763b75',color:'#fff',marginTop:'10px'}}> Set Campaign</button>
//                     <button type="submit" name="carouseltest" className="btn btn-gradient-primary" style={{float: 'right', width: '45%',background:'#763b75',color:'#fff',marginTop:'10px'}}>Test Campaign</button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 grid-margin stretch-card" style={{background: '#fff', padding: '10px', borderLeft: '1px solid #dddddd87',float:'right'}}>
//               <div className id="richcard">
//                 <div className="cardsview">
//                   <center><small>Carousel Preview</small></center>
//                   <div className="img-preview2">
//                     <div className="larger-banner"><br />
//                       <small>
//                         <center style={{margin: '10px'}}><b id="agenttarget" /></center>
//                       </small>
//                     </div>
//                     <div className="corcard1preview">
//                       <div className="previewscroll">
//                         <div className="orcard1img">
//                           <img id="corcard1pre" src="#" style={{width: '100%'}} />
//                           <div className="orcard1titlepre" id="orcard1titleprestyle" />
//                           <div className="card1url" id="card1url1style" />
//                           <div className="despre1" id="despre1" />
//                         </div>
//                         <div className="orcard1img">
//                           <img id="corcard2pre" src="#" style={{width: '100%'}} />
//                           <div className="orcard2titlepre" id="orcard1titleprestyle" />
//                           <div className="card1url2" id="card1url1style" />
//                           <div className="despre2" id="despre2" />
//                         </div>
//                         <div className="orcard1img">
//                           <img id="corcard3pre" src="#" style={{width: '100%'}} />
//                           <div className="orcard3titlepre" id="orcard1titleprestyle" />
//                           <div className="card1url3" id="card1url1style" />
//                           <div className="despre3" id="despre3" />
//                         </div>
//                         <div className="orcard1img">
//                           <img id="corcard4pre" src="#" style={{width: '100%'}} />
//                           <div className="orcard4titlepre" id="orcard1titleprestyle" />
//                           <div className="card1url4" id="card1url1style" />                      
//                           <div className="despre4" id="despre4" />
//                         </div>
//                         <div className="orcard1img">
//                           <img id="corcard5pre" src="#" style={{width: '100%'}} />
//                           <div className="orcard5titlepre" id="orcard1titleprestyle">
//                           </div>
//                           <div className="card1url5" id="card1url1style" />              
//                           <div className="despre5" id="despre5" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>




//           </div>
//   );
// }  
// export default Corousel; 