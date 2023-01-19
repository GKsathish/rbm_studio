import React from 'react'

const Login = () => {
  return (
    
<div class="login">
	<div class="row">
		<div class="col-lg-6" style={{padding: "0"}}>
			<img src="images/login_slide.jpeg" class="log-img" alt="image1"/>
		</div>
            <div class="col-lg-6">
                <div class="login-form">
                    <h2 class="hello">Hello!</h2>
                    <p class="hello-tag">Welcome to rbm.studio</p>
                    <br/>
                    <form action="#" method="POST">
                        <p class="hello-tag" style={{fontSize: "20"}}>Sign in</p>
                        <div class="form-group form-login">
                            <input type="text" class="form-control"  name="username" id="username" placeholder="E-mail" required/>
                        </div>
                        <div class="form-group form-login">
                            <span class="eye">
                                <i class="fa fa-eye-slash"></i>
                            </span>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Password" required />
                            
                        </div>
                        <center style={{color:"red"}}></center>
                        <div class="form-group form-login">
                        <a href="forgetpassword.php" class="forgotpassword">Forgot password</a>
                        </div>
                        <div class="form-group form-login">
                            <button  name='loginsubmit' type="submit" class="rbmbnt">Login</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
</div>


  )
}

export default Login