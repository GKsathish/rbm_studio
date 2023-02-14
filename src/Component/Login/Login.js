import React from 'react';
// import "font-awesome/css/font-awesome.min.css";

import './login.css';

function Login() {

    function reply_click(event) {
        console.log(event);
        const container = document.getElementById('box-sign');

        if (event === "signIn") {
            container.classList.remove('right-panel-active');
        }
        if (event === "signUp") {
            container.classList.add('right-panel-active');
        }

    }

    return (
        <>
            <script src="jquery.min.js"></script>
            {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link> */}

            <div className="box-sign right-panel-active" id="box-sign">

                <div className="form-box-sign sign-in-box-sign">
                    <form className='form-signup' action="#" method="POST">
                        <h1>Create Account</h1>
                        <div className="row">
                            <div className="columnsignup">
                                <label>Comapany Name</label>
                                <input name='companyname' type="text" placeholder="Company Name" />
                            </div>
                            <div className="columnsignup">
                                <label>logo</label>
                                <input type="file" name="imagefile" className="form-control" id="imgrichcard" placeholder="" accept=".jpg,.png,.gif,.jpeg" required />
                            </div>
                            <div className="columnsignup">
                                <label>User Name</label>
                                <input name='username' type="text" placeholder="Username" />
                            </div>
                            <div className="columnsignup">
                                <label>Password</label>
                                <input name='password' type="current-password" placeholder="Password" />
                            </div>
                            <div className="columnsignup">
                                <label>Email</label>
                                <input name='emailid' type="email" placeholder="Email" />
                            </div>
                            <div className="columnsignup">
                                <label>Mobile Number</label>
                                <input name='mobilenumber' type="text" placeholder="Mobile number" />
                            </div>
                        </div>
                        <label><b>Banking Details</b></label>
                        <div className="row">
                            <div className="columnsignup">
                                <label>Beneficiary Name</label>
                                <input name='beneficiaryname' type="text" placeholder="Beneficiary Name" />
                            </div>
                            <div className="columnsignup">
                                <label>Account Number</label>
                                <input name='accountnumber' type="text" placeholder="Account Number" />
                            </div>
                            <div className="columnsignup">
                                <label>Bank Name</label>
                                <input name='bankname' type="text" placeholder="Bank Name" />
                            </div>
                            <div className="columnsignup">
                                <label>IFCS Code</label>
                                <input name='ifcscode' type="text" placeholder="IFSC/Swift Code" />
                            </div>
                            <div className="columnsignup">
                                <label>GSTIN Number</label>
                                <input name='gstinnumber' type="text" placeholder="GSTIN Number" />
                            </div>
                            <div className="columnsignup">
                                <label>PAN Number</label>
                                <input name='pancardnumber' type="text" placeholder="PAN card Number" />
                            </div>
                            <div className="columnsignup">
                                <label>Address</label>
                                <input name='address' type="text" placeholder="Address" />
                            </div>
                            <div className="columnsignup">
                                <label>Country</label>

                                {/* <div className="form-group"> */}
                                    <select className="form-control" name="country" id="country" required="">
                                        <option>--Select Country--</option>


                                    </select>
                                {/* </div> */}
                            </div>
                            <div className="columnsignup">
                                {/* <div className="form-group"> */}
                                    <label>State</label>
                                    <select className="form-control" name="state" id="state" required="">
                                        <option>--Select State--</option>

                                    </select>
                                {/* </div> */}
                            </div>
                        </div>
                        <button name='signupsubmit' className="login-signup-button" type="submit" >Sign up</button>
                    </form>
                </div>

                <div className="form-box-sign sign-up-box-sign">
                    <form  className='form-signin' action="#" method="post">
                        <h1>Sign in</h1>
                        <input name="username" id="user_name" type="email" placeholder="Email" />
                        <input name="password" id="Password" type="current-password" placeholder="Password" />
                        {/* <a href="forgetpassword.php">Forgot your password?</a> */}
                        <button name='loginsubmit' className="login-signup-button" type="submit" >Login</button>
                    </form>
                </div>


                <div className="overlay-box-sign">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            <p className='ptag_color'>To keep connected with us please login with your personal info</p>
                            <button className="ghost" onClick={e => reply_click(e.target.id)} id="signUp">Sign IN</button>
                        </div>
                        <div className="overlay-panel overlay-left">
                            <h1>Hello,</h1>
                            <p className='ptag_color'>Enter your personal details and start journey with us</p>
                            <button className="ghost" onClick={e => reply_click(e.target.id)} id="signIn">Sign UP</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

};

export default Login;