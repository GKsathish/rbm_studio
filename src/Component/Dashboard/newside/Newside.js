// import React from 'react'

// const Newside = () => {
//   return (
//     <>
// {/* <!-- Third Level Sidebar --> */}
// <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark pmd-navbar pmd-z-depth">
//     <a href="javascript:void(0);" data-target="basicSidebar" data-placement="left" data-position="slidepush" is-open="true" is-open-width="1000" class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect pmd-sidebar-toggle"><i class="material-icons md-light">menu</i></a>
//     <a class="navbar-brand" href="javascript:void(0);">Brand</a>

//     {/* <!-- Navbar Right icon -->       */}
//     <div class="pmd-navbar-right-icon ml-auto"> 
//       <a href="javascript:void(0);" class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect"><i class="material-icons pmd-sm md-light">search</i></a>
//     </div>
// </nav>

// <div id="pmd-main">
//     {/* <!-- Left sidebar --> */}
//     <aside id="basicSidebar" class="pmd-sidebar bg-light pmd-z-depth" role="navigation">
//         <ul class="nav flex-column pmd-sidebar-nav">
//             <li class="nav-item">
//                 <a class="nav-link" data-toggle="collapse" href="#inbox" role="button" aria-expanded="true" aria-controls="inbox">
//                     <i class="material-icons pmd-list-icon pmd-sm">inbox</i>
//                     <span class="media-body">Inbox</span>
//                     <i class="material-icons md-light ml-2 pmd-sm">more_vert</i>
//                 </a>
//                 <ul class="collapse show" id="inbox" data-parent="#basicSidebar">
//                     <li class="nav-item">
//                         <a class="nav-link" data-toggle="collapse" href="#profile" role="button" aria-expanded="true" aria-controls="profile">
//                             <i class="material-icons pmd-list-icon pmd-sm">account_circle</i>
//                             <span class="media-body">View Profile</span>
//                             <i class="material-icons md-light ml-2 pmd-sm">more_vert</i>
//                         </a>
//                         <ul class="collapse show" id="profile">
//                             <li class="nav-item">
//                                 <a class="nav-link" href="javascript:void(0);"><span class="media-body">Personal Information</span></a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="javascript:void(0);"><span class="media-body">Educational Qualification</span></a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="javascript:void(0);"><span class="media-body">Work and Experience</span></a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="javascript:void(0);">
//                             <i class="material-icons pmd-list-icon pmd-sm">settings</i>
//                             <span class="media-body">Settings</span>
//                         </a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="javascript:void(0);">
//                             <i class="material-icons pmd-list-icon pmd-sm">settings_power</i>
//                             <span class="media-body">Logout</span>
//                         </a>
//                     </li>
//                 </ul>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link active" href="javascript:void(0);">
//                     <i class="material-icons pmd-list-icon pmd-sm">star</i>
//                     <span class="media-body">Stared</span>
//                 </a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="javascript:void(0);">
//                     <i class="material-icons pmd-list-icon pmd-sm">send</i>
//                     <span class="media-body">Sent Email</span>
//                 </a>
//             </li>
//         </ul>
//     </aside>
//     <div class="pmd-sidebar-overlay"></div>
//     {/* <!-- Start Content --> */}
//     <div class="pmd-content custom-pmd-content" id="content">
//         <h2 class="headline">Sidebar Constructor</h2>
//         <p>This structure shows a permanent app bar with a floating action button. The app bar absorbs elements from the tablet and mobile bottom bars.</p>
//         <p style="margin-bottom:0;">An optional bottom bar can be added for additional functionality or action overflow. A side nav overlays all other structural elements. A right nav menu can be accessed temporarily or pinned for permanent display.<br/><br/></p>
//     </div>
// </div>

//     </>
//   )
// }

// export default Newside;



// import React,{useEffect} from 'react';
// import $ from 'jquery';
// import 'jquery-ui-dist/jquery-ui';


// import './new.css';

// const Newside = () => {
//   useEffect(()=>
//   {
// $("#menu-toggle").click(function(e) {
// e.preventDefault();
// $("#wrapper").toggleClass("toggled");
// });
// $("#menu-toggle-2").click(function(e) {
// e.preventDefault();
// $("#wrapper").toggleClass("toggled-2");
// $('#menu ul').hide();
// });

