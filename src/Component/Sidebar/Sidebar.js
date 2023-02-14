import React, { useEffect } from 'react'
import { BsFillPersonFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaUserAlt, FaHome, FaLock, FaMoneyBill, FaUser, FaBars } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { BiCog, BiRupee } from "react-icons/bi";

import { AiFillDashboard, AiFillCheckSquare, AiFillSound } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { ImBook } from "react-icons/im";
import { MdSupportAgent } from "react-icons/md";
import './sidebar.css';
import LOGO from '../../images/Logob.jpg';
import $ from 'jquery';
import { Link } from "react-router-dom";

import 'jquery-ui-dist/jquery-ui';

function Sidebar() {
  useEffect(() => {


    return () => {
      const $button = document.querySelector('#sidebar-toggle');
      const $wrapper = document.querySelector('#wrapper');

      $button.addEventListener('click', (e) => {
        e.preventDefault();
        $wrapper.classList.toggle('toggled');
      });
    }
  }, [])

  return (

    <>


      <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
          <Link class="navbar-brand brand-logo " to="/Dashboard" style={{ padding: "0", margin: "0" }}><img src={LOGO} style={{ width: "100%", height: "70px" }} alt="logo" />

          </Link>
        </div>
        <ul class="sidebar-nav">
          {/* <li>
           
              <div class="nav-profile-image profileImage">
                <span id="firstName" class="fname"></span>
              </div>
              <div class="nav-profile-text d-flex flex-column">
                <span class="font-weight-bold" id="nameu">MOBILEMASALA</span>
                 
                    <button type="submit" name="getbalance" id="buttons2" class="rbmbnt2 col-lg-4 balance" value="View Balance" style={{ textAlign : "left",fontSize : "12px"}}>View Balance</button>
                  
             
                <p class="walletbalance">0.0</p>
              </div>
              <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            
          </li> */}
          <li>

            <Link to="/dashboard"><span className='menu-title' ><AiFillDashboard className='m-2' /></span><span className='linav'> Dashboard</span>  </Link>

          </li>

          <li>
              <Link to="/Creatagent"><span className='menu-title' ><FaUserAlt className='m-2' /></span><span className='linav'>Create Agent</span> </Link>
          </li>

          <li>
            <Link to="/Rcscheck"><span className='menu-title' ><AiFillCheckSquare className='m-2' /></span><span className='linav'>Rcs Check</span></Link>
          </li>

          <li id="pageSubmenu">
            <Link to="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><span className='menu-title' ><AiFillSound className='m-2' /></span><span className='linav'>Campaign</span></Link>
            <ul class="collapse list-unstyled" id="pageSubmenu">

              <li className='ml-4'>
                <Link to="/Richcard"><span className='menu-title' ><BsArrowRightCircleFill className='m-2' /></span><span className='linav'>Rich Card</span></Link>
              </li>

              <li className='ml-4'>
                <Link to="/Corousel"><span className='menu-title' ><BsArrowRightCircleFill className='m-2' /></span><span className='linav'>Corousel</span></Link>
              </li>

              <li className='ml-4'>
                <Link to="/text"><span className='menu-title' ><BsArrowRightCircleFill className='m-2' /></span><span className='linav'>Text</span></Link>
              </li>

            </ul>
          </li>

          <li id='pageSubmenu1'>
            <Link to="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><span className='menu-title' ><AiFillSound className='m-2' /></span><span className='linav'>Approval</span></Link>
            <ul class="collapse list-unstyled" id="pageSubmenu1">
              <li className='ml-4'>
                <Link to="/Campaigna"><span className='menu-title' ><BsArrowRightCircleFill className='m-2' /></span><span className='linav'>Campaign</span></Link>
              </li>

              <li className='ml-4'>
                <Link to="/Agent"><span className='menu-title' ><BsArrowRightCircleFill className='m-2' /></span><span className='linav'>Agent</span></Link>
              </li>

              <li className='ml-4'>
                <Link to="/User"><span className='menu-title' ><BsArrowRightCircleFill className='m-2' /></span><span className='linav'>User</span></Link>
              </li>

            </ul>
          </li>

          <li>
            <Link to="/Reports"><span className='menu-title' ><TbReportSearch className='m-2' /></span><span className='linav'>Reports</span></Link>
          </li>

          <li>
            <Link to="/billing"><span className='menu-title' ><BiRupee className='m-2' /></span><span className='linav'>Billing</span></Link>
          </li>
        </ul>
        <ul class="sidebar-nav" style={{  top: "83%" }}>
        
            <li >
              <Link to="/faq"><span className='menu-title' ><ImBook className='m-2' /></span><span className='linav'>FAQ's</span></Link>
            </li>
            <li className='my-2'>
              <Link to="/Support "><span className='menu-title' ><MdSupportAgent className='m-2' /></span><span className='linav'>Support</span></Link>
            </li>
        </ul>
      </aside>

      <div id="navbar-wrapper">
        <nav class="navbar navbar-inverse" style={{ backgroundColor: "#763b75", height: "70px" }}>
          <div class="container-fluid">
            <div class="navbar-header" style={{ width: "100%" }}>
              <Link to="#" class="navbar-brand" id="sidebar-toggle"><i class="fa fa-bars"></i></Link>




              <Dropdown style={{ float: "right" }}>
                <Dropdown.Toggle className='userbtn'>
                  <div className="user">
                    <BsFillPersonFill style={{ height: 50, width: 50 }} />
                    User
                    <br />Admin

                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-tog">
                  <Dropdown.Item href="/UserProfile">My Profile</Dropdown.Item>

                  <Dropdown.Item href="/Forgotpassword">Change Password</Dropdown.Item>
                  <Dropdown.Item href="/">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </div>
          </div>
        </nav>
      </div>


    </>
  )
}

export default Sidebar;