import React from 'react'
// import './menu'
import './text.css'

const Textside = () => {
  return (
//     <div class="main_box">
//     <input type="checkbox" id="check" />
//     <div class="btn_one">
//       <label for="check">
//         <i class="fas fa-bars"></i>
//       </label>
//     </div>
//     <div class="sidebar_menu">
//       <div class="logo">
//         <a href="#">CodingLab</a>
//           </div>
//         <div class="btn_two">
//           <label for="check">
//             <i class="fas fa-times"></i>
//           </label>
//         </div>
//       <div class="menu">
//         <ul>
//           <li><i class="fas fa-qrcode"></i>
//             <a href="#">Dashboard</a>
//           </li>
//           <li>
//             <i class="fas fa-link"></i>
//             <a href="#">Shortcuts</a>
//           </li>
//           <li>
//             <i class="fas fa-stream"></i>
//             <a href="#">Overview</a>
//           </li>
//           <li>
//             <i class="fas fa-calendar-week"></i>
//             <a href="#">Events</a>
//           </li>
//           <li>
//             <i class="fas fa-question-circle"></i>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <i class="fas fa-sliders-h"></i>
//             <a href="#">Services</a>
//           </li>
//           <li>
//             <i class="fas fa-phone-volume"></i>
//             <a href="#">Contact</a>
//           </li>
//           <li>
//           <i class="far fa-comments"></i>
//             <a href="#">Feedback</a>
//           </li>
//         </ul>
//       </div>
//       <div class="social_media">
//         <ul>
//           <a href="#"><i class="fab fa-facebook-f"></i></a>
//           <a href="#"><i class="fab fa-twitter"></i></a>
//           <a href="#"><i class="fab fa-instagram"></i></a>
//           <a href="#"><i class="fab fa-youtube"></i></a>
//         </ul>
//       </div>
//     </div>
//   </div>
<div class="main">
        <div class="side-navbar">
            <ul>
                <li><a href="#">
                    <span class="icon"><i class='bx bxs-dashboard'></i></span>
                    <span class="text"><h2>Carpool</h2></span>
                </a></li>
                <li><a href="#">
                    <span class="icon"><i class='bx bxs-home-circle' ></i></span>
                    <span class="text">Home</span>
                </a></li>
                <li><a href="#">
                    <span class="icon"><i class='bx bxs-message-square-detail' ></i></span>
                    <span class="text">Message</span>
                </a></li>
                <li><a href="#">
                    <span class="icon"><i class='bx bxs-message-rounded-detail' ></i></span>
                    <span class="text">Chat</span>
                </a></li>
                <li><a href="#">
                    <span class="icon"><i class='bx bxs-user' ></i></span>
                    <span class="text">Profile</span>
                </a></li>
                <li><a href="#">
                    <span class="icon"><i class='bx bxs-cloud-upload' ></i></span>
                    <span class="text">Upload</span>
                </a></li>
                <li><a href="#">
                    <span class="icon"><i class='bx bxs-cog' ></i></span>
                    <span class="text">Setting</span>
                </a></li>
                <li><a href="#">
                    <span class="icon"><i class='bx bxs-log-out' ></i></span>
                    <span class="text">Log-Out</span>
                </a></li>
            </ul>
        </div>
        <div class="content">
            <div class="top-navbar">
                <div class="bx bx-menu" id="menu-icon"></div>
                <div class="profile">
                    <img src="img/profile.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Textside