// function initMenu() {
// $('#menu ul').hide();
// $('#menu ul').children('.current').parent().show();
// //$('#menu ul:first').show();
// $('#menu li a').click(
//  function() {
//     var checkElement = $(this).next();
//     if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
//        return false;
//     }
//     if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
//        $('#menu ul:visible').slideUp('normal');
//        checkElement.slideDown('normal');
//        return false;
//     }
//  }
// );
// }
// $(document).ready(function() {
// initMenu();
// });
//   }
// ,[])
//         return (
//           <div>
     
//             <nav className="navbar navbar-default no-margin">
//               {/* Brand and toggle get grouped for better mobile display */}
//               <div className="navbar-header fixed-brand">
//                 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle">
//                   <span className="glyphicon glyphicon-th-large" aria-hidden="true" />
//                 </button>
//                 <a className="navbar-brand" href="#"><i className="fa fa-rocket fa-4" /> M-33</a>
//               </div>
//               {/* navbar-header*/}
//               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//                 <ul className="nav navbar-nav">
//                   <li className="active">
//                     <button className="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2"> <span className="glyphicon glyphicon-th-large" aria-hidden="true" />
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//               {/* bs-example-navbar-collapse-1 */}
//             </nav>
//             <div id="wrapper">
//               {/* Sidebar */}
//               <div id="sidebar-wrapper">
//                 <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
//                   <li className="active">
//                     <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-dashboard fa-stack-1x " /></span> Dashboard</a>
//                     <ul className="nav-pills nav-stacked" style={{listStyleType: 'none'}}>
//                       <li><a href="#">link1</a></li>
//                       <li><a href="#">link2</a></li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-flag fa-stack-1x " /></span>Shortcut</a>
//                     <ul className="nav-pills nav-stacked" style={{listStyleType: 'none'}}>
//                       <li><a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-flag fa-stack-1x " /></span>link1</a></li>
//                       <li><a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-flag fa-stack-1x " /></span>link2</a></li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-cloud-download fa-stack-1x " /></span>Overview</a>
//                   </li>
//                   <li>
//                     <a href="#"> <span className="fa-stack fa-lg pull-left"><i className="fa fa-cart-plus fa-stack-1x " /></span>Events</a>
//                   </li>
//                   <li>
//                     <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-youtube-play fa-stack-1x " /></span>About</a>
//                   </li>
//                   <li>
//                     <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-wrench fa-stack-1x " /></span>Services</a>
//                   </li>
//                   <li>
//                     <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-server fa-stack-1x " /></span>Contact</a>
//                   </li>
//                 </ul>
//               </div>
//               {/* /#sidebar-wrapper */}
//               {/* Page Content */}
//               <div id="page-content-wrapper">
//                 <div className="container-fluid xyz">
//                   <div className="row">
//                     <div className="col-lg-12">
//                       <h1>Simple Admin Sidebar With Bootstrap by <a href="http://http://codepen.io/hughbalboa/">@hughbalboa</a></h1>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laudantium nobis cum dignissimos ex inventore, velit blanditiis. Quod laborum soluta quidem culpa officia eligendi, quam, recusandae iste aliquid amet odit! </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* /#page-content-wrapper */}
//             </div>
//             {/* /#wrapper */}
//             {/* jQuery */}

//           </div>
//         );
      
// }

// export default Newside



// import React,{useEffect}from 'react'


// import { FaUserAlt, FaHome, FaLock, FaMoneyBill, FaUser,FaBars } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
// import { BiAnalyse, BiSearch } from "react-icons/bi";
// import { BiCog,BiRupee } from "react-icons/bi";
// import { AiFillDashboard,AiFillCheckSquare,AiFillSound } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
// import { TbReportSearch} from "react-icons/tb";
// import { ImBook } from "react-icons/im";
// import {MdSupportAgent } from "react-icons/md";
// import $ from 'jquery';
// import 'jquery-ui-dist/jquery-ui';
// import './new.css';
// import Dashboard from '../Dashboard'

// const Newside = () => {
//   useEffect(() => {
//     $("#menu-toggle").click(function(e) {
//       e.preventDefault();
//       $("#wrapper").toggleClass("active");
//     })
//   })
  
//   return (
//     <>
//     <div id="wrapper" class="active">
// {/*       
//       <!-- Sidebar -->
//             <!-- Sidebar --> */}
//       <div id="sidebar-wrapper">
//       <ul id="sidebar_menu" class="sidebar-nav">
//            <li class="sidebar-brand"><a id="menu-toggle" href="#">Rbm<span id="main_icon" class="glyphicon glyphicon-align-justify"></span></a></li>
//       </ul>
//         <ul class="sidebar-nav" id="sidebar">     
//           <li><a href="/dashboard"><AiFillDashboard className='m-2'/>Dashboard</a></li>
//           <li><a href="/Creatagent"><FaUserAlt className='m-2'/>Create Agent</a></li>
//           <li><a href="/RcsCheck"><AiFillCheckSquare className='m-2'/>RCS Check</a></li>

