import React from 'react'

const Creatagent = () => {
  return (
    <div>
      <div class="dashbord">
	<div class="row">
		<div class="col-lg-8">
			<div class="agent_form">
				<div >
				<h4 class="tittle">rbm Agent</h4>
				<p>This appears when your agent sends a message to user</p>
				<form runat="server">
					<div class="row">
						<h3 >Title & Images</h3>
					<div class="col-lg-6">

					 <div >
					  <small >Large Banner Image (1440x448)</small><br/>
					   <input type="file" class="form-control" id="imgInp" name="upload"  required />
				  	</div>
					</div>
					<div class="col-lg-6">
				  	<div>
					  <small >Small Size Image (224x244)</small><br/>
					   <input type="file" class="form-control" id="imgInp1" name="upload"  required/>
				  	</div>
				  	</div>
				  </div><br/>
				    <div class="row">
					<div class="col-lg-6">
					 <div >
				
					   <input type="text" class="form-control contact" id="displayname" name="number"  placeholder="Display Name" required/>
				  	</div>

					</div>
					<div class="col-lg-6">
				  	<div>
				  		
				  		
					   <input type="text" class="form-control contact" id="discription" name="labeltext"  placeholder="Description" maxlength="120"  size="120" required/>
				  	</div>
				  	</div>
				  </div><br/>
				  <div class="row">
				  	<h3 >Contact Details</h3><br/>
					<div class="col-lg-6">
					 <div>
					   <input type="text" class="form-control contact" id="contact" name="number"  placeholder="Primary Phone Number" maxlength="10"  size="10"required/>
				  	</div>
					</div>
					<div class="col-lg-6">
				  	<div>
				  		
					   <input type="text" class="form-control contact" id="labelforcontact" name="labeltext"  placeholder="Label for primary phone number" required/>
				  	</div>
				  	</div>
				  	<div class="col-lg-6">
					 <div>
					   <input type="text" class="form-control contact" id="website" name="number"  placeholder="Primary Website" required/>
				  	 </div>
					</div>
				  </div>
				  <br/>
				 
				  <div class="row">
				  	<h3 >Email</h3><br/>
					<div class="col-lg-6">
						
					 <div>
					   <input type="text" class="form-control contact" id="Email" name="number"  placeholder="Primary Email" required />
				  	</div>
					</div>
					
					<div class="col-lg-6">
				  	<div>
					   <input type="text" class="form-control contact" id="Emaillabel" name="labeltext"  placeholder="Label for primary Email" required />
				  	</div>
				  	</div>
				  </div>
				</form>
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<h4 ><small><center class="previewtitle"><b>Preview Your Agent</b></center></small></h4>
			<div class="img-preview">
				<div class="larger-banner">
					<small><center ><b>Info & options</b></center></small>
					<img id="blah" src="#" alt="text"/>
					<div id='displaynametarget'>
						
					</div>
					<small id='discriptiontarget'></small>
					<b id="websitetarget"></b>

					<div class="row info_row">
						<div class="col-lg-6 col-info">
							<p class="info"><small>Info</small></p>

						</div>

						<div class="col-lg-6 col-info">
							<p class="info"><small>Options</small></p>
						</div>
						<div class="infoheight">
							<i class="icon-phone-sign" ></i>
							<span id="contacttarget"></span>
							<div id="labelforcontacttarget"></div>
						</div>
						
						<div class="infoheight">
							<i class="icon-envelope" ></i>
							<span id="Emailtarget"></span>
							<div id="Emaillabeltarget"></div>
						</div>
						

					</div>
					

				</div> 				
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default Creatagent;
