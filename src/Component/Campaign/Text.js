  import React,{useState,useEffect} from 'react'
  import Sidebar from '../Sidebar/Sidebar';
  import Header from '../Header/Header'
  import {AiOutlineArrowLeft} from 'react-icons/ai'
  import './text.css';
import { getByPlaceholderText } from '@testing-library/react';
   

  const Text = () => {



// var showdate=new Date();
// var scheduler111=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullyear();



const [ datetime, setDatetime ] = useState('');

function handleChange(ev) {
  if (!ev.target['validity'].valid) return;
  const dt= ev.target['value'] + ':00Z';
  setDatetime(dt);
}

const [checked,setChecked]=useState(true);  
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
   const [formdata,setFormdata]=useState('');
   const state = {
    button:1,
    button:2
  };

  
  

   const inputChange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value});
   }
   const onSubmit= async (e)=>{
    e.preventDefault();
    if (state.button === 1) {
      // const response = await fetch("http://172.22.9.72:5000/agent_registration", {
      //   method: "POST",
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(formdata)
      // })
      //   .then(response => {
      //    console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })
      console.log('one');
    }
    if (state.button === 2) {
      // const response = await fetch("http://172.22.9.72:5000/agent_registration", {
      //   method: "POST",
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(formdata)
      // })
      //   .then(response => {
      //    console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })'
      console.log('two');
    }

   }
    return (
      <>
        <div id="wrapper" className='row' onSubmit={onSubmit}>
          <Sidebar />
          



            
            <form className='col-12 pl-5 mt-5' >
                <div className='row '>
                  
                   <h4 className='texttitle'>Text Message Campaign</h4>


                    <div className=' bg-white  col-12 col-lg-6 m-3 leftT' >

                      <div class="form-groupT">
                        <label className="p-2">Campaign  Name</label><br />

                        <input type="text" name="campaignname"  value={formdata.campaignname}class="form-controlT"  placeholder="Campaign Nick Name" required minlength="5" maxlength="10" size="10" onChange={inputChange} />
                      </div>

                      <div class="form-groupT">
                        <label>Select agent</label><br />
                        <select class="form-controlT" name="agent" value={formdata.agent}required onChange={inputChange}>
                          <option>-Select Agent-</option>
                          <option value="Mobile Masala">Mobile Masala</option>
                          <option value="Zing">Zing</option>


                        </select>
                      </div>



                      <div class="form-groupT">
                        <label >Message</label><br />

                        <textarea class="form-controlT"   name="textmessage"  value={formdata.textmessage}rows="5" col="20" placeholder="Please enter text message" minlength="10" maxlength="320" size="320" required onChange={inputChange} ></textarea>
                      </div>

                      {/* <div class="form-groupT">
                <label>Scheduler</label><br />
                  <label style={{
    fontSize: '14px',
    lineHeight: '1',
    verticalAlign: 'top',
    marginRight: '20px',
    marginLeft:'0px'
}}>
            <input
              type="radio"
              value="Now"
              // className='form-controlT'
              // checked={selectedOption === "Now"}
              // onChange={this.onValueChange}
              name="group"
              defaultChecked
            />
            Now
          </label>  
          <label>
            <input
              type="radio"
              value="Schedule"
              name="group"
              // checked={this.state.selectedOption === "schedule
              // onChange={this.onValueChange}
            />
            Schedule
          </label>              </div> */}
{/* 
<div className="form-groupT">
        <label>Scheduler</label><br/>
        <div className="form-check-group chbk_rdio ">
          <input type="radio" name="Scheduler" defaultValue="now" id="sched1" className="form-check-input sched" defaultChecked />
          <label className="form-check-label chbk_lbl"> Now</label>
          <input type="radio" name="Scheduler" defaultValue="Schedule" id="sched2" className="form-check-input sched" />
          <label className="form-check-label chbk_lbl"> Schedule</label>
        </div>
        <input type="text" name="Scheduler" defaultValue="now" className="form-controlT scheduler1" id="scheduler1" readOnly style={{display: 'block'}} />
        <input type="datetime-local" name="date17" id="scheduler2" className="form-controlT scheduler2" style={{display: 'none'}} />	
      </div> */}
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
                        <select class="form-controlT" name="rcsfilenamerich" value={formdata.rcsfilenamerich}  onChange={inputChange} required>
                          <option>--Select File--</option>
                          <option value="0">base1</option>
                          <option value="1">base2</option>


                        </select>
                      </div>
                      <button type="submit" name="textsubmit" class="btn-primary btn-bg  rounded-2 m-3 b-0"         onClick={() => (state.button = 1)} 
      
        value="wow" 
 >Test Campaign</button>
                      <button type="submit" name="settest" class="btn-primary btn-bg rounded-2 m-3 b-0"         onClick={() => (state.button = 2)} 
        
        value="wow"
 >Set Campaign</button>






                    </div>

                    <div className=' bg-white col-12 col-lg-5 m-3 rightT' >


                      <center><h6 style={{marginBottom:'8px'}}>Message Preview</h6></center>
                      <div className='mystT'>

                        <div style={{display:'flex',marginTop:'40px'}}>
                        <AiOutlineArrowLeft style={{ width:'40px', height:'20',marginTop:'5px',paddingRight:'5px'}}/>
                      
                      {formdata.agent} 
                        </div>
                      <p className='messagecont' >
                      {formdata.textmessage}</p>
                      

                      </div>





                    </div>
                

                </div>
          </form>

        </div>
          
        
      </>

    )
  }

  export default Text