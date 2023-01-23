import React from 'react'
import './header.css'

const Header = () => {
  return (
    
    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row" >
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center" >
        <a class="navbar-brand brand-logo" href="Dashboard.php"><img src="Logob.jpg" alt="logo"/>
        </a>
    </div>
<div class="navbar-menu-wrapper d-flex align-items-stretch" style="color:#fff;">
       <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <i class="icon-align-justify"></i>
        </button>

<div class="form-group" style= {{marginTop: 22}}>

<select  class="form-control sel-agent" name="agentname" required="">

<option selected="" disabled="" hidden=""> MOBILEMASALA </option>






<option value="Dashboard.php?a=TU9CSUxFTUFTQUxB">MOBILEMASALA</option><option value="Dashboard.php?a=WklORw==">ZING</option>





</select>
      </div>

  
<ul class="navbar-nav navbar-nav-right">



            <li class="nav-item nav-profile dropdown">
                <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="nav-profile-img">
                        <i class="fa-duotone fa-user" ></i>
                    </div>
                    <div class="nav-profile-text" >
  <p class="text-black" >Swetha</p>
  <small>


ADMIN
</small>
                    </div>
                </a>
                <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                    <a class="dropdown-item">
                       
  
</a><a class="dropdown-item" href="User_Profile.php">
                        <i class="fa-duotone fa-user" ></i> My profile</a>


                    <a class="dropdown-item" href="changepassword.php">
                        <i class="icon-cog" ></i> Change Password </a>

                    <a class="dropdown-item" href="logout.php">
                          <i class="icon-off" ></i> Signout </a>


                </div>
            </li>
        </ul>
    </div>
</nav>
    
  )
}

export default Header
