import React from 'react'
import './createagent.css'

const Createagent3 = () => {
  return (
    <div className="agt-cont">
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
      <button type="button" id="prevBtn" onclick="nextPrev(-1)" className='btn'>Previous</button>
      <button type="button" name="createAgent" id="nextBtn" onclick="nextPrev(1)" className='btn'>Submit</button>
    </div>

  </div>

   


</form>
  {/* <!-- Circles which indicates the steps of the form: --> */}
   

{/* Right */}

   <div className='right-cont'>

   </div>


</div>

</div>

    
  )
}

export default Createagent3