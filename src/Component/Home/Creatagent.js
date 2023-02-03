// import {React,useState} from 'react'
// import './createagent.css'
// // import Createagent1 from './Createagent1';
// // import Createagent2 from './Createagent2';
// // import Createagent3 from '../Createagent3';

// const Creatagent = () => {
// 	// const {useState} = React;

// 	const [step,setStep] = useState(0);
// 	const [hideButton,setHideButton] = useState(0);
	
// 	const step_form = step;
	

// 	if(step_form==0){

// return (
// <Createagent1 /> );

// }else if(step_form==1){


// return (
// <Createagent2 /> );

// }
// else if(step_form==3){


// 	return (
// 	<Createagent3 /> );
	
// 	}
	

// }



// const Createagent1 = () => {
// 	const [step,setStep] = useState(0);

// 	return (
// 	  <div className="agt-cont">
// 	  <h4> rbm agent info </h4>
  
//   <div className='main'>
//   {/* left */}
  
  
   
//   <form className='left-cont'>
 
  
  
// 	{/* <!-- One "tab" for each step in the form: --> */}
// 	<div className="leftinside">
  
  
// 				  <h2 style={{marginLeft:15}} >Branding</h2>
// 				  <div class="form-groupCrt">
// 						  <label>Upload Banner</label><br/>
						  
					  
						 
// 							<small >Large Banner Image (1440x448)</small><br/>
// 									  <input type="file" class="form-controlCrt" id="imgInp" name="agentbanner"  required=""/>
					
						  
// 				  </div>
  
// 		  <div class="form-groupCrt">
// 						  <label>Upload Logo</label>
						  
// 						  <div class="input-group col-xs-12">
							
						   
// 							<small >Small Size Image (224x224)</small><br/>
// 									   <input type="file" class="form-controlCrt" id="imgInp1" name="agentlogo" required=""/>
						  
// 						  </div>
// 				</div>
  
//   <div class="form-groupCrt">
// 		  <label for="exampleInputUsername1">Display Name</label>
// 						<input type="text" onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)" class="form-controlCrt" id="displayname" name="agentname" placeholder="Display Name" maxlength="30" size="30" required=""/>
  
//   </div>
  
//   <div class="form-groupCrt">
  
//   <label for="exampleInputUsername1">Descripition</label>
// 						<textarea type="text" class="form-controlCrt" id="discription" name="agentdesc" placeholder="Descripition" maxlength="75" size="75" required=""></textarea>
			  
  
//   </div>
  
  
  
  
  
//   <div >
// 		{/* <button type="button" id="prevbtncrecre" onclick="nextPrev(-1)" className='btncrecre'>Previous</button> */}
// 		<button type="button" name="createAgent" id="nextbtncrecre"  onClick={()=>{setStep(step+2)}} className='btncrecre'>Next	</button>
// 	  </div>
  
  
  
  
// 	</div>
// 	{/* 2 */}
	
  
  
  
//   {/* 3 */}
  
	
  
	 
  
  
//   </form>
// 	{/* <!-- Circles which indicates the steps of the form: --> */}
	 
  
//   {/* Right */}
  
// 	 <div className='right-cont'>
// 	 <div className='fieldcontCtr'>
              
                          
// 			  <center>Message Preview</center><br/>
// 			  <div className='mystCtr'>

// 			  <div className="larger-banner"><br/>
// 					  <small>
// 						  <center ><b id="agenttarget">user name</b></center>
// 					  </small>
// 				  </div>
// 				  <div className="cardsviewdetails">
// 					  <p id="textpreview"><span id="textpreview2"></span></p>

// 				  </div>

// 			  </div>
				  
			
		  
	
  
// </div>
// 	 </div>
  
  
//   </div>
  
//   </div>
  
// 	)
//   }


//   const Createagent2 = () => {
// 	const [step,setStep] = useState(0);

// 	return (
// 		<div className="agt-cont">
// 	  <h4> rbm agent info </h4>
  
//   <div className='main'>
//   {/* left */}
  
  
   
//   <form className='left-cont'>
  
// 	{/* 2 */}
// 	<div >
  
// 	  <h2>Point of Contact</h2>
  
// 	  <div class="form-groupCrt">
  