//           <li><a href="Richcard"><AiFillSound className='m-2'/>Campaigns</a>
      
//            <li ><a hef="/Richcard"><FaUser className='m-2'/>Rich Card</a></li>
//            <li ><a href="/Corousel"><FaLock className='m-2'/>Corousel</a></li>
//            <li ><a href="/text"><FaMoneyBill  className='m-2'/>text</a></li>


      
//           </li>

//           <li><a href="/Reports"><TbReportSearch className='m-2'/>Reports</a></li>
//           <li><a href="/billing" ><BiRupee className='m-2' />Billing</a></li>
//           <li className='my-5'>
//           <li className='my-2'><a href="/Faq"><ImBook  className='m-2'/>FAQ'S</a></li>
//           <li><a href="/Support"><MdSupportAgent className='m-2'/>Support</a></li>
//         </li>

//         </ul>
//       </div>
          
//       {/* <!-- Page content --> */}
//       <div id="page-content-wrapper">
//         {/* <!-- Keep all page content within the page-content inset div! --> */}
//        {/* <Dashboard/> */}
//       </div>
      
//     </div>
//     </>
//   )
// }

// export default Newside

import React,{useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillPersonFill } from "react-icons/bs";

import { FaUserAlt, FaHome, FaLock, FaMoneyBill, FaUser,FaBars } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog,BiRupee } from "react-icons/bi";
import { AiFillDashboard,AiFillCheckSquare,AiFillSound } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { TbReportSearch} from "react-icons/tb";
import { ImBook } from "react-icons/im";
import {MdSupportAgent } from "react-icons/md";
import './new.css'
import $ from 'jquery';

import 'jquery-ui-dist/jquery-ui';

const Newside = () => {
  useEffect(() => {
      
    
    return () => {
      const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
e.preventDefault();
$wrapper.classList.toggle('toggled');
});
    }
  }, [])
 
  return (
    
    <>
    <div id="wrapper">

<aside id="sidebar-wrapper">
  
  <div class="sidebar-brand">
    <h2>Logo</h2>
   
  </div>
  <ul class="sidebar-nav">
  <li>
                    <a href="/dashboard"> <AiFillDashboard className='m-2'/>Dashboard</a>
                   
                </li>
                <li>
                    <a href="/Creatagent"><FaUserAlt className='m-2'/>Create Agent</a>
                </li>
                <li>
                    <a href="/Rcscheck"><AiFillCheckSquare className='m-2'/>Rcs Check</a>
                </li>
                <li id="pageSubmenu">
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><AiFillSound className='m-2'/>Campaign</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="/Richcard"> <FaUser className='m-2'/>Rich Card</a>
                        </li>
                        <li>
                            <a href="/Corousel"> <FaLock className='m-2'/>Corousel</a>
                        </li>
                        <li>
                            <a href="/text"><FaMoneyBill  className='m-2'/> Text</a>
                        </li>
                    </ul>
                </li>
                <li id='pageSubmenu1'>
                    <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><AiFillSound className='m-2'/>Approval</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu1">
                        <li>
                            <a href="/Campaigna">Campaign</a>
                        </li>
                        <li>
                            <a href="/Agent">Agent</a>
                        </li>
                        <li>
                            <a href="/User">User</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="/Reports"><TbReportSearch className='m-2'/>Reports</a>
                </li>
                <li>
                    <a href="/billing"><BiRupee className='m-2' />Billing</a>
                </li>
               <li className='my-5'>
               <li >
                    <a href="/faq"><ImBook  className='m-2'/>FAQ's</a>
                </li>
                <li className='my-2'>
                    <a href="/Support "><MdSupportAgent className='m-2'/>Support</a>
                </li>
               </li>
            

  </ul>
</aside>

<div id="navbar-wrapper">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a href="#" class="navbar-brand" id="sidebar-toggle"><i class="fa fa-bars"></i></a>
        
      </div>
    </div>
  </nav>
</div>

<section id="content-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="content-title">Test</h2>
        {/* <Dashboard/> */}
      </div>
    </div>
</section>

</div>
    </>
  )
}

export default Newside