// import React from 'react';
// import *  as FaIcons from 'react-icons/fa';
// import *  as AiIcons from 'react-icons/ai';
// import *  as IoIcons from 'react-icons/io';
// import *  as RiIcons from 'react-icons/ri';
// import *  as MdIcons from 'react-icons/md';
// // import Dashboard from '../Dashboard/Dashboard';

// import { FaUserAlt, FaHome, FaLock, FaMoneyBill, FaUser,FaBars } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
// import { BiAnalyse, BiSearch } from "react-icons/bi";
// import { BiCog,BiRupee } from "react-icons/bi";
// import { AiFillDashboard,AiFillCheckSquare,AiFillSound } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
// import { TbReportSearch} from "react-icons/tb";
// import { ImBook } from "react-icons/im";
// import {MdSupportAgent } from "react-icons/md";

// import {
//   CDBBadge,
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem

// } from 'cdbreact';
// import './si.css';
// // import Support  from '../Support/Support';
// import { NavLink } from 'react-router-dom';
// import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Container,Accordion} from 'react-bootstrap';

// const SI = () => {
//   return (
//     <div style={{ display: 'flex', overflow: 'scroll initial',height:'100vh'
// }}>
//       <CDBSidebar textColor="#fff" backgroundColor="#763B75">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//             RBMSTUDIO
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent>
//           <CDBSidebarMenu>
//             <CDBSidebarMenuItem
             
//             >
//               <AiFillDashboard/>
//               <a href="/dashboard" className="text-decoration-none" style={{ color: 'inherit' }}>
//             Dashboard
//           </a>
//             </CDBSidebarMenuItem>
//             <CDBSidebarMenuItem
            
//             >
//               <FaUserAlt/>
//                <a href="/Creatagent" className="text-decoration-none" style={{ color: 'inherit' }}>
//             Create Agent
//           </a>
//             </CDBSidebarMenuItem>
        
		  
// 		  <CDBSidebarMenuItem
//               // icon="sticky-note"
//               suffix={
//                 <CDBBadge color="danger" size="small" borderType="pill">
//                   new
//                 </CDBBadge>
//               }
//             >
//               <AiFillCheckSquare/>
//                <a href="/Rcscheck" className="text-decoration-none" style={{ color: 'inherit' }}>
//             Rcs Check
//           </a>
//             </CDBSidebarMenuItem>
			  
        
        
// 		  <Accordion defaultActiveKey="0">
//   		            	 <Accordion.Item eventKey="1">
					  
// 					    <Accordion.Header>	
//   		 					<MdIcons.MdOutlineManageAccounts /><span ><AiFillSound />Campaigns </span>
//   		 				</Accordion.Header>

// 					    <Accordion.Body>
// 					     	<NavDropdown.Item href="/Richcard"><FaUser />RichCard</NavDropdown.Item>
// 					    </Accordion.Body>
// 					    <Accordion.Body>
// 					     	<NavDropdown.Item href="/Corousel"><FaLock />Corousel</NavDropdown.Item>
// 					    </Accordion.Body>

//                                              <Accordion.Body>
// 					     	<NavDropdown.Item href="/text"><FaMoneyBill />Text</NavDropdown.Item>
// 					    </Accordion.Body>
                                            
                                           



// 					      </Accordion.Item>

					    


//   		   </Accordion>
// 			 <CDBSidebarMenuItem
//               // icon="sticky-note"
//               suffix={
//                 <CDBBadge color="danger" size="small" borderType="pill">
//                   new
//                 </CDBBadge>
//               }
//             >
//               <TbReportSearch/>
//                <a href="/Rcscheck" className="text-decoration-none" style={{ color: 'inherit' }}>
//             Reports
//           </a>
//             </CDBSidebarMenuItem>
			  

// 			<CDBSidebarMenuItem
//               // icon="sticky-note"
//               suffix={
//                 <CDBBadge color="danger" size="small" borderType="pill">
//                   new
//                 </CDBBadge>
//               }
//             >
//               <BiRupee />
//                <a href="/billing" className="text-decoration-none" style={{ color: 'inherit' }}>
//         Billing
//           </a>
//             </CDBSidebarMenuItem>
			  
//           </CDBSidebarMenu>

// 		  <CDBSidebarMenu>
// 		  <CDBSidebarMenuItem
//               // icon="sticky-note"
//               suffix={
//                 <CDBBadge color="danger" size="small" borderType="pill">
//                   new
//                 </CDBBadge>
//               }
//             >
//               <ImBook />
//                <a href="/faq" className="text-decoration-none" style={{ color: 'inherit' }}>
//             FAQ's
//           </a>
//             </CDBSidebarMenuItem>
			  
// 			<CDBSidebarMenuItem
//               // icon="sticky-note"
//               suffix={
//                 <CDBBadge color="danger" size="small" borderType="pill">
//                   new
//                 </CDBBadge>
//               }
//             >
//               <MdSupportAgent/>
//                <a href="/Support" className="text-decoration-none" style={{ color: 'inherit' }}>
//         Support
//           </a>
//             </CDBSidebarMenuItem>
			  
// 		  </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             style={{
//               padding: '20px 5px',
//             }}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>

//       {/* <Support style={{marginLeft:0}}/> */}
     
//     </div>
//   );
// };

// export default SI;

import React from 'react'

import { FaUserAlt, FaHome, FaLock, FaMoneyBill, FaUser,FaBars } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog,BiRupee } from "react-icons/bi";
import { AiFillDashboard,AiFillCheckSquare,AiFillSound } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { TbReportSearch} from "react-icons/tb";
import { ImBook } from "react-icons/im";
import {MdSupportAgent } from "react-icons/md";
import './si.css'

const SI = () => {
  return (
    <div >
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar">

            <ul class="list-unstyled components m-4">
                <h3  >RBM STUDIO</h3>
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

            {/* <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                </li>
            </ul> */}
        </nav>

        {/* <!-- Page Content  --> */}
        

            
    </div>
  )
}

export default SI
