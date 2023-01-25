import React from 'react'

const Createagent2 = () => {
  return (
<div className="agt-cont">
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
      <button type="button" id="prevBtn" onclick="nextPrev(-1)" className='btn'>Previous</button>
      <button type="button" name="createAgent" id="nextBtn" onclick="nextPrev(1)" className='btn'>Next</button>
    </div>


  </div>


</div>
</div>

  )
}

export default Createagent2