// 			  <label for="exampleInputUsername1">Primary phone Number</label>
// 						  <input type="number" class="form-controlCrt" id="contact" name="agentpnumber" placeholder="Primary phone Number" maxlength="15" size="15" required=""/>
//   </div>
// 		  <div class="form-groupCrt">
  
// 				<label for="exampleInputUsername1">Label phone Number</label>
// 						<input type="text" class="form-controlCrt" onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)" id="labelforcontact" name="agentplabel" placeholder="Label for primary phone Number" required=""/>
					
// 		  </div>
  
// 		  <div class="form-groupCrt">
  
// 			  <label for="exampleInputUsername1">Primary Website</label>
// 						<input type="url" class="form-controlCrt" id="website" name="agentwebsite" placeholder="Primary Website" required=""/>
  
// 				  </div>
// 		  <div class="form-groupCrt">
  
// 			  <label for="exampleInputUsername1"> Label Primary Website</label>
// 						<input type="text" onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)" class="form-controlCrt" id="websitelabel" name="agentwebsitelabel" placeholder="Label Primary website" required=""/>
   
  
// 				  </div>
// 		  <div class="form-groupCrt">
  
// 			  <label for="exampleInputUsername1">Email</label>
// 						<input type="email" class="form-controlCrt" name="agentemail" id="Email" placeholder="Email" required=""/>
  
  
// 				  </div>
  
// 		  <div class="form-groupCrt">
  
// 			  <label for="exampleInputUsername1">Label Primary Email</label>
// 						<input type="email" class="form-controlCrt" onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)" id="Emaillabel" name="agentemaillabel" placeholder="Label for primary Email" required=""/>
  
  
// 				  </div>
  
// 		  <div class="form-groupCrt">
  
// 			  <label for="exampleInputPassword1">Privacy Policy*</label>
// 						<input type="url" class="form-controlCrt" id="Privacy_Policy" name="privacy" placeholder="Please enter Privacy policy URL" required=""/>
			  
// 				  </div>
  
// 		  <div class="form-groupCrt">
  
// 			  <label for="exampleInputConfirmPassword1">Terms and Conditions*</label>
// 						<input type="url" class="form-controlCrt" id="terms_of_Services" name="terms" placeholder="Please enter Terms and Conditions" required=""/>
  
  
// 				  </div>
  
  
  
// 				  <div >
// 		<button type="button" id="prevbtncrecre" onclick="nextPrev(-1)" className='btncrecre'>Previous</button>
// 		<button type="button" name="createAgent" id="nextbtncrecre" onclick="nextPrev(1)" className='btncrecre'>Next</button>
// 	  </div>
  
  
// 	</div>
  
  
  
//   {/* 3 */}
  
	
	 
  
  
//   </form>
// 	{/* <!-- Circles which indicates the steps of the form: --> */}
	 
  
//   {/* Right */}
  
// 	 <div className='right-cont'>
// 	 <div className='fieldcontCtr'>
              
                          
// 			  <center>Message Preview</center><br/>
// 			  <div className='mystCtr'>

// 			  <div className="larger-banner"><br/>
// 					  <small>
// 						  <center ><b id="agenttarget">user name</b></center>
// 					  </small>
// 				  </div>
// 				  <div className="cardsviewdetails">
// 					  <p id="textpreview"><span id="textpreview2"></span></p>

// 				  </div>

// 			  </div>
				  
			
		  
	
  
// </div>
// 	 </div>
  
  
//   </div>
  
//   </div>
  
// 	)
//   }
  
 
//   const Createagent3 = () => {
// 	const [step,setStep] = useState(0);
// 	// const step_form = step+1;

// 	return (
// 	  <div className="agt-cont">
// 	  <h4> rbm agent info </h4>
  
//   <div className='main'>
//   {/* left */}
  
  
   
//   <form className='left-cont'>
  
  
  
//   {/* 3 */}
  
// 	<div >
  
// 	  <h2 class="rbm_agent_heading">Agent Experince</h2>
// 	  <div class="form-groupCrt">
// 	  <label for="mob">Agent Experince</label>
// 	  <input type="text" name="agent_experince" class="form-controlCrt" id="mob" placeholder="Please Provide your Experince" required=""/>
// 	  </div>
// 	  <div class="form-groupCrt">
// 	  <label for="address">What actions trigger Messages to users?</label>
// 	  <textarea class="form-controlCrt" name="actions" placeholder="What actions trigger Messages to users?" required=""></textarea>
// 	  </div>
  
		  
  
  
//   <div class="form-groupCrt">
  
