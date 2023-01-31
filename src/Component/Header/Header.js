import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import  Sidebar from '../Sidebar/Sidebar';
// import FaUserCircle from 'react-icons/Fa'
import { BsFillPersonFill } from "react-icons/bs";
// import image from '../Logow.jpg'

import './header.css'
const Header = () => {
  // const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu();

  return (
    <>
          <div className='Head'>

         <img    src={`${process.env.PUBLIC_URL}/images/Logow.jpg`} className="iamg" 
 />
         <Dropdown>
      <Dropdown.Toggle  variant="violet">
      <div className="user">
         <BsFillPersonFill style={{ height:50,width:50}}/> 
         User 
          <br/>Admin 
         
      </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/UserProfile">My Profile</Dropdown.Item>
        <Dropdown.Item href="/Forgotpassword">Change Password</Dropdown.Item>
        <Dropdown.Item href="/">Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    {/* <Sidebar/> */}

</>
    
  )
}

export default Header