import React from 'react';
// import "font-awesome/css/font-awesome.min.css";

import './test.css';

import 'jquery';

function Login() {

    function reply_click(event) {
        console.log(event);
        const container = document.getElementById('box-sign');

        if (event === "signIn") {
            container.classNameList.remove('right-panel-active');
        }
        if (event === "signUp") {
            container.classNameList.add('right-panel-active');
        }

    }

    return (
        <>
            <script src="jquery.min.js"></script>
            {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link> */}

<div className="container right-panel-active" id="container">

    <div className="form-container sign-in-container">
        <form action="#" autoComplete="off" encType="multipart/form-data" method="POST">
            <h1>Create Account</h1>
            <div className="row">
                <div className="column">
                    <label>Comapany Name</label>
                    <input name='companyname' type="text" placeholder="Company Name" />
                </div>
                <div className="column">
                    <label>logo</label>
                    <input type="file" name="imagefile" className="form-control" id="imgrichcard" placeholder="" accept=".jpg,.png,.gif,.jpeg" required />
                </div>
                <div className="column">
                    <label>User Name</label>
                    <input name='username' type="text" placeholder="Username" />
                </div>
                <div className="column">
                    <label>Password</label>
                    <input name='password' type="password" placeholder="Password" />
                </div>
                <div className="column">
                    <label>Email</label>
                    <input name='emailid' type="email" placeholder="Email" />
                </div>
                <div className="column">
                    <label>Mobile Number</label>
                    <input name='mobilenumber' type="text" placeholder="Mobile number" />
                </div>
            </div>
            <label><b>Banking Details</b></label>
            <div className="row">
                <div className="column">
                    <label>Beneficiary Name</label>
                    <input name='beneficiaryname' type="text" placeholder="Beneficiary Name" />
                </div>
                <div className="column">
                    <label>Account Number</label>
                    <input name='accountnumber' type="text" placeholder="Account Number" />
                </div>
                <div className="column">
                    <label>Bank Name</label>
                    <input name='bankname' type="text" placeholder="Bank Name" />
                </div>
                <div className="column">
                    <label>IFCS Code</label>
                    <input name='ifcscode' type="text" placeholder="IFSC/Swift Code" />
                </div>
                <div className="column">
                    <label>GSTIN Number</label>
                    <input name='gstinnumber' type="text" placeholder="GSTIN Number" />
                </div>
                <div className="column">
                    <label>PAN Number</label>
                    <input name='pancardnumber' type="text" placeholder="PAN card Number" />
                </div>
                <div className="column">
                    <label>Address</label>
                    <input name='address' type="text" placeholder="Address" />
                </div>
                <div className="column" style={{ marginTop:"8px"}}>
                    <label>Country</label>


                    <div className="form-group">
                        <select className="form-control" name="country" id="country" style={{ width: "100%"}} required="">
                            <option>--Select Country--</option>

                       
                        </select>
                    </div>


                </div>
                <div className="column">
                    <div className="form-group">
                        <label>State</label>
                        <select className="form-control" name="state" id="state" style={{width: "100%"}} required="">
                            <option>--Select State--</option>

                        </select>
                    </div>




                </div>
            </div>
            <button name='signupsubmit' type="submit" className="rbmbnt">Sign up</button>
        </form>
    </div>

    <div className="form-container sign-up-container">
        <form action="#" autoComplete="off" encType="multipart/form-data" method="post">
            <h1>Sign in</h1>
            <input name="username" id="user_name" type="email" placeholder="Email" />
            <input name="password" id="Password" type="password" placeholder="Password" />
            <a href="forgetpassword.php">Forgot your password?</a>
            <button name='loginsubmit' type="submit" className="rbmbnt">Login</button>
        </form>
    </div>


    <div className="overlay-container">
        <div className="overlay">
            <div className="overlay-panel overlay-right">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" onClick={e => reply_click(e.target.id)} id="signUp">Sign IN</button>
            </div>
            <div className="overlay-panel overlay-left">
                <h1>Hello,</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" onClick={e => reply_click(e.target.id)} id="signIn">Sign UP</button>
            </div>
        </div>
    </div>
</div>

        </>
    )

};

export default Login;