//   <label for="address">Select the Required Operator
//   </label>
//   <div class="row_operator">
// 				  <div class="coloumn_operator">
  
// 								  <input type="checkbox" name="operator[]" value="Airtel" class="form-check-input" required=""/>  
  
// 						  <svg width="90" height="40">
// 							  <image href="https://assets.airtel.in/static-assets/new-home/img/airtel-red.svg?v=1653038873041" width="90" height="40"></image>
// 						  </svg>
					  
// 					  </div>
// 					  <div class="coloumn_operator">
// 						  <input type="checkbox" name="operator[]" value="VI" class="form-check-input" required=""/>  
// 						  <svg width="90" height="40">
// 							  <image href="https://www.myvi.in/content/dam/neogold/vi-logo.svg" width="90" height="40"></image>
// 						  </svg>
					  
// 				  </div>
// 						  <div class="coloumn_operator">
// 						  <input type="checkbox" name="operator[]" value="Bsnl" class="form-check-input" required=""/>  
// 							  <svg width="90" height="40">
// 							  <image href="https://www.bsnl.co.in/Logo-New.png" width="90" height="40"></image>
  
// 						  </svg>
					  
// 					  </div>	
						  
// 					  <div class="coloumn_operator">
					  
// 							  <input type="checkbox" name="operator[]" value="Jio" class="form-check-input" required=""/>  
						  
// 						  <svg width="90" height="40">
// 							  <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/800px-Reliance_Jio_Logo_%28October_2015%29.svg.png" width="90" height="40"></image>
// 						  </svg>
					  
// 					  </div>
  
  
//   </div>
//   </div>
  
//   <div >
// 		<button type="button" id="prevbtncrecre" onclick="nextPrev(-1)" className='btncrecre'>Previous</button>
// 		<button type="button" name="createAgent" id="nextbtncrecre"  onClick={()=>{setStep(step+2)}} className='btncrecre'>Submit</button>
// 	  </div>
  
// 	</div>
  
	 
  
  
//   </form>
// 	{/* <!-- Circles which indicates the steps of the form: --> */}
	 
  
//   {/* Right */}
  
// 	 <div className='right-cont'>
// 	 <div className='fieldcontCtr'>
              
                          
// 			  <center>Message Preview</center><br/>
// 			  <div className='mystCtr'>

// 			  <div className="larger-banner"><br/>
// 					  <small>
// 						  <center ><b id="agenttarget">user name</b></center>
// 					  </small>
// 				  </div>
// 				  <div className="cardsviewdetails">
// 					  <p id="textpreview"><span id="textpreview2"></span></p>

// 				  </div>

// 			  </div>
				  
			
		  
	
  
// </div>
// 	 </div>
  
  
//   </div>
  
//   </div>
  
	  
// 	)
//   }
  

// export  default Creatagent
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import './createagent.css'

