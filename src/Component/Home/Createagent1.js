import React from 'react'
import './createagent.css'

const Createagent1 = () => {
  return (
	<div className="agt-cont">
	<h4> rbm agent info </h4>

<div className='main'>
{/* left */}


 
<form className='left-cont'>
<div className='num'> 
    <span ><p>1</p></span> 
    <span ><p>2</p></span>
    <span ><p>3</p></span>
  </div>


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
      {/* <button type="button" id="prevBtn" onclick="nextPrev(-1)" className='btn'>Previous</button> */}
      <button type="button" name="createAgent" id="nextBtn" onclick="nextPrev(1)" className='btn'>Next	</button>
    </div>




  </div>
  {/* 2 */}
  



{/* 3 */}

  

   


</form>
  {/* <!-- Circles which indicates the steps of the form: --> */}
   

{/* Right */}

   <div className='right-cont'>

   </div>


</div>

</div>

  )
}

export default Createagent1