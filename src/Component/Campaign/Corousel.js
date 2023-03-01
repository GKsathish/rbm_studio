
import React,{useState,useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import $ from 'jquery'
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
                          


const [formdata,setFormdata]=useState('');

const inputChange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value});
   }

const[i1,setI1]=useState();
const[i2,setI2]=useState();
const[i3,setI3]=useState();
const[i4,setI4]=useState();
const[i5,setI5]=useState();

const [image1,setImage1]=useState();
const [image2,setImage2]=useState();
const [image3,setImage3]=useState();
const [image4,setImage4]=useState();
const [image5,setImage5]=useState();

const card1image=(e)=>{
   const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setImage1(imageUrl)
}
const card2image=(e)=>{
   const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setImage2(imageUrl)
}
const card3image=(e)=>{
   const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setImage3(imageUrl)
}

const card4image=(e)=>{
   const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setImage4(imageUrl)
}

const card5image=(e)=>{
   const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setImage5(imageUrl)
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

                <input type="text" name="cname" value={formdata.cname} onChange={inputChange} class="form-controlcreat " id="carddesc" placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10" />
              </div>

              <div class="form-groupcreat">
                <label>Select agent</label>
                <select class="form-controlcreat" name="agent" value={formdata.agent} onChange={inputChange} required>
 <option>-Select Agent-</option>
                          <option value="Mobile Masala">Mobile Masala</option>
                          <option value="Zing">Zing</option>


                </select>
              </div>


              <div class="card1" >
                  <div style={{display:'flex' }}>
                  <div class="page-header">
                  <p value="card1" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 1</p>
             
                </div>
                  <div className=" cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
              
                  </div>
                <div class="form-groupcreat">
                  <label>Upload</label>
              
                  <input type="file" class="form-controlcreat reqcar1" value={i1}   onChange={card1image} name="card_1_image" id="corcard1"  placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupcreat">
                  <label>Card Title</label>
                  <input type="text" class="form-controlcreat reqcar1 reqcar2first"  onChange={inputChange} value={formdata.card_1_title} name="card_1_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupcreat">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlcreat  reqcar1 Description-1" rows="3" onChange={inputChange} value={formdata.Description-1}  name="Description-1" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupcreat">
                  <label>URL</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url" id="rurl" onChange={inputChange} value={formdata.card_1_url}  placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupcreat">
                  <label>URL Title</label>
                  <input type="text" class="form-controlcreat reqcar1" name="card_1_url_title" onChange={inputChange} value={formdata.card_1_url_title}  id="card1urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>

             <div class="card2" >
             <div style={{display:'flex' }}>
                  <div class="page-header">
                  <p value="card2" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 2</p>
             
                </div>
                  <div className=" cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
              
                  </div>                <div class="form-groupcreat">
                  <label>Upload</label>
                  <input type="file" class="form-controlcreat reqcar2" name="card_2_image" value={i2}   onChange={card2image} id="corcard2"  required accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupcreat">
                  <label>Card Title</label>
                  <input type="text" class="form-controlcreat reqcar2 reqcar2first" name="card_2_title"  onChange={inputChange} value={formdata.card_2_title}id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupcreat">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlcreat  reqcar2 Description-2" rows="3"onChange={inputChange} value={formdata.Description-2} name="Description-2" id="card1urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupcreat">
                  <label>URL</label>
                  <input type="text" class="form-controlcreat reqcar2" name="card_2_url" id="rurl" onChange={inputChange} value={formdata.card_2_url} placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupcreat">
                  <label>URL Title</label>
                  <input type="text" class="form-controlcreat reqcar2" name="card_2_url_title" onChange={inputChange} value={formdata.card_2_url_title} id="card2urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>
       {activestep >= 3 ? <div class="card3">
       <div style={{display:'flex' }}>
                  <div class="page-header">
                  <p value="card3" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 3</p>
             
                </div>
                  <div className=" cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
              
                  </div>
                <div class="form-groupcreat">
                  <label>Upload</label>
                  <input type="file" class="form-controlcreat reqcar3" name="card_3_image" value={i3}   onChange={card3image} id="corcard3" placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupcreat">
                  <label>Card Title</label>
                  <input type="text" class="form-controlcreat reqcar3 reqcar3first"  onChange={inputChange} value={formdata.Description-3}name="card_3_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupcreat">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlcreat  reqcar3 Description-3" onChange={inputChange} value={formdata.Description-3} rows="3" name="Description-3" id="card3urltitle req3" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupcreat">
                  <label>URL</label>
                  <input type="text" class="form-controlcreat reqcar3" name="card_3_url" onChange={inputChange} value={formdata.card_3_url} id="rurl" placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupcreat">
                  <label>URL Title</label>
                  <input type="text" class="form-controlcreat reqcar3" name="card_3_url_title"  onChange={inputChange} value={formdata.card_3_url_title}id="card3urltitle req3"  placeholder="please Enter Url Title" required="" />
                </div>

              </div> :''}

              
            {activestep >=4 ? <div class="card4">
            <div style={{display:'flex' }}>
                  <div class="page-header">
                  <p value="card4" name="cardname1" class="page-title cr" style={{ border: 'none' }}>Card 4</p>
             
                </div>
                  <div className=" cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
              
                  </div>
                <div class="form-groupcreat">
                  <label>Upload</label>
                  <input type="file" class="form-controlcreat reqcar4" name="card_4_image" id="corcard4"  onChange={card4image} value={i4}  placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupcreat">
                  <label>Card Title</label>
                  <input type="text" class="form-controlcreat reqcar4 reqcar4first"   onChange={inputChange} value={formdata.card_4_title}  name="card_4_title" id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupcreat">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlcreat  reqcar4 Description-4" rows="3" onChange={inputChange} value={formdata.Description-4}  name="Description-4" id="card4urltitle req1" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupcreat">
                  <label>URL</label>
                  <input type="text" class="form-controlcreat reqcar4" name="card_4_url" id="rurl" onChange={inputChange} value={formdata.card_4_url}  placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupcreat">
                  <label>URL Title</label>
                  <input type="text" class="form-controlcreat reqcar4" name="card_4_url_title" onChange={inputChange} value={formdata.card_4_url_title}  id="card4urltitle req1" placeholder="please Enter Url Title" required="" />
                </div>

              </div>:''}
              
              {activestep >=5 ?<div class="card5">
              <div style={{display:'flex' }}>
                  <div class="page-header">
                  <p value="card 1" name="cardname" class="page-title cr" style={{ border: 'none' }}>Card 5</p>
             
                </div>
                  <div className=" cancel"  >
                              <button className="btn btn-outline-danger btn-sm rounded-0 remove-item " type="button" id="closed" onClick={removebtn}>
                                <i className="fa fa-times" />
                             </button>
                           </div>
              
                  </div>
                <div class="form-groupcreat">
                  <label>Upload</label>
                  <input type="file" class="form-controlcreat reqcar5" name="card_5_image" id="corcard5" onChange={card5image} value={i5}  placeholder="" required="" accept=".jpg,.png,.gif,.jpeg" />
                  <small style={{ fontSize: 11 }}>use JPG,PNG,JPGE,GIF format only and size (1200X900)</small>
                </div>
                <div class="form-groupcreat">
                  <label>Card Title</label>
                  <input type="text" class="form-controlcreat reqcar5 reqcar5first" name="card_5_title"  onChange={inputChange} value={formdata.card_5_title} id="cardtitle req1" minlength="4" maxlength="45" size="45" placeholder="Card Title with Min 4 &amp; Max 45 characters" required="" />
                </div>
                <div class="form-groupcreat">
                  <label>Card Description</label>
                  <textarea type="text" class="form-controlcreat  reqcar5 Description-5" rows="3" name="Description-5"  onChange={inputChange} value={formdata.Description-5} id="card5urltitle req5" placeholder="Card Description with max 145 characters" minlength="4" maxlength="145" size="120" required=""></textarea>
                  <div class="show" id="counter"></div>
                </div>
                <div class="form-groupcreat">
                  <label>URL</label>
                  <input type="text" class="form-controlcreat reqcar5" name="card_5_url" id="rurl" onChange={inputChange} value={formdata.card_5_url}  placeholder="please Enter vaild Url for redirection" required="" />
                  <small>Ex.format : https://yourdomain.com</small>
                </div>
                <div class="form-groupcreat">
                  <label>URL Title</label>
                  <input type="text" class="form-controlcreat reqcar5" name="card_5_url_title" id="card1urltitle req5" onChange={inputChange} value={formdata.card_5_url_title}  placeholder="please Enter Url Title" required="" />
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
 <option>-Select Agent-</option>
                          <option value="File1"> file 13</option>
                          <option value="File2">file 4</option>


                </select>
              </div>
             

              <button type="submit" name="textsubmit" class="btncr " >Test Campaign</button>
              <button type="submit" name="settest" class="btncr1" >Set Campaign</button>






            </div>

            <div className='col-md-5 p-1 bg-white m-2'>
   <div class="" id="richcard">
          
          <div class="cardsview">

		 <center>Carousel Preview</center>
                            <div class="mystc">
                                <div ><br/>
                                              <small>
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    {formdata.agent}                                                                                </small>
                                </div>
                                <div class="corcard1preview">
                                    <div class="previewscroll">
                                        <div class="orcard1img " >
                                            <img id="corcard1pre"   src={image1}  className='image'/>
                                            <div class="orcard1titlepre" id="orcard1titleprestyle">{formdata.card_1_title}</div>
                                            <div class="card1url" id="card1url1style">{formdata.card_1_url}</div>
                                            <div class="despre1" id="despre1"></div>
                                        </div>

                                        <div class="orcard1img" >
                                            <img id="corcard2pre" src={image2} className='image'  />
					    <div class="orcard2titlepre" id="orcard1titleprestyle">{formdata.card_2_title}</div>
					    <div class="card1url2" id="card1url1style">{formdata.card_2_url}</div>
                                            <div class="despre2" id="despre2"></div>
                                        </div>

                                        <div class="orcard1img">
                                            <img id="corcard3pre" src={image3} className='image' />
					    <div class="orcard3titlepre" id="orcard1titleprestyle">{formdata.card_3_title}</div>
					    <div class="card1url3" id="card1url1style">{formdata.card_3_url}</div>
                                            <div class="despre3" id="despre3"></div>
                                        </div>

                                        <div class="orcard1img">
                                            <img id="corcard4pre" src={image4} className='image' />
					    <div class="orcard4titlepre" id="orcard1titleprestyle">{formdata.card_4_title}</div>
					    <div class="card1url4" id="card1url1style">{formdata.card_4_url}</div>
                                            <div class="despre4" id="despre4"></div>
                                        </div>

                                        <div class="orcard1img">
                                            <img id="corcard5pre" src={image5} className='image' />
					    <div class="orcard5titlepre" id="orcard1titleprestyle">{formdata.card_5_title}</div>
					    <div class="card1url5" id="card1url1style">{formdata.card_5_url}</div>
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