// import Createagent1 from './Createagent1';
const Creatagent = ()=>{
	const {useState} = React;
	const [step,setStep] = useState(0);
	const [hideButton,setHideButton] = useState(0);
	
	const step_form = step+1;
	
	const Form = ()=>{
	
	if(step==0){
	
	return (
	<Createagent1 /> );
	
	}else if(step==1){
	
	return (
	<Createagent2 /> );
	
	}else if(step==2){
	
	return (
	<Createagent3 /> );
	
	}	
	}
	const Createagent1 = () => {
		return (
		  <div>
		  <h4> rbm agent info </h4>
	  
	  <div className='main'>
	  {/* left */}
	  
	  
	   
	  <form className='left-cont'>
	  {/* <div className='num'> 
		  <span ><p>1</p></span> 
		  <span ><p>2</p></span>
		  <span ><p>3</p></span>
		</div>
	   */}
	  
		{/* <!-- One "tab" for each step in the form: --> */}
		<div className="leftinside">
	  
	  
					  <h2 style={{marginLeft:15}} >Branding</h2>
					  <div class="form-groupCrt">
							  <label>Upload Banner</label><br/>
							  
						  
							 
								<small >Large Banner Image (1440x448)</small><br/>
										  <input type="file" class="form-controlCrt" id="imgInp" name="agentbanner"  required=""/>
						
							  
					  </div>
	  
			  <div class="form-groupCrt">
							  <label>Upload Logo</label>
							  
							  <div class="input-group col-xs-12">
								
							   
								<small >Small Size Image (224x224)</small><br/>
										   <input type="file" class="form-controlCrt" id="imgInp1" name="agentlogo" required=""/>
							  
							  </div>
					</div>
	  
	  <div class="form-groupCrt">
			  <label for="exampleInputUsername1">Display Name</label>
							<input type="text" onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)" class="form-controlCrt" id="displayname" name="agentname" placeholder="Display Name" maxlength="30" size="30" required=""/>
	  
	  </div>
	  
	  <div class="form-groupCrt">
	  
	  <label for="exampleInputUsername1">Descripition</label>
							<textarea type="text" class="form-controlCrt" id="discription" name="agentdesc" placeholder="Descripition" maxlength="75" size="75" required=""></textarea>
				  
	  
	  </div>
	  
	  
	  
	  
	  
	  <div >
			{/* <button type="button" id="prevbtncre" onclick="nextPrev(-1)" className='btncre'>Previous</button> */}
			<button type="button" name="createAgent" id="nextbtncre" onClick={()=>{setStep(step+1)}} className='btncre'>Next	</button>
		  </div>
	  
	  
	  
	  
		</div>
		{/* 2 */}
		
	  
	  
	  
	  {/* 3 */}
	  
		
	  
		 
	  
	  
	  </form>
		{/* <!-- Circles which indicates the steps of the form: --> */}
		 
	  
	  {/* Right */}
	  
		 <div className='right-cont'>
		 <div className='fieldcontT1'>
              
                          
			  {/* <center>Message Preview</center><br/> */}
			  <div className='mystCtr'>

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
	  
	  </div>
	  
		)
	  }
	
	const Createagent2 = () => {
		return (
	  <div>
		  <h4> rbm agent info </h4>
	  
	  <div className='main'>
	  {/* left */}
	  
	  
	   
	  <form className='left-cont'>
	  
		{/* 2 */}
		<div >
	  
		  <h2>Point of Contact</h2>
	  
		  <div class="form-groupCrt">
	  
				  <label for="exampleInputUsername1">Primary phone Number</label>
							  <input type="number" class="form-controlCrt" id="contact" name="agentpnumber" placeholder="Primary phone Number" maxlength="15" size="15" required=""/>
	  </div>
			  <div class="form-groupCrt">
	  
					<label for="exampleInputUsername1">Label phone Number</label>
							<input type="text" class="form-controlCrt" onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)" id="labelforcontact" name="agentplabel" placeholder="Label for primary phone Number" required=""/>
						
			  </div>
	  
			  <div class="form-groupCrt">
	  
				  <label for="exampleInputUsername1">Primary Website</label>
							<input type="url" class="form-controlCrt" id="website" name="agentwebsite" placeholder="Primary Website" required=""/>
	  
					  </div>
			  <div class="form-groupCrt">
	  
				  <label for="exampleInputUsername1"> Label Primary Website</label>
							<input type="text" onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)" class="form-controlCrt" id="websitelabel" name="agentwebsitelabel" placeholder="Label Primary website" required=""/>
	   
	  
					  </div>
			  <div class="form-groupCrt">
	  
				  <label for="exampleInputUsername1">Email</label>
							<input type="email" class="form-controlCrt" name="agentemail" id="Email" placeholder="Email" required=""/>
	  
	  
					  </div>
	  
			  <div class="form-groupCrt">
	  
				  <label for="exampleInputUsername1">Label Primary Email</label>
							<input type="email" class="form-controlCrt" onkeydown="return /^[ A-Za-z_@./#&amp;+-]*$/i.test(event.key)" id="Emaillabel" name="agentemaillabel" placeholder="Label for primary Email" required=""/>
	  
	  
					  </div>
	  
			  <div class="form-groupCrt">
	  
				  <label for="exampleInputPassword1">Privacy Policy*</label>
							<input type="url" class="form-controlCrt" id="Privacy_Policy" name="privacy" placeholder="Please enter Privacy policy URL" required=""/>
				  
					  </div>
	  
			  <div class="form-groupCrt">
	  
				  <label for="exampleInputConfirmPassword1">Terms and Conditions*</label>
							<input type="url" class="form-controlCrt" id="terms_of_Services" name="terms" placeholder="Please enter Terms and Conditions" required=""/>
	  
	  
					  </div>
	  
	  
	  
					  <div >
			<button type="button" id="prevbtncre"  onClick={()=>{setStep(step-1)}}  className='btncre'>Previous</button>
			<button type="button" name="createAgent" id="nextbtncre" onClick={()=>{setStep(step+1)}}  className='btncre'>Next</button>
		            </div>
	  
	  
		
	  </div>
	  </form>
	  <div className='right-cont'>
		 <div className='fieldcontT1'>
              
                          
			  {/* <center style={{textAlign:'center'}}>Message Preview</nter><br/> */}
			  <div className='mystCtr'>

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
	  
	  </div>
	  
		)
	  }
	  
	
	  const Createagent3 = () => {
		return (
		  <div>
		  <h4> rbm agent info </h4>
	  
	  <div className='main'>
	  {/* left */}
	  
	  
	   
	  <form className='left-cont'>
	  
	  
	  
	  {/* 3 */}
	  
		<div >
	  
		  <h2 class="rbm_agent_heading">Agent Experince</h2>
		  <div class="form-groupCrt">
		  <label for="mob">Agent Experince</label>
		  <input type="text" name="agent_experince" class="form-controlCrt" id="mob" placeholder="Please Provide your Experince" required=""/>
		  </div>
		  <div class="form-groupCrt">
		  <label for="address">What actions trigger Messages to users?</label>
		  <textarea class="form-controlCrt" name="actions" placeholder="What actions trigger Messages to users?" required=""></textarea>
		  </div>
	  
			  
	  
	  
	  <div class="form-groupCrt">
	  
	  <label for="address">Select the Required Operator
	  </label>
	  <div class="row_operator">
					  <div class="coloumn_operator">
	  
									  <input type="checkbox" name="operator[]" value="Airtel" class="form-check-input" required=""/>  
	  
							  <svg width="90" height="40">
								  <image href="https://assets.airtel.in/static-assets/new-home/img/airtel-red.svg?v=1653038873041" width="90" height="40"></image>
							  </svg>
						  
						  </div>
						  <div class="coloumn_operator">
							  <input type="checkbox" name="operator[]" value="VI" class="form-check-input" required=""/>  
							  <svg width="90" height="40">
								  <image href="https://www.myvi.in/content/dam/neogold/vi-logo.svg" width="90" height="40"></image>
							  </svg>
						  
					  </div>
							  <div class="coloumn_operator">
							  <input type="checkbox" name="operator[]" value="Bsnl" class="form-check-input" required=""/>  
								  <svg width="90" height="40">
								  <image href="https://www.bsnl.co.in/Logo-New.png" width="90" height="40"></image>
	  
							  </svg>
						  
						  </div>	
							  
						  <div class="coloumn_operator">
						  
								  <input type="checkbox" name="operator[]" value="Jio" class="form-check-input" required=""/>  
							  
							  <svg width="90" height="40">
								  <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/800px-Reliance_Jio_Logo_%28October_2015%29.svg.png" width="90" height="40"></image>
							  </svg>
						  
						  </div>
	  
	  
	  </div>
	  </div>
	  
	  <div >
			<button type="button" id="prevbtncre" onclick="nextPrev(-1)"  onClick={()=>{setStep(step-1)}}  className='btncre'>Previous</button>
			<button type="button" name="createAgent" id="nextbtncre" onClick={()=>{setStep(step+1)}}  className='btncre'>Submit</button>
		  </div>
	  
		</div>
	  
		 
	  
	  
	  </form>
		{/* <!-- Circles which indicates the steps of the form: --> */}
		 
	  
	  {/* Right */}
	  
		 <div className='right-cont'>
		 <div className='fieldcontT1'>
              
                          
			  {/* <center style={{textAlign:'center'}}>Message Preview</nter><br/> */}
			  <div className='mystCtr'>

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
	  
	  </div>
	  
		  
		)
	  }
	  
	
	
	
	
	
	return (
	
	<>
	
	<Header/>
	<Sidebar/>
	
	
				<div className="agt-cont">{
					<Form />}
					</div>
	
			
		
	</>
	);
	
	}
	
	export default Creatagent