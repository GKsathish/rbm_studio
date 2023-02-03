import React from 'react'
import './faes.css'

const Forgetpassword = () => {
  return (
    <>
      
		
		<h3 className='fheading'>Forgot Password</h3>

		<form className="form"  >
					<p>Please enter your email address</p	>
					<h6>Email Address</h6><br/> 
					<input id="email_addy" name="email"  type="text"/><br/>
					<button type="submit" id="mybad" name="forgetpassword" class="btn btn-primary m-4 px-5" >GET PASSWORD</button><br/>
					<p>Do you want to login?  
						   <a class="login" href="/">Login</a>
					</p>

		</form>

		{/* <div style={{textAlign:'center',margin:20}}>
			
			<p>Please Enter your Email Id</p>
			 <h6>Email Address</h6>
			 <input type="search" /><br/>
			 <button className='btn btn-primary m-5 '>Get Password</button>
		</div>	
	 */}
     
      
    </>
  )
}

export default Forgetpassword
