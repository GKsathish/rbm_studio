import React from 'react'

const Rcscheck = () => {
  return (
<div className="dashbord">
	<div className="row">
		<div >
			<form action="#" method="post"  >
				<div class="col-lg-5">
					<h4 class="tittle">Check RCS Enable Numbers</h4>
								<h3 >Upload File To Check</h3>
								<div class="form-group form-login">
								<input type="file" class="form-control" id="fileToUpload"  name="fileToUpload"  required />
								<small>.CSV format only with MSISDN Header</small>
								</div>


<br/><br/>					<div><center><i class="icon-upload"></i></center></div>
					<div class="form-group form-login">

								<button type="submit" name="uploadsubmit" class="rbmbnt" >Upload file</button>

								
					</div>	
					
				</div>					
			</form>

		</div>


		<div class="col-lg-5">

			<h4 class="tittle" >List of RCS Numbers</h4><br/>
 			<form method="post" action="#">
				
			<div class="download">


				
			

			
			<div class="rcscheck">
			<input type="radio"  value="<?php echo $rcsfilename ?>" name="rcsfilename" class="rcsfile" required />
            <p class="rcsfilename">Total RCS count </p>
             
            </div><br/>
			
			     </div><br/>
			<div><center><i class="icon-download"  ></i></center></div>
		
			<div class="form-group form-login">
			<button type="submit" name="download" class="rbmbnt">Download file</button>
            </div>
			</form>
		</div>
		</div>
</div>




  )
}

export default Rcscheck;