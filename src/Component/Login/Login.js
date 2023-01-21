import React from 'react'
import './login.css'

const Login = () => {
  return (
    
	<div className="log-cont">
		<div className="l-cont">
            {/* <h1>Left area</h1> */}
                <div className="login">



<div className='log'>
                    <h2>Hello!</h2>
                    <p >Welcome to rbm.studio</p>
                    <br/>
                    <p >Sign in</p>
    
    </div>
                </div>
                

		</div>
            <div className='r-cont'>
                <div style={{textAlign:"center", margin:20  }}>
                  
                    <form action="#" method="POST">
                        <center><h2>Sign In</h2></center>
                        <div>
                            {/* <label>Email</label> */}
                            <input type="text" class="form-controll"  name="username" id="username" placeholder="E-mail" required/>
                        </div>
                        <div>
                            {/* <span class="eye">
                                <i class="fa fa-eye-slash"></i>
                            </span> */}
                            {/* <label>Password</label> */}

                            <input type="password" class="form-controll" name="password" id="password" placeholder="Password" required />
                            
                        </div>
                        
                        <div >
                        <a href="forgetpassword.php" class="forgotpassword">Forgot password</a>
                        </div>
                        <div >
                            <button  name='loginsubmit' type="submit" className="btnl">Login</button>
                        </div>
                    </form>
                </div>
                {/* <h1>Right area</h1> */}
            </div>
    </div>



  )
}

export default Login